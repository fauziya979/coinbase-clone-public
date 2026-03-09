import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/", internal: true },
  { label: "Explore", to: "/explore", internal: true },
  { label: "Learn", to: "/learn", internal: true },
  { label: "Individuals", to: "/individuals", internal: true },
  { label: "Businesses", to: "/businesses", internal: true },
  { label: "Institutions", to: "/institutions", internal: true },
  { label: "Developers", to: "/developers", internal: true },
  { label: "Company", to: "/company", internal: true },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link to="/" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-blue)] text-3xl font-bold text-white">
            C
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold leading-none transition xl:text-base ${
                    isActive
                      ? "text-[var(--brand-blue)]"
                      : "text-[var(--text-main)]/95 hover:text-[var(--brand-blue)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-700 transition hover:bg-slate-200 sm:inline-flex"
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>
          </button>
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-700 transition hover:bg-slate-200 sm:inline-flex"
            aria-label="Language"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18" />
              <path d="M12 3a15 15 0 0 1 0 18" />
              <path d="M12 3a15 15 0 0 0 0 18" />
            </svg>
          </button>

          <NavLink to="/signin">
            {({ isActive }) => (
              <span
                className={
                  `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold transition ${
                    isActive
                      ? "bg-[var(--text-main)] text-white"
                      : "bg-slate-100 text-[var(--text-main)] hover:bg-slate-200"
                  }`
                }
              >
                Sign in
              </span>
            )}
          </NavLink>
          <NavLink to="/signup">
            {({ isActive }) => (
              <span
                className={
                  `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold text-white transition ${
                    isActive
                      ? "bg-[#084fb5]"
                      : "bg-[var(--brand-blue)] hover:bg-[#0b55c0]"
                  }`
                }
              >
                Sign up
              </span>
            )}
          </NavLink>
        </div>
      </nav>

      <div className="border-t border-slate-200 bg-slate-100/70 px-4 py-2 text-center text-xs text-slate-700 sm:px-8">
        Don&apos;t invest unless you&apos;re prepared to lose all the money you invest. This is a high-risk investment.
      </div>
    </header>
  );
}

export default Navbar;


