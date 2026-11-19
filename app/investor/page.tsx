"use client";
import { useState } from "react";

export default function InvestorPortal() {
  const [tab, setTab] = useState("holdings");
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Investor Portal</p>
      <h1 className="font-display text-4xl font-bold mt-2">Your Portfolio</h1>
      <div className="flex gap-2 mt-6 mb-8">
        {["holdings", "distributions", "documents"].map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-full text-sm capitalize ${tab === t ? "bg-wic-gold text-wic-dark" : "border border-white/10 text-wic-muted"}`}>
            {t}
          </button>
        ))}
      </div>
      {tab === "holdings" && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass p-6">
            <div className="font-display text-2xl">CTTC Project</div>
            <div className="text-wic-gold text-3xl font-bold mt-2">$12,400</div>
            <div className="text-sm text-wic-muted">40 acres · Dunnigan County, CA · 8.2% yield</div>
          </div>
          <div className="glass p-6">
            <div className="font-display text-2xl">Harbor View</div>
            <div className="text-wic-gold text-3xl font-bold mt-2">$5,800</div>
            <div className="text-sm text-wic-muted">6.8% yield · 91% of target</div>
          </div>
        </div>
      )}
      {tab === "distributions" && (
        <div className="glass p-6">
          <div className="text-wic-green text-2xl font-bold">Next: $186.40</div>
          <div className="text-wic-muted mt-2">Scheduled in 48 hours · Auto-payout to connected wallet</div>
        </div>
      )}
      {tab === "documents" && (
        <div className="space-y-3">
          <div className="glass p-4 flex justify-between">Subscription Agreement <span className="text-wic-gold text-sm">Download</span></div>
          <div className="glass p-4 flex justify-between">Q3 Tax Package <span className="text-wic-gold text-sm">Download</span></div>
        </div>
      )}
    </div>
  );
}