import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Coverage Areas Devon | BSR Decorating Locations Map",
  description: "See where BSR Decorating provides professional painting and decorating services across Devon. Interactive coverage map showing Dawlish, Exeter, Torquay, Newton Abbot, Bovey Tracey, Topsham, Exmouth and surrounding areas.",
  keywords: "BSR Decorating coverage areas, service locations Devon, decorators near me, painters Devon areas, decorating services map, Dawlish Exeter Torquay Newton Abbot coverage, Devon decorating locations",
  alternates: {
    canonical: '/coverage'
  },
  openGraph: {
    title: "Service Coverage Areas | BSR Decorating Devon",
    description: "See our complete service coverage across Devon - from Dawlish to Exeter and everywhere in between",
    url: "https://bsrdecorating.co.uk/coverage",
    type: "website",
    images: [
      {
        url: "/Logos/BSR Logo-7.png",
        width: 1200,
        height: 630,
        alt: "BSR Decorating service coverage across Devon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Coverage Areas | BSR Decorating Devon",
    description: "See our complete service coverage across Devon",
    images: ["/Logos/BSR Logo-7.png"]
  }
};

export default function CoverageLayout({
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
