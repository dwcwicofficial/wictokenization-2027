"use client";

const rails = [
  { name: "ACH", desc: "Bank transfer · 1–3 business days · low cost", icon: "🏦" },
  { name: "Wire", desc: "Same-day / next-day · higher amounts", icon: "⚡" },
  { name: "USDC", desc: "Instant on-chain · Circle supported", icon: "💵" },
  { name: "USDT", desc: "Instant on-chain · multi-chain", icon: "₮" },
];

const custodians = [
  "Fireblocks",
  "BitGo",
  "Coinbase Prime",
  "Anchorage Digital",
  "Copper",
  "Ledger Enterprise",
];

export default function PaymentsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Payments & Custody</p>
      <h1 className="font-display text-4xl font-bold mt-2">Funding & Safekeeping</h1>
      <p className="text-wic-muted mt-2 mb-8">Dollar rails + institutional custody. Investor wallets can be self-custodial or custodial.</p>

      <h2 className="font-display text-xl mb-3">Payment Rails</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {rails.map((r) => (
          <div key={r.name} className="glass p-5 flex items-start gap-4">
            <div className="text-3xl">{r.icon}</div>
            <div>
              <div className="font-display">{r.name}</div>
              <p className="text-sm text-wic-muted mt-1">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-xl mb-3">Custody Partners</h2>
      <div className="grid md:grid-cols-3 gap-3 mb-8">
        {custodians.map((c) => (
          <div key={c} className="glass p-4 text-center">
            <div className="font-display">{c}</div>
            <div className="text-xs text-wic-muted mt-1">MPC / Multisig ready</div>
          </div>
        ))}
      </div>

      <button className="btn-gold">Configure Payment & Custody for CTTC</button>
    </div>
  );
}