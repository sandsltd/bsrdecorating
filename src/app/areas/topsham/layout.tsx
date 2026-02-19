import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Heritage Decorators Topsham | Period Property & Waterfront Specialists – BSR Decorating',
  description: '🏘️ Topsham\'s heritage decorating specialists! Period property decorating, waterfront maintenance, conservation area experts. FREE quotes today!',
  keywords: 'heritage decorators Topsham, period property decorating Topsham, waterfront property maintenance Topsham, conservation area decorating Topsham, painters Topsham, decorating services Topsham Devon, heritage decorating Topsham, waterfront property painting, historic village decorating, period property Topsham, conservation area compliance Topsham',
  alternates: {
    canonical: '/areas/topsham'
  },
  openGraph: {
    title: 'Heritage Decorators Topsham | BSR Decorating',
    description: 'Professional heritage and waterfront decorating services in Topsham - period property and conservation area specialists',
    url: 'https://www.bsrdecorating.co.uk/areas/topsham',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heritage Decorators Topsham | BSR Decorating',
    description: 'Professional heritage and waterfront decorating services in Topsham - period property and conservation area specialists',
  }
};

export default function TopshamLayout({
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
