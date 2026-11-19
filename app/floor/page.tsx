export default function FloorPage() {
  const agents = [
    { name: "Till", role: "Books & Cap Table", color: "text-wic-gold", desc: "Live P&L, automated distributions, tax packs." },
    { name: "Brief", role: "Investor Relations", color: "text-wic-purple", desc: "Drafts updates, Q&A, distribution notices for review." },
    { name: "Warden", role: "Compliance", color: "text-wic-green", desc: "KYC flags, transfer rules, regulatory check-ins." },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Private Floor</p>
      <h1 className="font-display text-4xl font-bold mt-2">Your AI Coworkers</h1>
      <p className="text-wic-muted mt-2 mb-8">$1.00 per active hour. They work. You approve. File lands on the desk.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {agents.map((a) => (
          <div key={a.name} className="glass p-6">
            <div className={`font-display text-2xl ${a.color}`}>{a.name}</div>
            <div className="text-wic-muted text-sm mt-1">{a.role}</div>
            <p className="text-sm mt-3">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}