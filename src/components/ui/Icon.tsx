// Single hand-authored line-icon set — one consistent 1.5px stroke language,
// no icon-font or external dependency. Add new keys here as needed.
type IconName =
  | "coffee" | "seed" | "sprout" | "cattle" | "building" | "gear" | "truck"
  | "globe" | "search" | "shield" | "handshake" | "check" | "factory" | "ship"
  | "document" | "route" | "box" | "stamp" | "briefcase" | "pin" | "arrow"
  | "menu" | "close" | "sun" | "moon" | "mail" | "phone" | "chevronDown" | "upload" | "trash";

const PATHS: Record<IconName, string> = {
  coffee: '<path d="M6 10h11v6a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5v-6Z"/><path d="M17 12h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M9 4c-.7.7-.7 1.3 0 2M12.5 4c-.7.7-.7 1.3 0 2"/>',
  seed: '<ellipse cx="12" cy="12" rx="5" ry="8" transform="rotate(20 12 12)"/><path d="M12 4v16" stroke-dasharray="1 3"/>',
  sprout: '<path d="M12 21V11"/><path d="M12 11C12 7 8 5 4 5c0 4 4 6 8 6z"/><path d="M12 13c0-3 2.5-4.5 6-4.5 0 3-2.5 4.5-6 4.5z"/>',
  cattle: '<circle cx="12" cy="13" r="5"/><path d="M7 10c-1.5-1.5-1.5-4 0-4.5M17 10c1.5-1.5 1.5-4 0-4.5M9 8.5 8 5.5M15 8.5l1-3"/>',
  building: '<rect x="4" y="3" width="9" height="18"/><rect x="14" y="9" width="6" height="12"/><path d="M7 7h2M10 7h0M7 11h2M7 15h2"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6"/>',
  truck: '<rect x="2" y="8" width="11" height="8"/><path d="M13 11h4l3.5 3.5V16H13z"/><circle cx="6.5" cy="18" r="1.7"/><circle cx="16.5" cy="18" r="1.7"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 2.5 4.5 5.5 4.5 9s-1.5 6.5-4.5 9M12 3c-3 2.5-4.5 5.5-4.5 9s1.5 6.5 4.5 9"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z"/><path d="M8.5 12l2.3 2.3L15.5 9.5"/>',
  handshake: '<path d="M2 12l4-3 3 2 3-2 3 2 4-2"/><path d="M8 11l3 6 3-1-2-5"/><path d="M14 11l2 4 3-1-2-5"/>',
  check: '<path d="M4 12.5l5 5L20 6"/>',
  factory: '<path d="M3 21V11l4.5 3V11l4.5 3V7l4.5 4v10H3z"/><path d="M3 21h18"/>',
  ship: '<path d="M3 14h18l-2.5 6H5.5z"/><path d="M6 14V6h4v3"/><path d="M12 9V4M12 4h4v3"/>',
  document: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  route: '<circle cx="5" cy="6" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M5 8.4V12a3 3 0 0 0 3 3h2a3 3 0 0 1 3 3"/>',
  box: '<path d="M3 8l9-5 9 5-9 5-9-5Z"/><path d="M3 8v9l9 5 9-5V8"/><path d="M12 13v9"/>',
  stamp: '<rect x="7" y="14" width="10" height="6"/><path d="M9 14v-3a3 3 0 0 1 6 0v3"/><path d="M4 20h16"/>',
  briefcase: '<rect x="3" y="7" width="18" height="12" rx="1.5"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  pin: '<path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/>',
  arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  close: '<path d="M5 5l14 14M19 5L5 19"/>',
  sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M22 12h-2.4M4.4 12H2M19 5l-1.7 1.7M6.7 17.3 5 19M19 19l-1.7-1.7M6.7 6.7 5 5"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>',
  mail: '<rect x="3" y="6" width="18" height="13"/><path d="M3.5 7l8.5 7 8.5-7"/>',
  phone: '<path d="M6.5 3h3l1.5 4.5-2.3 1.7a13 13 0 0 0 6.1 6.1l1.7-2.3L21 14v3a2 2 0 0 1-2.2 2C11 18.5 5.5 13 4 5.2A2 2 0 0 1 6.5 3z"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  trash: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: PATHS[name] }}
    />
  );
}

export type { IconName };
