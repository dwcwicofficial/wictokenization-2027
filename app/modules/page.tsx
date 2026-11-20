"use client";
import { useState } from "react";

const modules = [
  { name: "CountryAllowModule", status: "Active", config: "US only (840)", lastTuned: "2d ago" },
  { name: "MaxBalanceModule", status: "Active", config: "Max 10%", lastTuned: "5d ago" },
  { name: "LockupModule", status: "Active", config: "365 days", lastTuned: "1d ago" },
  { name: "ConditionalTransferModule", status: "Active", config: "Threshold 1% + APPROVAL_CLAIM", lastTuned: "3h ago" },
  { name: "SupplyLimitModule", status: "Active", config: "Fixed $5M supply", lastTuned: "Never" },
];

export default function ModulesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Compliance Modules</p>
      <h1 className="font-display text-4xl font-bold mt-2">Module Hub</h1>
      <p className="text-wic-muted mt-2 mb-8">Live ERC-3643 modules for CTTC. AI can recommend changes; all updates go through Check-in Approvals.</p>

      <div className="space-y-3">
        {modules.map((m) => (
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

      <div className="mt-8 glass p-6">
        <div className="font-display text-xl mb-2">Add Module</div>
        <p className="text-sm text-wic-muted mb-4">Deploy a new compliance module from the library or generate one with AI.</p>
        <div className="flex gap-3">
          <button className="btn-gold text-sm py-2 px-4">Browse Library</button>
          <button className="btn-ghost text-sm py-2 px-4">Generate with AI</button>
        </div>
      </div>
    </div>
  );
}