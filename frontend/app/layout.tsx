import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Andrea Ballestrero — Senior BI Consultant",
  description:
    "Portfolio di Andrea Ballestrero, Senior BI Consultant specializzato in Qlik Sense, data visualization e soluzioni BI per i settori Energy & Utilities, manifatturiero e medicale.",
  keywords: [
    "Andrea Ballestrero",
    "BI Consultant",
    "Qlik Sense",
    "Data Visualization",
    "Business Intelligence",
    "Dashboard",
    "KPI",
  ],
  authors: [{ name: "Andrea Ballestrero" }],
  openGraph: {
    title: "Andrea Ballestrero — Senior BI Consultant",
    description:
      "Portfolio di Andrea Ballestrero, Senior BI Consultant specializzato in Qlik Sense e data visualization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
