function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary:
      "bg-[var(--brand-blue)] text-white hover:bg-[#0c58cf] focus-visible:ring-[var(--brand-blue)]",
    ghost:
      "bg-white/80 text-[var(--text-main)] ring-1 ring-slate-200 hover:bg-white focus-visible:ring-slate-500",
    outline:
      "bg-transparent text-[var(--brand-blue)] ring-1 ring-[var(--brand-blue)] hover:bg-blue-50 focus-visible:ring-[var(--brand-blue)]",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;



