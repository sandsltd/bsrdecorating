import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dawlish Decorators & Painters | Local Experts Since 2003 – BSR Decorating',
  description: '🏠 Dawlish\'s most trusted decorators! 20+ years serving the local area. FREE quotes, quality guaranteed. Call your local team today!',
  keywords: 'decorators Dawlish, painters Dawlish, decorating services Dawlish Devon, local painters decorators, Dawlish painting contractors',
  alternates: {
    canonical: '/areas/dawlish'
  },
  openGraph: {
    title: 'Dawlish Decorators & Painters | Local Experts Since 2003 – BSR Decorating',
    description: 'Dawlish\'s most trusted decorators! 20+ years serving the local area. FREE quotes, quality guaranteed.',
    url: 'https://www.bsrdecorating.co.uk/areas/dawlish',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawlish Decorators & Painters | Local Experts Since 2003 – BSR Decorating',
    description: 'Dawlish\'s most trusted decorators! 20+ years serving the local area. FREE quotes, quality guaranteed.',
  }
};

export default function DawlishLayout({
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
