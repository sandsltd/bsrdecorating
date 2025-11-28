import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Commercial Decorating Exeter | Office & Business Painting City Centre – BSR Decorating',
  description: 'Professional commercial decorating in Exeter city centre, business parks & offices. Out-of-hours work, minimal disruption, free quotes. Expert office & retail painting.',
  keywords: 'commercial decorating Exeter, office painting Exeter, business painting Exeter, commercial decorators Exeter city centre, office decorating Exeter, retail painting Exeter, commercial painters Exeter',
  alternates: {
    canonical: '/areas/exeter/commercial-decorating'
  },
  openGraph: {
    title: 'Commercial Decorating Exeter | BSR Decorating',
    description: 'Professional commercial decorating services in Exeter city centre, business parks, and office developments',
    url: 'https://bsrdecorating.co.uk/areas/exeter/commercial-decorating',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Decorating Exeter | BSR Decorating',
    description: 'Professional commercial decorating services in Exeter',
  }
};

export default function ExeterCommercialDecoratingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

