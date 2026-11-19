"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-wic-dark/80 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="font-display text-xl font-bold tracking-tight">
        WIC<span className="text-wic-gold">TOKENIZATION</span>
      </Link>
      <nav className="hidden md:flex gap-6 text-sm text-wic-muted">
        <Link href="/" className="hover:text-wic-gold">Home</Link>
        <Link href="/marketplace" className="hover:text-wic-gold">Marketplace</Link>
        <Link href="/studio" className="hover:text-wic-gold">Issuer Studio</Link>
        <Link href="/investor" className="hover:text-wic-gold">Investor Portal</Link>
        <Link href="/distributions" className="hover:text-wic-gold">Distributions</Link>
        <Link href="/checkins" className="hover:text-wic-gold">Check-ins</Link>
        <Link href="/floor" className="hover:text-wic-gold">AI Floor</Link>
      </nav>
      <Link href="/studio" className="btn-gold text-sm py-2 px-5">Launch Studio</Link>
    </header>
  );
}