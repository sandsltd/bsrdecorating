import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team | Decorator Jobs Devon | Careers at BSR Decorating",
  description: "Join BSR Decorating! We're looking for experienced decorators and painters in Devon. Great rates, flexible work, and join a respected local team.",
  keywords: "decorator jobs Devon, painter careers Dawlish, decorating jobs Newton Abbot Torquay Exeter, painter employment Devon, decorator vacancies, painting jobs Devon, BSR Decorating careers",
  alternates: {
    canonical: '/careers'
  },
  openGraph: {
    title: "Careers | BSR Decorating Devon",
    description: "Join our team of professional decorators serving Devon",
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
    title: "Careers | BSR Decorating Devon",
    description: "Join our team of professional decorators serving Devon",
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
