import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Interior Painting Exeter | Room & House Painting St Leonard\'s, Pennsylvania – BSR Decorating',
  description: 'Professional interior painting in Exeter covering St Leonard\'s, Pennsylvania, Heavitree, Topsham & Newtown. Quality finishes, free quotes. Expert room & house painting.',
  keywords: 'interior painting Exeter, room painting Exeter, house painting Exeter, interior decorators Exeter, painters Exeter St Leonards, interior painting Pennsylvania Exeter, house painters Heavitree, interior painting Topsham, Newtown painters',
  alternates: {
    canonical: '/areas/exeter/interior-painting'
  },
  openGraph: {
    title: 'Interior Painting Exeter | BSR Decorating',
    description: 'Professional interior painting services in Exeter covering St Leonard\'s, Pennsylvania, Heavitree, Topsham, and Newtown',
    url: 'https://bsrdecorating.co.uk/areas/exeter/interior-painting',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Painting Exeter | BSR Decorating',
    description: 'Professional interior painting services in Exeter',
  }
};

export default function ExeterInteriorPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

