import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Heritage Property Painting Exeter | Listed Building Specialists St Leonard\'s – BSR Decorating',
  description: 'Specialist heritage property & listed building painting in Exeter. Conservation-compliant, traditional materials, period authenticity. St Leonard\'s, conservation areas.',
  keywords: 'heritage property painting Exeter, listed building painting Exeter, conservation area painting Exeter, period property painting Exeter, listed building decorators St Leonards, heritage property painters Exeter, conservation painting Exeter',
  alternates: {
    canonical: '/areas/exeter/heritage-property-painting'
  },
  openGraph: {
    title: 'Heritage Property Painting Exeter | BSR Decorating',
    description: 'Specialist heritage property and listed building painting services in Exeter\'s conservation areas',
    url: 'https://www.bsrdecorating.co.uk/areas/exeter/heritage-property-painting',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heritage Property Painting Exeter | BSR Decorating',
    description: 'Specialist heritage property and listed building painting services in Exeter',
  }
};

export default function ExeterHeritagePropertyPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

