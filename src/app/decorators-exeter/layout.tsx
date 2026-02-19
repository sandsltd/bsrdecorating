import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Decorators Exeter – Professional Painting & Decorating Services | BSR Decorating',
  description: 'Looking for decorators in Exeter? BSR Decorating provides professional painting and decorating services for homes and businesses across Exeter. Free quotes, fully insured.',
  keywords: 'decorators exeter, painters exeter, painting and decorating exeter, house painters exeter, commercial decorators exeter, professional decorators exeter',
  alternates: {
    canonical: '/decorators-exeter'
  },
  openGraph: {
    title: 'Decorators Exeter – Professional Painting & Decorating Services | BSR Decorating',
    description: 'Looking for decorators in Exeter? BSR Decorating provides professional painting and decorating services for homes and businesses across Exeter.',
    url: 'https://www.bsrdecorating.co.uk/decorators-exeter',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decorators Exeter – Professional Painting & Decorating Services',
    description: 'Looking for decorators in Exeter? BSR Decorating provides professional painting and decorating services for homes and businesses across Exeter.',
  }
};

export default function DecoratorsExeterLayout({
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
