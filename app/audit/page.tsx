"use client";

const logs = [
  { time: "2026-11-21 07:14", event: "KYC passed", actor: "Investor 0x4a2…", detail: "OFAC clear · Accredited claim written" },
  { time: "2026-11-21 06:48", event: "Module change queued", actor: "Warden", detail: "ConditionalTransferModule threshold update" },
  { time: "2026-11-20 18:22", event: "Distribution simulated", actor: "Till", detail: "$42,600 projected · 142 holders" },
  { time: "2026-11-20 11:05", event: "Investor onboarded", actor: "Brief", detail: "Harbor View · subscription signed" },
  { time: "2026-11-19 15:30", event: "Transfer blocked", actor: "Compliance", detail: "CountryAllowModule · non-US recipient" },
];

export default function AuditPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Audit & Reporting</p>
      <h1 className="font-display text-4xl font-bold mt-2">Exportable Audit Logs</h1>
      <p className="text-wic-muted mt-2 mb-8">Immutable trail of KYC, transfers, module changes, and distributions. Ready for regulators or counsel.</p>

      <div className="space-y-2 mb-8">
        {logs.map((l, i) => (
          <div key={i} className="glass p-4 flex flex-col md:flex-row md:items-center justify-between gap-2 text-sm">
            <div className="text-wic-muted w-40">{l.time}</div>
            <div className="font-medium flex-1">{l.event}</div>
            <div className="text-wic-purple">{l.actor}</div>
            <div className="text-wic-muted text-xs md:w-64">{l.detail}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button className="btn-gold text-sm">Export CSV</button>
        <button className="btn-ghost text-sm">Export for Counsel</button>
      </div>
    </div>
  );
}