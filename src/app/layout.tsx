import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { QuoteModalProvider } from "@/contexts/QuoteModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSR Decorating Ltd - Professional Decorating Services in Dawlish, Devon",
  description: "Professional decorating services for both domestic and commercial properties in Dawlish, Devon. Quality workmanship, competitive prices, and exceptional results.",
  keywords: "decorating, painter, decorator, Dawlish, Devon, domestic decorating, commercial decorating, interior design",
  authors: [{ name: "BSR Decorating Ltd" }],
  openGraph: {
    title: "BSR Decorating Ltd - Professional Decorating Services",
    description: "Professional decorating services for both domestic and commercial properties in Dawlish, Devon.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuoteModalProvider>
          <div className="min-h-screen bg-bsr-black text-bsr-white" style={{ backgroundColor: '#000000' }}>
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </QuoteModalProvider>
      </body>
    </html>
  );
}
