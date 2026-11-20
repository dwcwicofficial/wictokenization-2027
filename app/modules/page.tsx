"use client";
import { useState } from "react";

const activeModules = [
  { name: "CountryAllowModule", status: "Active", config: "US only (840)", lastTuned: "2d ago" },
  { name: "MaxBalanceModule", status: "Active", config: "Max 10%", lastTuned: "5d ago" },
  { name: "LockupModule", status: "Active", config: "365 days", lastTuned: "1d ago" },
  { name: "ConditionalTransferModule", status: "Active", config: "Threshold 1% + APPROVAL_CLAIM", lastTuned: "3h ago" },
  { name: "SupplyLimitModule", status: "Active", config: "Fixed $5M supply", lastTuned: "Never" },
];

const aiTemplates = [
  { name: "AccreditedOnlyModule", description: "Restrict transfers to wallets with a valid ACCREDITED claim", category: "Investor Class" },
  { name: "TimeTransfersLimitsModule", description: "Daily / weekly volume caps per holder to reduce whale impact", category: "Market Protection" },
  { name: "JurisdictionStaggerModule", description: "Different lock-up periods by country code", category: "Regulatory" },
  { name: "YieldBoosterModule", description: "Temporary higher distribution weight for early investors (time-decaying)", category: "Incentives" },
  { name: "RecoveryApprovalModule", description: "Require dual check-in for forced recovery or lost-key transfers", category: "Security" },
  { name: "SecondaryVenueAllowlistModule", description: "Only permit transfers to approved marketplace contracts", category: "Secondary Market" },
];

export default function ModulesPage() {
  const [queued, setQueued] = useState<string[]>([]);

  const queueTemplate = (name: string, description: string) => {
    setQueued((prev) => [...prev, name]);
    const existing = JSON.parse(localStorage.getItem("wic-checkins") || "[]");
    existing.push({
      id: Date.now(),
      type: "New Module",
      asset: "CTTC Project",
      amount: name,
      agent: "Warden",
      status: "Awaiting approval — AI template",
      detail: description,
    });
    localStorage.setItem("wic-checkins", JSON.stringify(existing));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Compliance Modules</p>
      <h1 className="font-display text-4xl font-bold mt-2">Module Hub</h1>
      <p className="text-wic-muted mt-2 mb-8">Live ERC-3643 modules for CTTC. AI-generated templates available below. All changes require Check-in.</p>

      <h2 className="font-display text-xl mb-3">Active Modules</h2>
      <div className="space-y-3 mb-10">
        {activeModules.map((m) => (
          <div key={m.name} className="glass p-5 flex items-center justify-between">
            <div>
              <div className="font-display">{m.name}</div>
              <div className="text-sm text-wic-muted mt-1">{m.config}</div>
              <div className="text-xs text-wic-purple mt-1">Last tuned: {m.lastTuned}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-wic-green">{m.status}</span>
              <button className="btn-ghost text-xs py-1.5 px-3">Configure</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-xl mb-3">AI-Generated Module Templates</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {aiTemplates.map((t) => (
          <div key={t.name} className="glass p-5">
            <div className="text-xs text-wic-gold uppercase">{t.category}</div>
            <div className="font-display mt-1">{t.name}</div>
            <p className="text-sm text-wic-muted mt-2">{t.description}</p>
            <button
              onClick={() => queueTemplate(t.name, t.description)}
              disabled={queued.includes(t.name)}
              className="btn-ghost text-xs mt-3 py-1.5 px-3"
            >
              {queued.includes(t.name) ? "Queued in Check-ins" : "Generate & Queue for Check-in"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}