import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-wic-gold text-xs tracking-[0.2em] uppercase mb-4">WIC WORKER ECOSYSTEM · 2027</p>
          <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
            Tokenize Real Estate<br />
            <span className="bg-gold-grad bg-clip-text text-transparent">with AI Coworkers</span>
          </h1>
          <p className="mt-6 text-wic-muted text-lg max-w-xl leading-relaxed">
            Issue, manage, and distribute tokenized real estate assets. No-code studio, automated KYC, live cap table, investor portal, distribution simulation, and AI check-in approvals — all on your private WIC floor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/studio" className="btn-gold">Start Tokenizing</Link>
            <Link href="/marketplace" className="btn-ghost">Browse Assets</Link>
          </div>
          <div className="mt-10 flex gap-8 text-sm text-wic-muted">
            <div><strong className="text-wic-gold text-xl">$5,000,000</strong><br />CTTC live</div>
            <div><strong className="text-wic-green text-xl">142</strong><br />Investors</div>
            <div><strong className="text-wic-purple text-xl">3</strong><br />AI active</div>
          </div>
        </div>
        <div className="relative h-[480px]">
          <div className="glass absolute top-4 left-4 w-64 p-5">
            <div className="text-xs text-wic-muted uppercase tracking-wider">CTTC Project</div>
            <div className="font-display text-3xl font-bold text-wic-gold mt-1">$5,000,000</div>
            <div className="text-wic-green text-sm mt-1">+12.4% YTD</div>
            <div className="mt-3 h-1 bg-white/10 rounded"><div className="h-full w-[68%] bg-gradient-to-r from-wic-gold to-wic-green" /></div>
          </div>
          <div className="glass absolute top-40 right-0 w-72 p-5">
            <div className="text-xs text-wic-muted uppercase">Next Distribution</div>
            <div className="font-display text-3xl font-bold text-wic-green mt-1">$42.6K</div>
            <div className="text-sm text-wic-muted mt-2">Auto-scheduled · 48h</div>
          </div>
          <div className="glass absolute bottom-8 left-12 w-56 p-5">
            <div className="text-xs text-wic-muted uppercase">AI Floor</div>
            <div className="font-display text-2xl font-bold text-wic-purple mt-1">Till · Brief</div>
            <div className="text-xs text-wic-muted mt-1">Warden standing by</div>
          </div>
        </div>
      </div>
    </div>
  );
}