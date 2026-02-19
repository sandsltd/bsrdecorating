import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Decorators Torquay – Professional Painting & Decorating Services | BSR Decorating',
  description: 'Looking for decorators in Torquay? BSR Decorating provides professional painting and decorating services for homes and businesses across Torquay. Free quotes, fully insured.',
  keywords: 'decorators torquay, painters torquay, painting and decorating torquay, house painters torquay, commercial decorators torquay, professional decorators torquay',
  alternates: {
    canonical: '/decorators-torquay'
  },
  openGraph: {
    title: 'Decorators Torquay – Professional Painting & Decorating Services | BSR Decorating',
    description: 'Looking for decorators in Torquay? BSR Decorating provides professional painting and decorating services for homes and businesses across Torquay.',
    url: 'https://www.bsrdecorating.co.uk/decorators-torquay',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decorators Torquay – Professional Painting & Decorating Services',
    description: 'Looking for decorators in Torquay? BSR Decorating provides professional painting and decorating services for homes and businesses across Torquay.',
  }
};

export default function DecoratorsTorquayLayout({
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
