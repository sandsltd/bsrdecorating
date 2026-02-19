import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Rental Refresh Painting Exeter | Landlord Painting Services St Leonard\'s – BSR Decorating',
  description: 'Professional rental refresh painting in Exeter for landlords. Quick turnaround, durable finishes, competitive rates. St Leonard\'s, Pennsylvania, Heavitree, Topsham & Newtown.',
  keywords: 'rental refresh painting Exeter, landlord painting Exeter, rental property painting Exeter, property refresh Exeter, landlord decorators Exeter, rental painting St Leonards, property refresh Pennsylvania Exeter, rental painting Heavitree',
  alternates: {
    canonical: '/areas/exeter/rental-refresh-painting'
  },
  openGraph: {
    title: 'Rental Refresh Painting Exeter | BSR Decorating',
    description: 'Professional rental property refresh painting services in Exeter for landlords and property managers',
    url: 'https://www.bsrdecorating.co.uk/areas/exeter/rental-refresh-painting',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rental Refresh Painting Exeter | BSR Decorating',
    description: 'Professional rental property refresh painting services in Exeter',
  }
};

export default function ExeterRentalRefreshPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

