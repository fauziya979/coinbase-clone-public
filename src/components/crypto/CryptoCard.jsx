import { Link } from "react-router-dom";
import { toAssetPath } from "../../data/marketData";

function CryptoCard({ symbol, name, price, change, marketCap }) {
	const positive = change >= 0;

	return (
		<Link to={toAssetPath(symbol)} className="block">
			<article className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(18,35,67,0.07)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(18,35,67,0.16)]">
				<div className="mb-4 flex items-start justify-between">
					<div>
						<p className="font-display text-2xl text-[var(--text-main)]">{symbol}</p>
						<p className="text-sm text-[var(--text-muted)]">{name}</p>
					</div>
					<span
						className={`rounded-full px-3 py-1 text-xs font-semibold ${
							positive
								? "bg-emerald-100 text-emerald-700"
								: "bg-rose-100 text-rose-700"
						}`}
					>
						{positive ? "+" : ""}
						{change.toFixed(2)}%
					</span>
				</div>

				<p className="text-xl font-semibold text-[var(--text-main)]">${price}</p>
				<p className="mt-2 text-sm text-[var(--text-muted)]">Market cap: {marketCap}</p>
			</article>
		</Link>
	);
}

export default CryptoCard;
