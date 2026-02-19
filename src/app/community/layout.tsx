import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Support Devon | Environmental Protection | BSR Decorating Charity Work",
  description: "BSR Decorating supports Surfers Against Sewage and local Devon community. Eco-friendly water-based paints protecting our coastlines and marine life.",
  keywords: "BSR Decorating community work, Surfers Against Sewage support, eco friendly decorating Devon, environmental protection painting, community support Dawlish, charity work decorators Devon, water based paints coastal protection",
  alternates: {
    canonical: '/community'
  },
  openGraph: {
    title: "Community & Environmental Support | BSR Decorating Devon",
    description: "Supporting Devon communities and protecting our coastlines through eco-friendly decorating practices",
    type: "website",
    url: "https://www.bsrdecorating.co.uk/community",
    images: [
      {
        url: "/images/Business decorating image.jpeg",
        width: 1200,
        height: 630,
        alt: "BSR Decorating Community and Environmental Support"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Community & Environmental Support | BSR Decorating Devon",
    description: "Supporting Devon communities and protecting our coastlines through eco-friendly decorating practices",
    images: ["/images/Business decorating image.jpeg"]
  },
  other: {
    "content-type": "Community",
    "service-areas": "Dawlish, Newton Abbot, Torquay, Exeter, Topsham, Exmouth, Bovey Tracey, Devon"
  }
};

export default function CommunityLayout({
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
