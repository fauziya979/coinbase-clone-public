import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sectionImage from "../assets/section-company.svg";

function Company() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="mx-auto w-full max-w-[1320px] px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <section className="grid items-center gap-8 rounded-[2rem] bg-white p-6 shadow-[0_10px_35px_rgba(13,29,55,0.08)] ring-1 ring-slate-200 lg:grid-cols-2 lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue)]">Company</p>
            <h1 className="mt-3 font-display text-5xl leading-tight text-[#0a0b12]">Building the cryptoeconomy for everyone</h1>
            <p className="mt-4 text-lg text-slate-600">
              Learn about our mission, product direction, and the principles that shape the platform.
            </p>
          </div>
          <img src={sectionImage} alt="Company section" className="h-72 w-full rounded-3xl object-cover" />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Company;

