import Button from "../components/common/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SignIn() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="mx-auto flex min-h-[80vh] w-full max-w-6xl items-center px-4 py-10 sm:px-8">
        <section className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(18,35,67,0.12)] ring-1 ring-slate-100 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue)]">
            Welcome back
          </p>
          <h1 className="mt-2 font-display text-3xl text-[var(--text-main)]">Sign in</h1>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Access your dashboard and continue building your crypto skills.
          </p>

          <form className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-[var(--text-main)]">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[var(--brand-blue)]"
              />
            </label>

            <label className="block text-sm font-medium text-[var(--text-main)]">
              Password
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[var(--brand-blue)]"
              />
            </label>

            <Button type="button" className="w-full">
              Sign in
            </Button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;



