"use client";
import { useState } from "react";

export default function DistributionsPage() {
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const runSim = () => {
    setSimulating(true);
    setResult(null);
    setTimeout(() => {
      setResult("Simulation complete. $42,600 distributed to 142 verified investors. Till updated cap table. Brief drafted investor note — awaiting your check-in.");
      setSimulating(false);
    }, 1800);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Distribution Simulation</p>
      <h1 className="font-display text-4xl font-bold mt-2">Run a Distribution</h1>
      <p className="text-wic-muted mt-2 mb-8">Preview automated payouts before they go live. Warden confirms eligibility. Till executes. Brief prepares the update.</p>
      <div className="glass p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-display text-xl">Cerritos Station · Q4</div>
            <div className="text-sm text-wic-muted">Projected $42,600 · 142 holders</div>
          </div>
          <button onClick={runSim} disabled={simulating} className="btn-gold text-sm py-2 px-5">
            {simulating ? "Simulating…" : "Run Simulation"}
          </button>
        </div>
      </div>
      {result && (
        <div className="glass p-6 border-wic-green/30">
          <div className="text-wic-green font-semibold mb-2">Simulation Result</div>
          <p className="text-sm">{result}</p>
          <button className="btn-ghost mt-4 text-sm">Send to Check-in</button>
        </div>
      )}
    </div>
  );
}