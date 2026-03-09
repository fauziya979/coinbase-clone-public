import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/common/Button";
import { topCoins } from "../data/marketData";
import heroTradeIllustration from "../assets/hero-trade-illustration.svg";
import savingsDarkPanel from "../assets/savings-dark-panel.svg";
import exploreCardArtwork from "../assets/explore-card.svg";
import learnCardArtwork from "../assets/learn-card.svg";

const trustCards = [
  {
    title: "The largest public crypto company",
    body:
      "Coinbase is one of the most recognized names in crypto, built for transparency and trust.",
  },
  {
    title: "Your crypto is your crypto",
    body:
      "We focus on protecting user assets with strong platform controls and modern account security.",
  },
  {
    title: "The help you need, when you need it",
    body:
      "Support resources, help guides, and in-app assistance make getting started easier.",
  },
];

function Home() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="mx-auto w-full max-w-[1320px] px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-8">
          <div className="space-y-5">
            <h1 className="font-display text-5xl leading-[1.02] text-[#0a0b12] sm:text-6xl lg:text-7xl">
              Hello, UK! Meet Coinbase GB
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-slate-700">
              Coinbase is the most trusted platform in the UK for buying, selling and trading crypto.
              Deposit GBP into your account for free to get started today.
            </p>
            <Button className="rounded-full px-8 py-3 text-base">Sign up</Button>
          </div>

          <article className="rounded-[2rem] bg-white p-5 shadow-[0_10px_35px_rgba(13,29,55,0.08)] ring-1 ring-slate-200 lg:p-6">
            {/* Replace with your Coinbase-downloaded hero SVG when ready. */}
            <img
              src={heroTradeIllustration}
              alt="Trading card illustration"
              className="mb-5 h-56 w-full rounded-2xl object-cover lg:h-64"
            />
            <div className="space-y-3 text-base text-slate-700">
              <p className="flex items-center justify-between">
                <span className="font-semibold text-[var(--text-main)]">Buy</span>
                <span>Buy crypto with cash</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="font-semibold text-[var(--text-main)]">Recurring buy</span>
                <span>Set up regular investing</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="font-semibold text-[var(--text-main)]">Sell</span>
                <span>Sell crypto for cash</span>
              </p>
            </div>
          </article>
        </section>

        <section className="mt-16 rounded-[2rem] bg-[#03070f] p-6 text-white sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Replace with your Coinbase-downloaded dark panel SVG when ready. */}
            <img
              src={savingsDarkPanel}
              alt="Savings panel artwork"
              className="h-72 w-full rounded-3xl object-cover"
            />
            <div>
              <h2 className="font-display text-4xl leading-tight lg:text-6xl">Earn 3.50% AER on your cash savings</h2>
              <p className="mt-4 max-w-lg text-base text-slate-300">
                Savings account with interest paid daily. Instant access. Protected and designed for beginners.
              </p>
              <button
                type="button"
                className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
              >
                Get started
              </button>
            </div>
          </div>
        </section>

        <section className="mt-16 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-display text-5xl leading-tight text-[#0a0b12] lg:text-6xl">
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-slate-600">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <button type="button" className="mt-6 rounded-full bg-[#050811] px-7 py-3 text-sm font-semibold text-white">
              See more assets
            </button>
          </div>

          <article className="rounded-[2rem] bg-[#02050d] p-6 text-white lg:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="rounded-full bg-slate-700/70 px-4 py-1.5">Tradable</span>
              <span className="text-slate-300">Top gainers</span>
              <span className="text-slate-300">New on Coinbase</span>
            </div>
            {topCoins.map((coin) => (
              <div key={coin.symbol} className="mb-3 flex items-center justify-between border-b border-slate-800/90 pb-2 last:border-b-0">
                <p className="text-2xl font-medium sm:text-3xl">{coin.name}</p>
                <div className="text-right">
                  <p className="text-xl sm:text-2xl">${coin.price}</p>
                  <p className={`text-sm ${coin.change >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                    {coin.change >= 0 ? "↗" : "↘"} {Math.abs(coin.change).toFixed(2)}%
                  </p>
                </div>
              </div>
            ))}
          </article>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] bg-[#e5eaef] p-6 lg:p-7">
            {/* Replace with your Coinbase-downloaded feature SVG when ready. */}
            <img
              src={exploreCardArtwork}
              alt="Explore crypto artwork"
              className="mb-5 h-72 w-full rounded-3xl object-cover"
            />
            <h3 className="font-display text-4xl text-[#0a0b12] lg:text-5xl">Explore more crypto</h3>
            <p className="mt-3 text-lg text-slate-600">
              Browse real-time prices, charts, and daily movers for thousands of cryptocurrencies.
            </p>
          </article>
          <article className="rounded-[2rem] bg-[#e5eaef] p-6 lg:p-7">
            {/* Replace with your Coinbase-downloaded feature SVG when ready. */}
            <img
              src={learnCardArtwork}
              alt="Learn basics artwork"
              className="mb-5 h-72 w-full rounded-3xl object-cover"
            />
            <h3 className="font-display text-4xl text-[#0a0b12] lg:text-5xl">Learn the basics</h3>
            <p className="mt-3 text-lg text-slate-600">
              Explore beginner guides, practical tutorials, and market updates on Bitcoin and Ethereum.
            </p>
          </article>
        </section>

        <section className="mt-16">
          <h2 className="text-center font-display text-5xl leading-[1.05] text-[#0a0b12] sm:text-6xl lg:text-7xl">
            The most trusted cryptocurrency exchange
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-slate-600 sm:text-2xl">
            Millions of users trust us, and so can you. The proof is in our platform.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {trustCards.map((card) => (
              <article key={card.title} className="rounded-[2rem] bg-[#e7ebf0] p-7 lg:p-8">
                <h3 className="font-display text-3xl leading-tight text-[#0a0b12] lg:text-4xl">{card.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">{card.body}</p>
                <button
                  type="button"
                  className="mt-7 rounded-full bg-[#050811] px-6 py-3 text-sm font-semibold text-white"
                >
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;


