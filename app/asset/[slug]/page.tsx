export default function AssetPage({ params }: { params: { slug: string } }) {
  const data: Record<string, any> = {
    cerritos: { name: "Cerritos Station", type: "Commercial · California", value: "$4.8M", yield: "8.2%", funded: "68%", investors: "142", desc: "Tokenized commercial station. Structured as SPV with automated distributions. Till maintains live books." },
    harbor: { name: "Harbor View Residences", type: "Multifamily · Texas", value: "$2.1M", yield: "6.8%", funded: "91%", investors: "89", desc: "Luxury multifamily. High occupancy, stable yield." },
    logistics: { name: "Logistics Hub Alpha", type: "Industrial · Arizona", value: "$6.4M", yield: "9.1%", funded: "45%", investors: "64", desc: "Modern logistics facility. Strong tenant demand." },
  };
  const a = data[params.slug] || data.cerritos;
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="h-72 rounded-2xl bg-gradient-to-br from-wic-soft to-wic-dark mb-8 flex items-center justify-center text-6xl">🏢</div>
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">{a.type}</p>
      <h1 className="font-display text-4xl font-bold mt-2">{a.name}</h1>
      <p className="text-wic-muted mt-4 max-w-2xl">{a.desc}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="glass p-4 text-center"><div className="font-display text-2xl text-wic-gold">{a.value}</div><div className="text-xs text-wic-muted">Value</div></div>
        <div className="glass p-4 text-center"><div className="font-display text-2xl text-wic-green">{a.yield}</div><div className="text-xs text-wic-muted">Yield</div></div>
        <div className="glass p-4 text-center"><div className="font-display text-2xl">{a.funded}</div><div className="text-xs text-wic-muted">Funded</div></div>
        <div className="glass p-4 text-center"><div className="font-display text-2xl text-wic-purple">{a.investors}</div><div className="text-xs text-wic-muted">Investors</div></div>
      </div>
      <button className="btn-gold mt-8">Invest from $100</button>
    </div>
  );
}