function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-[var(--text-main)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;



