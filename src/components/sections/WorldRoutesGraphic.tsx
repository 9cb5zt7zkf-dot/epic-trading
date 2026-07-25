"use client";

import { useState } from "react";
import { REGIONS, ETHIOPIA_MARKER } from "@/content/regions";
import { cx } from "@/lib/utils";

// A stylized trade-route diagram, not a literal geographic map — deliberately
// so, since we don't want to imply cartographic precision. Ethiopia sits at
// the center with animated arcs reaching toward five labeled regions.
// Interactive: hovering a region highlights its route and label.
export function WorldRoutesGraphic({ interactive = false }: { interactive?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e7c869" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e7c869" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* faint reference grid */}
      <g stroke="#e7c869" strokeOpacity="0.08">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 10} y1={0} x2={i * 10} y2={100} />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 10} x2={100} y2={i * 10} />
        ))}
      </g>

      {/* routes */}
      {REGIONS.map((region) => {
        const isActive = interactive ? active === region.id : true;
        return (
          <path
            key={region.id}
            d={`M ${ETHIOPIA_MARKER.x},${ETHIOPIA_MARKER.y} Q ${(ETHIOPIA_MARKER.x + region.x) / 2},${Math.min(ETHIOPIA_MARKER.y, region.y) - 12} ${region.x},${region.y}`}
            fill="none"
            stroke="#e7c869"
            strokeWidth={isActive ? 0.45 : 0.25}
            strokeOpacity={isActive ? 0.85 : 0.25}
            strokeLinecap="round"
            strokeDasharray="1.2 1.6"
            className="transition-all duration-300"
          />
        );
      })}

      {/* Ethiopia origin node */}
      <circle cx={ETHIOPIA_MARKER.x} cy={ETHIOPIA_MARKER.y} r="7" fill="url(#nodeGlow)" />
      <circle cx={ETHIOPIA_MARKER.x} cy={ETHIOPIA_MARKER.y} r="1.6" fill="#e7c869" />
      <circle cx={ETHIOPIA_MARKER.x} cy={ETHIOPIA_MARKER.y} r="2.6" fill="none" stroke="#e7c869" strokeOpacity="0.5" strokeWidth="0.3" />
      <text x={ETHIOPIA_MARKER.x + 3.2} y={ETHIOPIA_MARKER.y - 3} fill="#f7f3ea" fontSize="2.6" fontFamily="ui-monospace, monospace">
        ETHIOPIA
      </text>

      {/* region nodes */}
      {REGIONS.map((region) => (
        <g
          key={region.id}
          onMouseEnter={() => interactive && setActive(region.id)}
          onMouseLeave={() => interactive && setActive(null)}
          className={interactive ? "cursor-pointer" : undefined}
        >
          <circle cx={region.x} cy={region.y} r={active === region.id ? 2.2 : 1.4} fill="#e7c869" className="transition-all duration-300" />
          <circle cx={region.x} cy={region.y} r="3.6" fill="none" stroke="#e7c869" strokeOpacity="0.4" strokeWidth="0.25" />
          <text
            x={region.x + 2.6}
            y={region.y - 2.4}
            fill="#f7f3ea"
            fontSize="2.4"
            fontFamily="ui-monospace, monospace"
            className={cx("transition-opacity duration-300", interactive && active !== region.id ? "opacity-60" : "opacity-100")}
          >
            {region.name.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}
