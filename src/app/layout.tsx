import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vatsala Jha | Software Engineer & Accessibility Developer",
  description: "Portfolio of Vatsala Jha - Software Engineer specializing in accessibility, full-stack development, and AI/ML technologies. Currently pursuing MS in Computer Science at Rutgers University.",
  keywords: ["software engineer", "accessibility developer", "full stack", "React", "TypeScript", "AI/ML", "Rutgers University"],
  authors: [{ name: "Vatsala Jha" }],
  openGraph: {
    title: "Vatsala Jha | Software Engineer Portfolio",
    description: "Coded by passion, crafted for impact. Explore my journey in software engineering and accessibility development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}