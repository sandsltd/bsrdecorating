import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Kitchen Spraying Exeter | Cabinet Spraying St Leonard\'s, Pennsylvania – BSR Decorating',
  description: 'Professional kitchen cabinet spraying in Exeter. Transform kitchens without replacement. St Leonard\'s, Pennsylvania, Heavitree, Topsham & Newtown. Free quotes.',
  keywords: 'kitchen spraying Exeter, kitchen cabinet spraying Exeter, kitchen respray Exeter, kitchen painting Exeter, kitchen spraying St Leonards, kitchen spraying Pennsylvania Exeter, kitchen cabinet painting Heavitree, kitchen spraying Topsham',
  alternates: {
    canonical: '/areas/exeter/kitchen-spraying'
  },
  openGraph: {
    title: 'Kitchen Spraying Exeter | BSR Decorating',
    description: 'Professional kitchen cabinet spraying services in Exeter, transforming kitchens without replacement',
    url: 'https://www.bsrdecorating.co.uk/areas/exeter/kitchen-spraying',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Spraying Exeter | BSR Decorating',
    description: 'Professional kitchen cabinet spraying services in Exeter',
  }
};

export default function ExeterKitchenSprayingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

