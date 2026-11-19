import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "WICTOKENIZATION 2027",
  description: "Tokenize real estate with AI coworkers. Next.js + Tailwind dark cosmic platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-wic-dark text-wic-text antialiased">
        <Header />
        <main className="pt-20 min-h-screen">{children}</main>
        <footer className="border-t border-white/10 py-10 text-center text-sm text-wic-muted">
          <div className="font-display text-lg font-bold mb-2">WIC<span className="text-wic-gold">TOKENIZATION</span> · 2027</div>
          <p>WIC Worker Ecosystem · $1.00/h active floor · AI-native RWA lifecycle</p>
        </footer>
      </body>
    </html>
  );
}