import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Decorator Exeter – Interior & Exterior Painting | Domestic & Commercial – BSR Decorating',
  description: 'Professional decorators in Exeter covering homes, offices, shops & heritage properties. Quality finishes, fast turnaround, free quotes. Serving St Leonard\'s, Topsham & central Exeter.',
  keywords: 'decorator Exeter, painters Exeter, interior painting Exeter, exterior painting Exeter, commercial decorators Exeter, domestic decorating Exeter, office painting Exeter, heritage property decorating Exeter, decorating services Exeter Devon, St Leonards Exeter decorators, Pennsylvania Exeter painters, Newtown Exeter decorating, Topsham decorators',
  alternates: {
    canonical: '/areas/exeter'
  },
  openGraph: {
    title: 'Decorator Exeter – Interior & Exterior Painting | Domestic & Commercial – BSR Decorating',
    description: 'Professional decorators in Exeter covering homes, offices, shops & heritage properties. Quality finishes, fast turnaround, free quotes.',
    url: 'https://bsrdecorating.co.uk/areas/exeter',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decorator Exeter – Interior & Exterior Painting | Domestic & Commercial',
    description: 'Professional decorators in Exeter covering homes, offices, shops & heritage properties. Quality finishes, fast turnaround, free quotes.',
  }
};

export default function ExeterLayout({
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
