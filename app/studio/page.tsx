export default function StudioPage() {
  const steps = [
    { n: 1, title: "Asset Structure", desc: "SPV, legal docs, token model — Till drafts in minutes", status: "Ready", color: "text-wic-green" },
    { n: 2, title: "Investor Portal & KYC", desc: "Automated onboarding. Warden reviews edge cases", status: "In progress", color: "text-wic-gold" },
    { n: 3, title: "Distributions & Cap Table", desc: "Automated dividends. Live cap table. Brief drafts updates", status: "Queued", color: "text-wic-muted" },
  ];
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Issuer Studio</p>
      <h1 className="font-display text-4xl font-bold mt-2">Launch a Tokenized Asset</h1>
      <p className="text-wic-muted mt-2 mb-8">Guided flow. Till handles structure. Warden flags compliance. You approve.</p>
      {steps.map((s) => (
        <div key={s.n} className="glass p-6 mb-4 flex items-center justify-between">
          <div>
            <div className="font-display text-xl">{s.n}. {s.title}</div>
            <div className="text-sm text-wic-muted mt-1">{s.desc}</div>
          </div>
          <span className={`text-sm ${s.color}`}>{s.status}</span>
        </div>
      ))}
      <button className="btn-gold mt-4">Continue with Till</button>
    </div>
  );
}