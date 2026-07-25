"use client";

import { useState, type FormEvent } from "react";
import type { EnquiryCategory } from "@/content/enquiryForms";
import { TIMELINE_OPTIONS, ATTACHMENT_LIMITS } from "@/content/enquiryForms";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/utils";

type Attachment = { name: string; size: number; dataBase64: string };

type DeliveryStatus = {
  ok: boolean;
  skipped: boolean;
  reason?: string;
};

export function EnquiryForm({ category }: { category: EnquiryCategory }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ referenceNumber: string; delivered?: Record<string, DeliveryStatus> } | null>(null);

  function setField(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function addFiles(fileList: FileList) {
    const files = Array.from(fileList);
    for (const file of files) {
      const ext = "." + (file.name.split(".").pop() ?? "").toLowerCase();
      if (!ATTACHMENT_LIMITS.acceptedTypes.includes(ext)) {
        setErrors([`"${file.name}" is not an accepted file type.`]);
        continue;
      }
      if (file.size > ATTACHMENT_LIMITS.maxFileBytes) {
        setErrors([`"${file.name}" exceeds the per-file size limit.`]);
        continue;
      }
      if (attachments.length >= ATTACHMENT_LIMITS.maxFiles) {
        setErrors([`No more than ${ATTACHMENT_LIMITS.maxFiles} files may be attached.`]);
        continue;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = String(reader.result).split(",")[1] ?? "";
        setAttachments((prev) => [...prev, { name: file.name, size: file.size, dataBase64: base64 }]);
      };
      reader.readAsDataURL(file);
    }
  }

  function removeAttachment(index: number) {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  }

  const REQUIRED_FIELDS: [string, string][] = [
    ["contactName", "Full name"],
    ["email", "Email"],
    ["company", "Company"],
    ["country", "Country"],
    ["product", category.productLabel],
    ["quantity", "Quantity"],
    ["destination", "Destination"],
    ["timeline", "Timeline"],
  ];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const missing = REQUIRED_FIELDS.filter(([name]) => !values[name]?.trim()).map(([, label]) => `${label} is required.`);
    if (missing.length) {
      setErrors(missing);
      return;
    }
    setErrors([]);
    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: category.slug,
          ...values,
          attachments,
          companyWebsite: honeypot,
        }),
      });
      const body = await res.json();
      setSubmitting(false);
      if (res.status !== 200 || !body.ok) {
        setErrors(body.errors ?? ["Something went wrong submitting your enquiry. Please try again."]);
        return;
      }
      setResult({ referenceNumber: body.referenceNumber, delivered: body.delivered });
    } catch {
      setSubmitting(false);
      setErrors(["We could not reach the server. Please check your connection and try again."]);
    }
  }

  if (result) {
    const emailOk = result.delivered?.customerEmail?.ok;
    return (
      <div className="rounded-2xl border border-ink-900/8 bg-sand-100/60 p-10 text-center dark:border-sand-100/8 dark:bg-forest-900/60">
        <p className="text-[15px] text-ink-800 dark:text-sand-200">Your enquiry has been received.</p>
        <p className="mt-3 font-mono text-2xl tracking-wide text-gold-600 dark:text-gold-400">{result.referenceNumber}</p>
        <p className="mt-4 max-w-md mx-auto text-[13.5px] text-ink-600 dark:text-sand-400">
          {emailOk
            ? "A confirmation has been sent to your email. Please quote your reference number in any follow-up correspondence."
            : "Please save this reference number for your records and quote it in any follow-up correspondence."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.length > 0 && (
        <div className="rounded-xl border border-red-400/40 bg-red-400/10 px-5 py-4 text-[13.5px] text-red-700 dark:text-red-300">
          <ul className="list-disc space-y-1 pl-4">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="contactName" values={values} setField={setField} required />
        <Field label="Email" name="email" type="email" values={values} setField={setField} required />
        <Field label="Phone" name="phone" type="tel" values={values} setField={setField} />
        <Field label="Company" name="company" values={values} setField={setField} required />
        <Field label="Country" name="country" values={values} setField={setField} required />
        <Field label={category.productLabel} name="product" placeholder={category.productPlaceholder} values={values} setField={setField} required />
        <Field label="Quantity" name="quantity" placeholder="e.g. 1 x 40ft container, 500 units" values={values} setField={setField} required />
        <Field label="Destination" name="destination" placeholder="City, country" values={values} setField={setField} required />
        <Field label="Budget (optional)" name="budget" values={values} setField={setField} />
        <div className="flex flex-col gap-2">
          <label className="text-[13px] text-ink-700 dark:text-sand-300" htmlFor="timeline">
            Timeline *
          </label>
          <select
            id="timeline"
            value={values.timeline ?? ""}
            onChange={(e) => setField("timeline", e.target.value)}
            className="rounded-lg border border-ink-900/15 bg-sand-50 px-4 py-3 text-[14.5px] text-ink-900 focus:border-gold-500 focus:outline-none dark:border-sand-100/15 dark:bg-forest-950 dark:text-sand-50"
          >
            <option value="">Select…</option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[13px] text-ink-700 dark:text-sand-300" htmlFor="specification">
          Specification / additional details
        </label>
        <textarea
          id="specification"
          value={values.specification ?? ""}
          onChange={(e) => setField("specification", e.target.value)}
          rows={4}
          className="rounded-lg border border-ink-900/15 bg-sand-50 px-4 py-3 text-[14.5px] text-ink-900 focus:border-gold-500 focus:outline-none dark:border-sand-100/15 dark:bg-forest-950 dark:text-sand-50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[13px] text-ink-700 dark:text-sand-300">Attachments (optional)</span>
        <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-ink-900/20 px-6 py-8 text-center dark:border-sand-100/20">
          <Icon name="upload" className="h-5 w-5 text-ink-500 dark:text-sand-400" />
          <span className="text-[13px] text-ink-600 dark:text-sand-400">
            Click to choose files — up to {ATTACHMENT_LIMITS.maxFiles}, {Math.round(ATTACHMENT_LIMITS.maxFileBytes / (1024 * 1024))}MB each
          </span>
          <input
            type="file"
            multiple
            accept={ATTACHMENT_LIMITS.acceptedTypes.join(",")}
            className="hidden"
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
        </label>
        {attachments.length > 0 && (
          <ul className="mt-2 space-y-2">
            {attachments.map((a, i) => (
              <li key={a.name + i} className="flex items-center justify-between rounded-lg border border-ink-900/10 px-4 py-2.5 text-[13px] dark:border-sand-100/10">
                <span>
                  {a.name} <span className="text-ink-500 dark:text-sand-400">({Math.round(a.size / 1024)} KB)</span>
                </span>
                <button type="button" onClick={() => removeAttachment(i)} aria-label={`Remove ${a.name}`}>
                  <Icon name="trash" className="h-4 w-4 text-ink-500 hover:text-red-500 dark:text-sand-400" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Honeypot — hidden from real visitors, left blank by anyone not scripting the page. */}
      <div className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="companyWebsite">Leave blank</label>
        <input id="companyWebsite" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={cx(
          "inline-flex items-center gap-2.5 rounded-full bg-forest-900 px-8 py-3.5 text-[15px] font-medium text-sand-50 transition-colors hover:bg-forest-800 disabled:opacity-60 dark:bg-gold-500 dark:text-forest-950 dark:hover:bg-gold-400"
        )}
      >
        {submitting ? "Submitting…" : `Submit ${category.label}`}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  values,
  setField,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  values: Record<string, string>;
  setField: (name: string, value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] text-ink-700 dark:text-sand-300" htmlFor={name}>
        {label} {required && "*"}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={values[name] ?? ""}
        onChange={(e) => setField(name, e.target.value)}
        className="rounded-lg border border-ink-900/15 bg-sand-50 px-4 py-3 text-[14.5px] text-ink-900 focus:border-gold-500 focus:outline-none dark:border-sand-100/15 dark:bg-forest-950 dark:text-sand-50"
      />
    </div>
  );
}
