import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/common/SectionHeading";
import CryptoCard from "../components/crypto/CryptoCard";
import CryptoRow from "../components/crypto/CryptoRow";
import { topCoins } from "../data/marketData";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyGainers, setShowOnlyGainers] = useState(false);

  // Apply user-driven filters so this page demonstrates practical state usage.
  const filteredCoins = topCoins.filter((coin) => {
    const matchesSearch =
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGainerRule = showOnlyGainers ? coin.change > 0 : true;
    return matchesSearch && matchesGainerRule;
  });

  return (
    <div className="page-shell">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(18,35,67,0.08)] ring-1 ring-slate-100 sm:p-10">
          <SectionHeading
            eyebrow="Explore"
            title="Discover market opportunities"
            description="From major coins to new ecosystem trends, this page gives you a dashboard-style overview."
          />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by symbol or name"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-[var(--text-main)] outline-none transition focus:border-[var(--brand-blue)] sm:max-w-xs"
            />
            <button
              type="button"
              onClick={() => setShowOnlyGainers((current) => !current)}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                showOnlyGainers
                  ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300"
                  : "bg-slate-100 text-[var(--text-main)] ring-1 ring-slate-200"
              }`}
            >
              {showOnlyGainers ? "Showing gainers only" : "Show gainers only"}
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {filteredCoins.map((coin) => (
              <CryptoCard key={coin.symbol} {...coin} />
            ))}
          </div>
          {filteredCoins.length === 0 ? (
            <p className="mt-5 text-sm text-[var(--text-muted)]">No assets match your current filter.</p>
          ) : null}
        </section>

        <section className="mt-10 rounded-2xl bg-[var(--surface-alt)] py-5 ring-1 ring-slate-100">
          <div className="px-4 pb-4 sm:px-6">
            <SectionHeading
              eyebrow="Top movers"
              title="Today in detail"
              description="A compact table view designed for quick scanning on desktop and mobile."
            />
          </div>
          {filteredCoins.map((coin) => (
            <CryptoRow key={`${coin.rank}-${coin.symbol}`} {...coin} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Explore;



