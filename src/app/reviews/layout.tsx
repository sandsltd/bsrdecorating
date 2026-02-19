import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "⭐ 5-Star Reviews Dawlish Decorators | Real Customer Stories – BSR Decorating",
  description: "⭐ 13 Five-Star Google Reviews! Read why Dawlish, Exeter & Devon customers choose BSR Decorating. Real testimonials from satisfied homeowners.",
  keywords: "BSR Decorating reviews, decorator testimonials Devon, 5 star decorators, customer feedback painting decorating, decorator reviews Dawlish Newton Abbot Torquay Exeter, professional decorator testimonials",
  alternates: {
    canonical: '/reviews'
  },
  openGraph: {
    title: "Customer Reviews | BSR Decorating Devon",
    description: "5-star customer reviews from satisfied clients across Devon",
    type: "website",
    url: "https://www.bsrdecorating.co.uk/reviews",
    images: [
      {
        url: "/images/Business decorating image.jpeg",
        width: 1200,
        height: 630,
        alt: "BSR Decorating Customer Reviews and Testimonials"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews | BSR Decorating Devon",
    description: "5-star customer reviews from satisfied clients across Devon",
    images: ["/images/Business decorating image.jpeg"]
  },
  other: {
    "content-type": "Reviews",
    "service-areas": "Dawlish, Newton Abbot, Torquay, Exeter, Topsham, Exmouth, Bovey Tracey, Devon"
  }
};

export default function ReviewsLayout({
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
