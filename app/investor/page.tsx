"use client";
import { useState } from "react";

export default function InvestorPortal() {
  const [tab, setTab] = useState("holdings");
  const [signed, setSigned] = useState(false);
  const [walletType, setWalletType] = useState<"self" | "custodial">("self");
  const [custodian, setCustodian] = useState("Fireblocks");

  const signAgreement = () => {
    setSigned(true);
    const existing = JSON.parse(localStorage.getItem("wic-checkins") || "[]");
    existing.push({
      id: Date.now(),
      type: "E-Signature",
      asset: "CTTC Project",
      amount: "Subscription Agreement",
      agent: "Brief",
      status: "Awaiting final approval — investor signed",
      detail: `Investor completed e-signature. Wallet preference: ${walletType === "self" ? "Self-custody" : custodian}.`,
    });
    localStorage.setItem("wic-checkins", JSON.stringify(existing));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Investor Portal</p>
      <h1 className="font-display text-4xl font-bold mt-2">Your Portfolio</h1>
      <div className="flex gap-2 mt-6 mb-8 flex-wrap">
        {["holdings", "distributions", "documents", "onboarding"].map((t) => (
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
          <div className="glass p-4 flex justify-between items-center">
            <span>Subscription Agreement</span>
            <div className="flex gap-2">
              <button className="text-wic-gold text-sm">View</button>
              <button className="text-wic-gold text-sm">Download</button>
            </div>
          </div>
          <div className="glass p-4 flex justify-between">Q3 Tax Package <span className="text-wic-gold text-sm">Download</span></div>
          <div className="glass p-4 flex justify-between">Operating Agreement <span className="text-wic-gold text-sm">Download</span></div>
        </div>
      )}

      {tab === "onboarding" && (
        <div className="space-y-6">
          <div className="glass p-6">
            <div className="font-display text-xl mb-3">E-Signature</div>
            <p className="text-sm text-wic-muted mb-4">Review and sign the CTTC Project Subscription Agreement.</p>
            <button
              onClick={signAgreement}
              disabled={signed}
              className="btn-gold text-sm"
            >
              {signed ? "Signed — Queued for Final Approval" : "Review & E-Sign Agreement"}
            </button>
          </div>

          <div className="glass p-6">
            <div className="font-display text-xl mb-3">Wallet & Custody Preference</div>
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setWalletType("self")}
                className={`px-4 py-2 rounded-full text-sm ${walletType === "self" ? "bg-wic-gold text-wic-dark" : "border border-white/10"}`}
              >
                Self-Custody
              </button>
              <button
                onClick={() => setWalletType("custodial")}
                className={`px-4 py-2 rounded-full text-sm ${walletType === "custodial" ? "bg-wic-gold text-wic-dark" : "border border-white/10"}`}
              >
                Custodial
              </button>
            </div>
            {walletType === "custodial" && (
              <div>
                <label className="text-sm text-wic-muted">Preferred Custodian</label>
                <select
                  value={custodian}
                  onChange={(e) => setCustodian(e.target.value)}
                  className="mt-1 w-full bg-wic-card border border-white/10 rounded-lg px-3 py-2 text-sm"
                >
                  <option>Fireblocks</option>
                  <option>BitGo</option>
                  <option>Coinbase Prime</option>
                  <option>Anchorage Digital</option>
                  <option>Copper</option>
                  <option>Ledger Enterprise</option>
                </select>
              </div>
            )}
            <p className="text-xs text-wic-muted mt-3">
              Preference will be recorded with your e-signature and sent to Check-ins.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}