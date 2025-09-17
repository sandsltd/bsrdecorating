import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bovey Tracey Decorators & Painters | Local Experts – BSR Decorating',
  description: '🏠 Bovey Tracey\'s premier decorators! Professional painting for homes & businesses. FREE quotes, 20+ years serving Dartmoor area. Call today!',
  keywords: 'decorators Bovey Tracey, painters Bovey Tracey, decorating services Bovey Tracey Devon, house painters Bovey Tracey, commercial decorating Bovey Tracey, Dartmoor decorators',
  alternates: {
    canonical: '/areas/bovey-tracey'
  },
  openGraph: {
    title: 'Bovey Tracey Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Bovey Tracey - domestic and commercial painting specialists',
    url: 'https://bsrdecorating.co.uk/areas/bovey-tracey',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bovey Tracey Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Bovey Tracey - domestic and commercial painting specialists',
  }
};

export default function BoveyTraceyLayout({
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
