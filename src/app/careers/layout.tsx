import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Time Experienced Decorator Job Devon | Careers at BSR Decorating",
  description: "BSR Decorating is hiring a full-time experienced decorator in Devon. Pay is negotiable depending on experience. Apply now to join a respected local team.",
  keywords: "decorator jobs Devon, painter careers Dawlish, decorating jobs Newton Abbot Torquay Exeter, painter employment Devon, decorator vacancies, painting jobs Devon, BSR Decorating careers",
  alternates: {
    canonical: '/careers'
  },
  openGraph: {
    title: "Full-Time Experienced Decorator | BSR Decorating Devon",
    description: "BSR Decorating is hiring a full-time experienced decorator in Devon",
    type: "website",
    url: "https://www.bsrdecorating.co.uk/careers",
    images: [
      {
        url: "/images/Business decorating image.jpeg",
        width: 1200,
        height: 630,
        alt: "Careers at BSR Decorating - Join our professional team"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Time Experienced Decorator | BSR Decorating Devon",
    description: "BSR Decorating is hiring a full-time experienced decorator in Devon",
    images: ["/images/Business decorating image.jpeg"]
  },
  other: {
    "content-type": "Careers",
    "service-areas": "Dawlish, Newton Abbot, Torquay, Exeter, Topsham, Exmouth, Bovey Tracey, Devon"
  }
};

export default function CareersLayout({
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
