import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Portfolio | BSR Decorating Work Gallery - Dawlish, Newton Abbot, Torquay & Exeter",
  description: "View our completed decorating projects across Devon. Professional painting and decorating portfolio showcasing domestic and commercial work in Dawlish, Newton Abbot, Torquay, Exeter and surrounding areas.",
  keywords: "decorating portfolio Devon, painting projects gallery, before after decorating, BSR project examples, decorating work Dawlish Newton Abbot Torquay Exeter, completed decorating projects, professional decorating gallery",
  alternates: {
    canonical: new URL('/portfolio', 'https://bsrdecorating.co.uk')
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
