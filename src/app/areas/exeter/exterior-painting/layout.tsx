import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Exterior Painting Exeter | House Painting St Leonard\'s, Pennsylvania – BSR Decorating',
  description: 'Professional exterior painting in Exeter covering St Leonard\'s, Pennsylvania, Heavitree, Topsham & Newtown. Weather-resistant finishes, free quotes. Expert house painting.',
  keywords: 'exterior painting Exeter, house painting Exeter, exterior decorators Exeter, exterior painters Exeter St Leonards, house painters Pennsylvania Exeter, exterior painting Heavitree, exterior painting Topsham, Newtown exterior painters',
  alternates: {
    canonical: '/areas/exeter/exterior-painting'
  },
  openGraph: {
    title: 'Exterior Painting Exeter | BSR Decorating',
    description: 'Professional exterior painting services in Exeter covering St Leonard\'s, Pennsylvania, Heavitree, Topsham, and Newtown',
    url: 'https://www.bsrdecorating.co.uk/areas/exeter/exterior-painting',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Painting Exeter | BSR Decorating',
    description: 'Professional exterior painting services in Exeter',
  }
};

export default function ExeterExteriorPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

