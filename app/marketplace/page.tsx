import Link from "next/link";

const assets = [
  { slug: "cttc", name: "CTTC Project", type: "40 acres · Dunnigan County, CA", value: "$5,000,000", yield: "8.2%", funded: 68 },
  { slug: "harbor", name: "Harbor View Residences", type: "Multifamily · Texas", value: "$2.1M", yield: "6.8%", funded: 91 },
  { slug: "logistics", name: "Logistics Hub Alpha", type: "Industrial · Arizona", value: "$6.4M", yield: "9.1%", funded: 45 },
];

export default function MarketplacePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Live Assets</p>
      <h1 className="font-display text-4xl font-bold mt-2">Tokenized Real Estate</h1>
      <p className="text-wic-muted mt-2">Fractional ownership from $100. Compliant, automated, AI-assisted.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {assets.map((a) => (
          <Link key={a.slug} href={`/asset/${a.slug}`} className="glass overflow-hidden hover:-translate-y-1 hover:border-wic-gold/40 transition-all">
            <div className="h-48 bg-gradient-to-br from-wic-soft to-wic-dark flex items-center justify-center text-4xl">{a.slug === "cttc" ? "🌾" : "🏢"}</div>
            <div className="p-5">
              <div className="font-semibold">{a.name}</div>
              <div className="text-sm text-wic-muted mt-1">{a.type}</div>
              <div className="flex justify-between mt-3 text-sm">
                <span className="text-wic-gold">{a.value}</span>
                <span className="text-wic-green">{a.yield} yield</span>
              </div>
              <div className="mt-3 h-1 bg-white/10 rounded"><div className="h-full bg-gradient-to-r from-wic-gold to-wic-green" style={{ width: `${a.funded}%` }} /></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}