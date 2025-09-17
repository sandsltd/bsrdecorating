import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Topsham Decorators & Painters | Historic Riverside Village – BSR Decorating',
  description: '🏘️ Topsham\'s decorating specialists! Historic riverside properties & waterfront homes. Heritage expertise, period features. FREE quotes today!',
  keywords: 'decorators Topsham, painters Topsham, decorating services Topsham Devon, heritage decorating Topsham, waterfront property painting, historic village decorating, period property Topsham',
  alternates: {
    canonical: '/areas/topsham'
  },
  openGraph: {
    title: 'Topsham Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Topsham - historic riverside village specialists',
    url: 'https://bsrdecorating.co.uk/areas/topsham',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Topsham Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Topsham - historic riverside village specialists',
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
