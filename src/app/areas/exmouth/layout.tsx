import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Exmouth Decorators & Painters | Seaside Town Specialists – BSR Decorating',
  description: '🏖️ Exmouth\'s leading decorators! Seafront properties, holiday homes & businesses. Salt-resistant finishes, coastal expertise. FREE quotes!',
  keywords: 'decorators Exmouth, painters Exmouth, decorating services Exmouth Devon, seafront decorating Exmouth, holiday home painting, coastal property decorating, marine decorating Exmouth',
  alternates: {
    canonical: new URL('/areas/exmouth', 'https://bsrdecorating.co.uk')
  },
  openGraph: {
    title: 'Exmouth Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Exmouth - seaside town and coastal property specialists',
    url: 'https://bsrdecorating.co.uk/areas/exmouth',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exmouth Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Exmouth - seaside town and coastal property specialists',
  }
};

export default function ExmouthLayout({
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
