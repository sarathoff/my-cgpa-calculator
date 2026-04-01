import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mycgpacalculator.in"),
  title: "CGPA Calculator | Official CGPA to Percentage Conversion Tool",
  description: "Free and fast online CGPA calculator. Convert CGPA to percentage, SGPA to CGPA, and use university-specific calculators for SRM, VIT, VTU, and Anna University.",
  keywords: ["CGPA Calculator", "CGPA to Percentage", "SGPA to CGPA", "SRM CGPA", "VIT CGPA", "VTU CGPA", "Anna Univ CGPA"],
  openGraph: {
    title: "CGPA Calculator | Official CGPA to Percentage Conversion Tool",
    description: "Convert CGPA to percentage and SGPA to CGPA instantly with our accurate online calculator.",
    url: "https://mycgpacalculator.in",
    siteName: "My CGPA Calculator",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CGPA Calculator | Official CGPA to Percentage Conversion Tool",
    description: "Convert CGPA to percentage and SGPA to CGPA instantly with our accurate online calculator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSans.className} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
