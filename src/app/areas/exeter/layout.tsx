import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Luxury Decorators Exeter | Commercial Office & Heritage Specialists – BSR Decorating',
  description: '🏛️ Exeter\'s premier luxury decorators! St. Leonard\'s, Pennsylvania, Newtown. Commercial offices, heritage homes, affluent areas. FREE quotes, expert craftsmanship!',
  keywords: 'luxury decorators Exeter, commercial office decorating Exeter, heritage property decorating Exeter, painters Exeter, decorating services Exeter Devon, luxury decorating Exeter, commercial decorating Exeter, office painting Exeter, St Leonards Exeter decorators, Pennsylvania Exeter painters, Newtown Exeter decorating',
  alternates: {
    canonical: '/areas/exeter'
  },
  openGraph: {
    title: 'Luxury Decorators Exeter | BSR Decorating',
    description: 'Premium decorating services in Exeter - luxury heritage and commercial office specialists',
    url: 'https://bsrdecorating.co.uk/areas/exeter',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Decorators Exeter | BSR Decorating',
    description: 'Premium decorating services in Exeter - luxury heritage and commercial office specialists',
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
