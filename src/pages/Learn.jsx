import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { learnTracks } from "../data/marketData";

function Learn() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-8">
        <section className="grid gap-8 rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(18,35,67,0.08)] ring-1 ring-slate-100 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Learn"
            title="Master crypto one practical lesson at a time"
            description="Structured tracks help you build confidence from basics to advanced DeFi concepts."
          />
          <div className="rounded-2xl bg-[var(--surface-alt)] p-6 ring-1 ring-slate-100">
            <p className="text-sm font-semibold text-[var(--text-main)]">Progress roadmap</p>
            <div className="mt-4 space-y-4">
              {learnTracks.map((track, index) => (
                <div key={track.title} className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-blue)] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-main)]">{track.title}</p>
                    <p className="text-xs text-[var(--text-muted)]">{track.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {learnTracks.map((track) => (
            <article
              key={track.title}
              className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(18,35,67,0.07)] ring-1 ring-slate-100"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue)]">
                {track.level}
              </p>
              <h3 className="mt-2 font-display text-2xl text-[var(--text-main)]">{track.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {track.summary}
              </p>
              <Button variant="ghost" className="mt-6 w-full">
                Start module
              </Button>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Learn;



