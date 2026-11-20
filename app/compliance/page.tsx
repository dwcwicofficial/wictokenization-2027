"use client";
import { useState } from "react";

const exemptions = [
  { name: "Reg D 506(c)", desc: "Accredited investors only · general solicitation allowed · no offering cap", status: "Recommended for CTTC" },
  { name: "Reg A+ Tier 2", desc: "Up to $75M · retail + accredited · SEC qualification required", status: "Available" },
  { name: "Reg CF", desc: "Crowdfunding · up to $5M · broader investor access", status: "Available" },
];

const kycSteps = [
  "Identity verification (passport / driver’s license)",
  "KYB for entities",
  "BSA/AML screening",
  "OFAC sanctions check",
  "Accreditation verification (506(c))",
  "Audit log generated",
];

export default function CompliancePage() {
  const [selected, setSelected] = useState("Reg D 506(c)");

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Regulatory & Compliance</p>
      <h1 className="font-display text-4xl font-bold mt-2">US Securities Path</h1>
      <p className="text-wic-muted mt-2 mb-8">Choose exemption, run full KYC/AML/OFAC, and lock the rules into ERC-3643 modules. All outputs go to Check-ins.</p>

      <h2 className="font-display text-xl mb-3">Exemption Selection</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {exemptions.map((e) => (
          <button
            key={e.name}
            onClick={() => setSelected(e.name)}
            className={`glass p-5 text-left transition-all ${selected === e.name ? "border-wic-gold" : ""}`}
          >
            <div className="font-display">{e.name}</div>
            <p className="text-sm text-wic-muted mt-2">{e.desc}</p>
            <div className="text-xs text-wic-green mt-2">{e.status}</div>
          </button>
        ))}
      </div>

      <h2 className="font-display text-xl mb-3">KYC / AML / OFAC Pipeline</h2>
      <div className="glass p-6 mb-8">
        <div className="space-y-3">
          {kycSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-wic-gold/20 text-wic-gold text-xs flex items-center justify-center">{i + 1}</div>
              <span className="text-sm">{step}</span>
            </div>
          ))}
        </div>
        <button className="btn-gold mt-6 text-sm">Run Full Screening & Queue for Check-in</button>
      </div>

      <div className="glass p-6">
        <div className="font-display text-xl mb-2">Selected Path: {selected}</div>
        <p className="text-sm text-wic-muted">Warden will enforce the corresponding transfer restrictions via ERC-3643 modules. Audit logs will be exportable.</p>
      </div>
    </div>
  );
}