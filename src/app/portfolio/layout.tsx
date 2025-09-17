import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decorating Portfolio Dawlish & Devon | Before & After Projects – BSR Decorating",
  description: "See our stunning before & after decorating projects across Dawlish, Exeter, Torquay and Devon. Real customer transformations and professional results.",
  keywords: "decorating portfolio Devon, painting projects gallery, before after decorating, BSR project examples, decorating work Dawlish Newton Abbot Torquay Exeter, completed decorating projects, professional decorating gallery",
  alternates: {
    canonical: '/portfolio'
  },
  openGraph: {
    title: "Project Portfolio | BSR Decorating Devon",
    description: "Completed decorating projects across Devon - see our professional work",
    url: "https://bsrdecorating.co.uk/portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Portfolio | BSR Decorating Devon",
    description: "Completed decorating projects across Devon - see our professional work"
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
