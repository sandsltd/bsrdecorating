import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Newton Abbot Decorators & Painters | Domestic & Commercial – BSR Decorating',
  description: '🏠 Newton Abbot\'s trusted decorators! Professional painting & decorating for homes and businesses. FREE quotes, 20+ years experience. Call today!',
  keywords: 'decorators Newton Abbot, painters Newton Abbot, decorating services Newton Abbot Devon, commercial decorating Newton Abbot, domestic painting Newton Abbot, house painters Newton Abbot',
  alternates: {
    canonical: new URL('/areas/newton-abbot', 'https://bsrdecorating.co.uk')
  },
  openGraph: {
    title: 'Newton Abbot Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Newton Abbot - domestic and commercial painting specialists',
    url: 'https://bsrdecorating.co.uk/areas/newton-abbot',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newton Abbot Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Newton Abbot - domestic and commercial painting specialists',
  }
};

export default function NewtonAbbotLayout({
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
