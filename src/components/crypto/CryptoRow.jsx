import { Link } from "react-router-dom";
import { toAssetPath } from "../../data/marketData";

function CryptoRow({ rank, symbol, name, price, change, volume }) {
  const positive = change >= 0;

  return (
    <Link
      to={toAssetPath(symbol)}
      className="grid grid-cols-[40px_1.2fr_1fr_1fr] items-center gap-4 border-b border-slate-100 px-4 py-4 text-sm transition hover:bg-slate-50 sm:grid-cols-[50px_1.2fr_1fr_1fr_1fr]"
    >
      <p className="text-[var(--text-muted)]">{rank}</p>
      <p className="font-semibold text-[var(--text-main)]">
        {symbol}
        <span className="ml-2 text-xs font-medium text-[var(--text-muted)]">{name}</span>
      </p>
      <p className="hidden text-[var(--text-main)] sm:block">${price}</p>
      <p
        className={`font-semibold ${
          positive ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        {positive ? "+" : ""}
        {change.toFixed(2)}%
      </p>
      <p className="hidden text-[var(--text-muted)] sm:block">{volume}</p>
    </Link>
  );
}

export default CryptoRow;



