"use client";
import { useState } from "react";

export default function BlockchainPage() {
  const [connected, setConnected] = useState(false);
  const [wallet, setWallet] = useState("");

  const connect = () => {
    setConnected(true);
    setWallet("0x4a2f...c8e1");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-wic-gold text-xs tracking-[0.2em] uppercase">Blockchain Integration</p>
      <h1 className="font-display text-4xl font-bold mt-2">On-Chain Layer</h1>
      <p className="text-wic-muted mt-2 mb-8">ERC-3643 token, Identity Registry, Compliance modules, and event stream for CTTC Project.</p>

      <div className="glass p-6 mb-6">
        <div className="font-display text-xl mb-3">Wallet Connection</div>
        {!connected ? (
          <button onClick={connect} className="btn-gold text-sm">Connect Wallet</button>
        ) : (
          <div>
            <div className="text-wic-green">Connected</div>
            <div className="font-mono text-sm mt-1">{wallet}</div>
            <div className="text-xs text-wic-muted mt-2">Network: Ethereum · Identity verified · Claims active</div>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="glass p-5">
          <div className="text-xs text-wic-muted uppercase">Token Contract</div>
          <div className="font-mono text-sm mt-1">0xCTTC...3643</div>
          <div className="text-xs text-wic-purple mt-2">ERC-3643 · Supply locked to $5M</div>
        </div>
        <div className="glass p-5">
          <div className="text-xs text-wic-muted uppercase">Identity Registry</div>
          <div className="font-mono text-sm mt-1">0xIDReg...a91f</div>
          <div className="text-xs text-wic-purple mt-2">ONCHAINID claims · Trusted Issuers active</div>
        </div>
      </div>

      <div className="glass p-6">
        <div className="font-display text-xl mb-3">Live Event Stream</div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span>Transfer blocked</span><span className="text-wic-muted">CountryAllowModule</span></div>
          <div className="flex justify-between"><span>Claim written</span><span className="text-wic-muted">ACCREDITED · Warden</span></div>
          <div className="flex justify-between"><span>Mint</span><span className="text-wic-muted">Investor 0x4a2… · 1,240 tokens</span></div>
          <div className="flex justify-between"><span>Compliance check</span><span className="text-wic-green">Passed</span></div>
        </div>
      </div>
    </div>
  );
}