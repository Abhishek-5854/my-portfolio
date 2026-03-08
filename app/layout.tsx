import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Abhishek",
  description: "Full-stack developer with expertise in GenAI and agentic systems",
};

// Client-side wrapper responsible for initializing AOS animations
import AOSInit from "@/components/AOSInit";

// layout simply wraps children in the client AOS initializer

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100 font-sans antialiased">
        <AOSInit>{children}</AOSInit>
      </body>
    </html>
  );
}
