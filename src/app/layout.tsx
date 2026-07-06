import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secure Guard Security Services || Educational Institute Security",
  description:
    "Professional school campus security guards, visitor check-in, event safety, and access control designed to protect students, staff, and daily school operations.",
  keywords: [
    "educational institute security",
    "school security guards",
    "campus security officers",
    "college security patrol",
    "visitor check-in safety",
    "access control",
    "secure guard",
    "after-hours school patrol",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Secure Guard Security Services || Educational Institute Security",
    description:
      "Professional school campus security guards, visitor check-in, event safety, and access control designed to protect students, staff, and daily school operations.",
    type: "website",
  },
};

import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
