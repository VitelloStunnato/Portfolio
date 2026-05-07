import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
