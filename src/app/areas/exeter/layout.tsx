import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Painter and Decorator Exeter – Interior & Exterior Painting | BSR Decorating',
  description: 'Trusted painter and decorator in Exeter covering homes, offices, shops & heritage properties. Quality finishes, fast turnaround, free quotes. Serving St Leonard\'s, Topsham & central Exeter.',
  keywords: 'painter and decorator exeter, decorator Exeter, painters Exeter, interior painting Exeter, exterior painting Exeter, commercial decorator exeter, commercial decorators Exeter, domestic decorating Exeter, office painting Exeter, heritage property decorating Exeter, decorating services Exeter Devon, St Leonards Exeter decorators, Pennsylvania Exeter painters, Newtown Exeter decorating, Topsham decorators',
  alternates: {
    canonical: '/areas/exeter'
  },
  openGraph: {
    title: 'Painter and Decorator Exeter – Interior & Exterior Painting | BSR Decorating',
    description: 'Professional decorators in Exeter covering homes, offices, shops & heritage properties. Quality finishes, fast turnaround, free quotes.',
    url: 'https://www.bsrdecorating.co.uk/areas/exeter',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painter and Decorator Exeter – Interior & Exterior Painting',
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
