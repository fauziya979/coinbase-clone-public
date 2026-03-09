import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/common/Button";
import { findCoinBySymbol } from "../data/marketData";

function AssetDetail() {
  const { symbol } = useParams();
  const coin = findCoinBySymbol(symbol);

  if (!coin) {
    return (
      <div className="page-shell">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-8">
          <section className="rounded-3xl bg-white p-8 ring-1 ring-slate-100">
            <h1 className="font-display text-3xl text-[var(--text-main)]">Asset not found</h1>
            <p className="mt-3 text-[var(--text-muted)]">
              The asset symbol <span className="font-semibold">{symbol}</span> does not exist in your local dataset.
            </p>
            <Link to="/explore" className="mt-6 inline-block">
              <Button>Back to Explore</Button>
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const positive = coin.change >= 0;
  const [tradeAmount, setTradeAmount] = useState("100");
  const [tradeSide, setTradeSide] = useState("buy");
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  // This static dataset mimics chart bars until real historical API data is connected.
  const chartBars = [42, 58, 49, 66, 61, 74, 68, 82, 77, 86, 80, 92];

  return (
    <div className="page-shell">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(18,35,67,0.08)] ring-1 ring-slate-100 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">Asset detail</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="font-display text-4xl text-[var(--text-main)]">{coin.name}</h1>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {coin.symbol}
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl bg-[var(--surface-alt)] p-4 ring-1 ring-slate-100">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Price</p>
              <p className="mt-2 text-xl font-semibold text-[var(--text-main)]">${coin.price}</p>
            </article>
            <article className="rounded-2xl bg-[var(--surface-alt)] p-4 ring-1 ring-slate-100">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">24h change</p>
              <p className={`mt-2 text-xl font-semibold ${positive ? "text-emerald-600" : "text-rose-600"}`}>
                {positive ? "+" : ""}
                {coin.change.toFixed(2)}%
              </p>
            </article>
            <article className="rounded-2xl bg-[var(--surface-alt)] p-4 ring-1 ring-slate-100">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Volume</p>
              <p className="mt-2 text-xl font-semibold text-[var(--text-main)]">{coin.volume}</p>
            </article>
            <article className="rounded-2xl bg-[var(--surface-alt)] p-4 ring-1 ring-slate-100">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Market cap</p>
              <p className="mt-2 text-xl font-semibold text-[var(--text-main)]">{coin.marketCap}</p>
            </article>
          </div>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <article className="rounded-2xl border border-slate-100 p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--text-main)]">7-day mini chart</p>
                <p className={`text-sm font-semibold ${positive ? "text-emerald-600" : "text-rose-600"}`}>
                  {positive ? "+" : ""}
                  {coin.change.toFixed(2)}%
                </p>
              </div>
              <div className="flex h-40 items-end gap-1.5 rounded-xl bg-[var(--surface-alt)] px-3 pb-3 pt-6">
                {chartBars.map((barHeight, index) => (
                  <span
                    key={`${coin.symbol}-bar-${index}`}
                    className="w-full rounded-t bg-gradient-to-t from-[var(--brand-blue)] to-cyan-300/85"
                    style={{ height: `${barHeight}%` }}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-[var(--text-muted)]">
                Placeholder chart for UI practice. Replace with real chart data later.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-100 p-5">
              <p className="text-sm font-semibold text-[var(--text-main)]">Quick trade</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Mock CTA section similar to Coinbase. Buttons are non-functional for now.
              </p>

              <label className="mt-4 block text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                Amount (USD)
                <input
                  type="text"
                  value={tradeAmount}
                  onChange={(event) => setTradeAmount(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-[var(--text-main)] outline-none transition focus:border-[var(--brand-blue)]"
                />
              </label>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  onClick={() => setTradeSide("buy")}
                  className={`w-full ${tradeSide === "buy" ? "" : "bg-slate-200 text-[var(--text-main)] hover:bg-slate-300"}`}
                >
                  Buy {coin.symbol}
                </Button>
                <Button
                  type="button"
                  variant={tradeSide === "sell" ? "primary" : "outline"}
                  onClick={() => setTradeSide("sell")}
                  className="w-full"
                >
                  Sell {coin.symbol}
                </Button>
              </div>

              <Button
                type="button"
                variant="ghost"
                className={`mt-3 w-full ${isWatchlisted ? "bg-amber-100 text-amber-800 ring-amber-300" : ""}`}
                onClick={() => setIsWatchlisted((current) => !current)}
              >
                {isWatchlisted ? "In watchlist" : "Add to watchlist"}
              </Button>

              <p className="mt-3 text-xs text-[var(--text-muted)]">
                Ready to {tradeSide} {coin.symbol} with ${tradeAmount || "0"}.
              </p>
            </article>
          </section>

          <article className="mt-8 rounded-2xl border border-slate-100 p-5">
            <p className="text-sm font-semibold text-[var(--text-main)]">About {coin.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{coin.about}</p>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              Circulating supply: <span className="font-semibold text-[var(--text-main)]">{coin.supply}</span>
            </p>
          </article>

          <div className="mt-8">
            <Link to="/explore">
              <Button variant="outline">Back to Explore</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AssetDetail;



