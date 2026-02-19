import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Kitchen Cabinet Spraying Devon | Professional Kitchen Respray – BSR Decorating',
  description: 'Professional kitchen cabinet spraying across Devon. Save up to 80% vs replacement. Exeter, Topsham, Newton Abbot, Dawlish & Torquay. Any colour, 3-5 day turnaround. Free quotes.',
  keywords: 'kitchen cabinet spraying, kitchen spraying Devon, kitchen respray Exeter, kitchen cabinet painting, kitchen spraying cost, cabinet spraying near me, kitchen makeover Devon, spray paint kitchen cabinets, kitchen spraying Topsham, kitchen spraying Newton Abbot',
  alternates: {
    canonical: '/services/kitchen-spraying'
  },
  openGraph: {
    title: 'Kitchen Cabinet Spraying Devon | BSR Decorating',
    description: 'Professional kitchen cabinet spraying across Devon. Save up to 80% vs replacement. Any colour, 3-5 day turnaround.',
    url: 'https://www.bsrdecorating.co.uk/services/kitchen-spraying',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Cabinet Spraying Devon | BSR Decorating',
    description: 'Professional kitchen cabinet spraying across Devon. Save up to 80% vs replacement.',
  }
};

export default function KitchenSprayingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
