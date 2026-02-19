import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Torquay Decorators & Painters | Coastal Property Specialists – BSR Decorating',
  description: '🌊 Torquay\'s trusted decorators! Coastal property painting specialists. Hotels, B&Bs, homes & businesses. FREE quotes, weather-resistant finishes!',
  keywords: 'decorators Torquay, painters Torquay, decorating services Torquay Devon, coastal decorating Torquay, hotel decorating Torquay, holiday home painting Torquay, Torquay painters decorators',
  alternates: {
    canonical: '/areas/torquay'
  },
  openGraph: {
    title: 'Torquay Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Torquay - coastal property specialists',
    url: 'https://www.bsrdecorating.co.uk/areas/torquay',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torquay Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Torquay - coastal property specialists',
  }
};

export default function TorquayLayout({
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
