'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, ArrowRight, ChevronRight, PoundSterling, Clock, Paintbrush, Leaf } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function KitchenSprayingPage() {
  const { openQuoteModal } = useQuoteModal();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.bsrdecorating.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.bsrdecorating.co.uk/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kitchen Spraying",
        "item": "https://www.bsrdecorating.co.uk/services/kitchen-spraying"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Cabinet Spraying",
    "description": "Professional kitchen cabinet spraying services across Devon. Transform your kitchen without replacement at a fraction of the cost.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "BSR Decorating",
      "telephone": "+441626911236",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dawlish",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      }
    },
    "serviceType": "Kitchen Cabinet Spraying",
    "areaServed": [
      { "@type": "City", "name": "Exeter", "addressRegion": "Devon" },
      { "@type": "City", "name": "Topsham", "addressRegion": "Devon" },
      { "@type": "City", "name": "Newton Abbot", "addressRegion": "Devon" },
      { "@type": "City", "name": "Dawlish", "addressRegion": "Devon" },
      { "@type": "City", "name": "Torquay", "addressRegion": "Devon" }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "750",
      "highPrice": "2500",
      "priceCurrency": "GBP",
      "offerCount": "3"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does kitchen spraying last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional kitchen cabinet spraying lasts 8-10 years with normal use. We use specialist two-pack polyurethane and acrylic lacquer finishes designed for kitchen environments — resistant to heat, moisture, grease and daily wear. The key is proper preparation and professional-grade products, which is why DIY spray results rarely match professional longevity."
        }
      },
      {
        "@type": "Question",
        "name": "Can any kitchen be sprayed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most kitchens with solid wood, MDF, or laminate cabinets are suitable for spraying. We assess each kitchen individually — if cabinet carcasses are structurally sound (no water damage, warping or delamination), spraying is almost always viable. Kitchens with heavily damaged or swollen MDF, or very cheap foil-wrapped doors, may not be suitable. We'll always give you an honest assessment."
        }
      },
      {
        "@type": "Question",
        "name": "How much does kitchen cabinet spraying cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kitchen cabinet spraying typically costs £750-£2,500 depending on kitchen size and finish. A standard kitchen with 15-20 units costs around £1,200-£1,500. Compare this to full kitchen replacement at £8,000-£15,000+ and the savings are substantial. We provide free, no-obligation quotes for all kitchen spraying projects across Devon."
        }
      },
      {
        "@type": "Question",
        "name": "How long does kitchen spraying take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kitchen spraying typically takes 3-5 working days from start to finish. This includes thorough preparation (cleaning, degreasing, sanding), priming, multiple spray coats with drying time between each, and reassembly. Your kitchen remains partially usable throughout — unlike replacement which can leave you without a kitchen for 2-4 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you cover for kitchen spraying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide kitchen cabinet spraying across Devon including Exeter, Topsham, Newton Abbot, Dawlish, Torquay, Exmouth, and surrounding areas. We're happy to travel throughout Devon for kitchen spraying projects."
        }
      }
    ]
  };

  const costComparison = [
    { item: "Budget kitchen replacement", replacement: "£5,000–£8,000", spraying: "£750–£1,200" },
    { item: "Mid-range kitchen", replacement: "£10,000–£15,000", spraying: "£1,200–£1,800" },
    { item: "Premium/bespoke kitchen", replacement: "£20,000–£30,000+", spraying: "£1,800–£2,500" },
    { item: "Typical disruption", replacement: "2–4 weeks", spraying: "3–5 days" },
    { item: "Additional trades needed", replacement: "Plumber, electrician, tiler", spraying: "None" },
  ];

  const process = [
    { step: 1, title: "Free Survey & Quote", description: "We visit your property, assess your kitchen cabinets, and provide a detailed written quote with colour consultation." },
    { step: 2, title: "Preparation", description: "Doors, drawer fronts and hardware are removed. All surfaces are thoroughly cleaned, degreased, and sanded to create the perfect key for the new finish." },
    { step: 3, title: "Priming", description: "Specialist adhesion primer is applied to ensure the top coat bonds permanently to the existing surface — critical for long-lasting results." },
    { step: 4, title: "Spraying", description: "Multiple coats of high-quality paint or lacquer are applied using professional HVLP spray equipment, with proper drying time between coats." },
    { step: 5, title: "Reassembly", description: "Once fully cured, all doors, drawers and hardware are refitted. New handles can be supplied and fitted if desired." },
  ];

  const benefits = [
    { icon: PoundSterling, title: "Save Up to 80%", description: "Kitchen spraying costs a fraction of full replacement — typically £750–£2,500 vs £8,000–£30,000 for new units." },
    { icon: Clock, title: "3–5 Day Turnaround", description: "Minimal disruption compared to 2–4 weeks for a full kitchen replacement. Your kitchen stays usable throughout." },
    { icon: Paintbrush, title: "Any Colour, Any Finish", description: "Choose from thousands of colours and finishes — matt, satin, gloss or on-trend eggshell. We can match any shade." },
    { icon: Leaf, title: "Eco-Friendly Choice", description: "Keep perfectly good cabinets out of landfill. Kitchen spraying dramatically reduces waste compared to replacement." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-bsr-black via-bsr-gray to-bsr-black">
        {/* Breadcrumbs */}
        <section className="py-4 px-4 sm:px-6 lg:px-8 bg-bsr-black border-b border-bsr-gray-light">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-bsr-highlight transition-colors duration-200">
                Home
              </Link>
              <ChevronRight size={16} className="text-gray-600" />
              <span className="text-gray-400">Services</span>
              <ChevronRight size={16} className="text-gray-600" />
              <span className="text-bsr-white font-medium">Kitchen Spraying</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Kitchen Cabinet Spraying – <span className="text-bsr-highlight">Save Thousands</span> vs Replacement
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your tired kitchen cabinets with a professional spray finish in any colour.
              Save up to 80% compared to a full kitchen replacement, with completion in just 3–5 days.
              Serving Exeter, Topsham, Newton Abbot, Dawlish, Torquay and all of Devon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Kitchen Spraying Quote</span>
              </button>
              <Link
                href="/blog/kitchen-cabinet-spraying-vs-replacement-devon"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Read Our Cost Comparison Guide</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-12 text-center">
              Why Choose Kitchen Spraying?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-bsr-highlight/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-bsr-highlight" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-bsr-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison Table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-4 text-center">
              Kitchen Spraying vs Replacement: Real Costs
            </h2>
            <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
              See how kitchen cabinet spraying compares to full replacement on both cost and disruption.
              Prices based on our experience across Devon properties.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-bsr-highlight">
                    <th className="text-left py-4 px-4 text-bsr-white font-semibold"></th>
                    <th className="text-center py-4 px-4 text-gray-400 font-semibold">Full Replacement</th>
                    <th className="text-center py-4 px-4 text-bsr-highlight font-semibold">Cabinet Spraying</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, index) => (
                    <tr key={index} className="border-b border-bsr-gray-light">
                      <td className="py-4 px-4 text-bsr-white font-medium">{row.item}</td>
                      <td className="py-4 px-4 text-center text-gray-400">{row.replacement}</td>
                      <td className="py-4 px-4 text-center text-bsr-highlight font-semibold">{row.spraying}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-12 text-center">
              Our Kitchen Spraying Process
            </h2>
            <div className="space-y-8">
              {process.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-bsr-highlight rounded-full flex items-center justify-center text-bsr-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-bsr-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Kitchen Spraying Transformations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                '/portfolio/project1/PHOTO-2025-09-02-11-07-13.jpg',
                '/portfolio/project1/PHOTO-2025-09-02-11-07-14.jpg',
                '/portfolio/project1/PHOTO-2025-09-02-11-07-15.jpg'
              ].map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Kitchen cabinet spraying transformation ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/portfolio"
                className="text-bsr-highlight hover:text-[#A800B6] font-medium inline-flex items-center space-x-2 transition-colors duration-200"
              >
                <span>View Our Full Portfolio</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Areas We Cover */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Kitchen Spraying Across Devon
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Exeter", href: "/areas/exeter/kitchen-spraying" },
                { name: "Topsham", href: "/areas/topsham" },
                { name: "Newton Abbot", href: "/areas/newton-abbot" },
                { name: "Dawlish", href: "/areas/dawlish" },
                { name: "Torquay", href: "/areas/torquay" },
                { name: "Exmouth", href: "/areas/exmouth" },
              ].map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="bg-bsr-black border border-bsr-gray-light rounded-lg p-4 text-center hover:border-bsr-highlight transition-all duration-200 group"
                >
                  <span className="text-bsr-white group-hover:text-bsr-highlight font-medium transition-colors duration-200">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* When Spraying Makes Sense */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Is Kitchen Spraying Right for You?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bsr-gray border border-green-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle size={20} /> Spraying Is Ideal When...
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-2"><CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-1" /> Cabinet carcasses are solid and undamaged</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-1" /> You want to change the colour or finish</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-1" /> Your kitchen layout works well</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-1" /> You want minimal disruption</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-1" /> Budget is a key consideration</li>
                </ul>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-400 mb-4">Replacement May Be Better When...</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Cabinet carcasses are water-damaged or warped</li>
                  <li>You need to change the kitchen layout entirely</li>
                  <li>Hinges and runners are worn beyond repair</li>
                  <li>Worktops also need replacing</li>
                  <li>Cabinets are very cheap foil-wrapped units</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Kitchen Spraying FAQs
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-bsr-white mb-3">
                    {faq.name}
                  </h3>
                  <p className="text-gray-300">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              More Kitchen & Decorating Advice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/blog/kitchen-cabinet-spraying-vs-replacement-devon"
                className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6 hover:border-bsr-highlight transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Kitchen Spraying vs Replacement</h4>
                <p className="text-gray-300 text-sm">Our detailed cost comparison guide for Devon homeowners</p>
              </Link>
              <Link
                href="/blog/painter-decorator-cost-exeter-2025-price-guide"
                className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6 hover:border-bsr-highlight transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Decorating Cost Guide 2025</h4>
                <p className="text-gray-300 text-sm">Complete pricing for all decorating services in Exeter</p>
              </Link>
              <Link
                href="/domestic"
                className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6 hover:border-bsr-highlight transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">All Domestic Services</h4>
                <p className="text-gray-300 text-sm">View our full range of domestic decorating services</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-bsr-white mb-6">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free, no-obligation quote for kitchen cabinet spraying. We cover all of Devon
              including Exeter, Topsham, Newton Abbot, Dawlish, and Torquay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Your Free Quote</span>
              </button>
              <Link
                href="/areas/exeter/kitchen-spraying"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Kitchen Spraying in Exeter</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
