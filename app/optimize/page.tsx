"use client";
import { useState } from "react";

const initialInsights = [
  { title: "Module Efficiency", metric: "94%", detail: "CountryAllow + MaxBalance blocking 6% of attempted transfers", agent: "Warden", action: "Review blocked transfers", trend: "+2.1%" },
  { title: "AI Floor Cost", metric: "$18.40", detail: "Till 4.2h · Brief 1.1h · Warden 0.8h this week", agent: "Till", action: "Optimize distribution batching", trend: "-8%" },
  { title: "Gas & Compliance", metric: "0.0042 ETH", detail: "Average compliance check cost down 12% after LockupModule tuning", agent: "Warden", action: "Apply recommended threshold", trend: "-12%" },
  { title: "CTTC Funding Velocity", metric: "+2.4%", detail: "68% funded · 142 investors · projected close in 18 days", agent: "Brief", action: "Draft investor update", trend: "+0.6%" },
  { title: "Secondary Transfer Success", metric: "91%", detail: "ConditionalTransferModule approving 91% of secondary attempts after check-in", agent: "Warden", action: "View failed transfers", trend: "+4%" },
  { title: "Distribution Accuracy", metric: "99.8%", detail: "Pro-rata distributions matching off-chain calculations within 0.2%", agent: "Till", action: "Reconcile last batch", trend: "stable" },
];

const recommendations = [
  { id: "rec1", module: "ConditionalTransferModule", suggestion: "Lower threshold from 1% to 0.5% of supply for tighter secondary control", impact: "High", risk: "Low" },
  { id: "rec2", module: "LockupModule", suggestion: "Stagger lock-up release for early investors to improve secondary liquidity", impact: "Medium", risk: "Medium" },
  { id: "rec3", module: "MaxBalanceModule", suggestion: "Raise cap from 10% to 12% — current concentration is well below limit", impact: "Low", risk: "Low" },
  { id: "rec4", module: "TimeTransfersLimitsModule", suggestion: "Add daily volume cap of 2% of supply to reduce whale impact", impact: "Medium", risk: "Low" },
];

export default function OptimizePage() {
  const [queued, setQueued] = useState<string[]>([]);

  const queueForCheckin = (id: string, module: string) => {
    setQueued((prev) => [...prev, id]);
    const existing = JSON.parse(localStorage.getItem("wic-checkins") || "[]");
    existing.push({
      id: Date.now(),
      type: "Module Change",
      asset: "CTTC Project",
      amount: module,
      agent: "Warden",
      status: "Awaiting approval — AI recommendation",
      detail: recommendations.find((r) => r.id === id)?.suggestion,
    });
    localStorage.setItem("wic-checkins", JSON.stringify(existing));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Optimization & Observability</p>
      <h1 className="font-display text-4xl font-bold mt-2">AI-Powered Insights</h1>
      <p className="text-wic-muted mt-2 mb-8">Metadata-driven. Contextual AI. Every change requires Check-in Approval.</p>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {initialInsights.map((i) => (
          <div key={i.title} className="glass p-5">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-wic-muted uppercase">{i.title}</div>
                <div className="font-display text-3xl font-bold text-wic-gold mt-1">{i.metric}</div>
              </div>
              <div className="text-right">
                <span className="text-xs text-wic-purple">{i.agent}</span>
                <div className="text-xs text-wic-green mt-1">{i.trend}</div>
              </div>
            </div>
            <p className="text-sm text-wic-muted mt-2">{i.detail}</p>
            <button className="btn-ghost text-xs mt-3 py-1.5 px-3">{i.action}</button>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl mb-4">Module Optimization Hub</h2>
      <div className="space-y-3">
        {recommendations.map((r) => (
          <div key={r.id} className="glass p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="font-display">{r.module}</div>
              <p className="text-sm text-wic-muted mt-1">{r.suggestion}</p>
              <div className="flex gap-3 mt-2 text-xs">
                <span className="text-wic-green">Impact: {r.impact}</span>
                <span className="text-wic-gold">Risk: {r.risk}</span>
              </div>
            </div>
            <button
              onClick={() => queueForCheckin(r.id, r.module)}
              disabled={queued.includes(r.id)}
              className="btn-gold text-sm py-2 px-4 whitespace-nowrap"
            >
              {queued.includes(r.id) ? "Queued in Check-ins" : "Apply Recommendation"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}