import { Link } from "react-router-dom";

const columns = [
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press", "Legal & privacy"],
  },
  {
    title: "Individuals",
    links: ["Buy & sell", "Base App", "Coinbase One", "Derivatives", "Savings"],
  },
  {
    title: "Developers",
    links: ["Developer Platform", "Server Wallets", "Data API", "Trade API", "Staking"],
  },
  {
    title: "Support",
    links: ["Help center", "Contact us", "Status", "Bitcoin price", "Ethereum price"],
  },
];

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-[#e9edf3]">
      <div className="mx-auto grid w-full max-w-[1320px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[180px_1fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-blue)] text-3xl font-bold text-white">
            C
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title} className="space-y-2.5">
              <h3 className="text-base font-semibold text-[var(--text-main)]">{column.title}</h3>
              {column.links.map((item) => (
                <p key={item} className="text-[15px] text-slate-600 transition hover:text-[var(--text-main)]">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;



