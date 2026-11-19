"use client";
import { useState } from "react";

const pending = [
  { id: 1, type: "Distribution", asset: "CTTC Project", amount: "$42,600", agent: "Till", status: "Awaiting approval" },
  { id: 2, type: "Investor Update", asset: "Harbor View", agent: "Brief", status: "Draft ready" },
  { id: 3, type: "Transfer", asset: "Logistics Hub", amount: "12,000 tokens", agent: "Warden", status: "Compliance review" },
];

export default function CheckinsPage() {
  const [items, setItems] = useState(pending);

  const approve = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Check-in Approvals</p>
      <h1 className="font-display text-4xl font-bold mt-2">Human Approval Gate</h1>
      <p className="text-wic-muted mt-2 mb-8">Nothing leaves the floor without your OK. AI coworkers prepare. You decide.</p>
      {items.length === 0 ? (
        <div className="glass p-8 text-center text-wic-muted">All clear. No pending check-ins.</div>
      ) : (
        items.map((item) => (
          <div key={item.id} className="glass p-5 mb-4 flex items-center justify-between">
            <div>
              <div className="font-display">{item.type} · {item.asset}</div>
              <div className="text-sm text-wic-muted mt-1">{item.amount || ""} · Prepared by {item.agent}</div>
              <div className="text-xs text-wic-gold mt-1">{item.status}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => approve(item.id)} className="btn-gold text-sm py-2 px-4">Approve</button>
              <button className="btn-ghost text-sm py-2 px-4">Review</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}