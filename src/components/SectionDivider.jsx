import React from "react";

/**
 * SectionDivider — matches the existing portfolio design language.
 * Uses the same text-outline ghost number pattern from Services/Work,
 * the same accent color, and the same border-white/20 divider style.
 */
const SectionDivider = ({ num, label, title }) => {
  return (
    <div className="container mx-auto">
      {/* top rule */}
      <div className="border-t border-white/10 mb-10" />

      <div className="flex items-end gap-5">
        {/* ghost outline number — same pattern as Services cards */}
        <span
          aria-hidden="true"
          className="text-[64px] xl:text-[80px] font-extrabold leading-none text-outline text-transparent select-none"
        >
          {num}
        </span>

        <div className="flex flex-col pb-2">
          {/* accent label */}
          <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium mb-1">
            {label}
          </span>
          {/* section name */}
          <h2 className="text-3xl xl:text-4xl font-bold text-white leading-none tracking-tight">
            {title}
          </h2>
          {/* decorative accent underline */}
          <div className="mt-2 border-t-2 border-accent/60 w-[120px]" />
        </div>
      </div>

      {/* bottom rule */}
      <div className="border-t border-white/10 mt-8" />
    </div>
  );
};

export default SectionDivider;
