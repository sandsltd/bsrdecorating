import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Exeter Decorators & Painters | Commercial & Domestic Specialists – BSR Decorating',
  description: '🏛️ Exeter\'s premier decorators! Historic city centre & modern developments. Commercial offices, heritage homes. FREE quotes, expert craftsmanship!',
  keywords: 'decorators Exeter, painters Exeter, decorating services Exeter Devon, commercial decorating Exeter, office painting Exeter, heritage property decorating Exeter, domestic decorating Exeter',
  alternates: {
    canonical: new URL('/areas/exeter', 'https://bsrdecorating.co.uk')
  },
  openGraph: {
    title: 'Exeter Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Exeter - heritage and modern property specialists',
    url: 'https://bsrdecorating.co.uk/areas/exeter',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exeter Decorators & Painters | BSR Decorating',
    description: 'Professional decorating services in Exeter - heritage and modern property specialists',
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
