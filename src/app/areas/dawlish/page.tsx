import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Decorators Dawlish | BSR Decorating Services',
  description: 'Expert painting and decorating services in Dawlish, Devon. Local decorators with over 20 years experience. Free quotes, quality workmanship, competitive prices.',
  keywords: 'decorators Dawlish, painters Dawlish, decorating services Dawlish Devon, local painters decorators, Dawlish painting contractors',
}

export default function DawlishPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bsr-black via-bsr-gray to-bsr-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
            Professional Decorators in <span className="text-bsr-highlight">Dawlish</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert painting and decorating services across Dawlish and surrounding areas. 
            Local decorators with over 20 years of experience serving the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/portfolio"
              className="border border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-bsr-white mb-12 text-center">
            Our Dawlish Decorating Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Interior Painting</h3>
              <p className="text-gray-300">Transform your Dawlish home with professional interior painting services.</p>
            </div>
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Exterior Decorating</h3>
              <p className="text-gray-300">Protect and beautify your property with expert exterior painting and decorating.</p>
            </div>
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Wallpaper Hanging</h3>
              <p className="text-gray-300">Professional wallpaper installation and removal services in Dawlish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bsr-white mb-6">
                Serving Dawlish and Surrounding Areas
              </h2>
              <p className="text-gray-300 mb-6">
                As local decorators based in Dawlish, we understand the unique character of this beautiful 
                seaside town. From Victorian terraces to modern developments, we have experience working 
                with all types of properties in the area.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-bsr-highlight mt-1" size={20} />
                  <div>
                    <h4 className="text-bsr-white font-semibold">Local Coverage</h4>
                    <p className="text-gray-300">Dawlish, Dawlish Warren, Holcombe, Starcross</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-bsr-highlight mt-1" size={20} />
                  <div>
                    <h4 className="text-bsr-white font-semibold">Quick Response</h4>
                    <p className="text-gray-300">Local team available for urgent projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Contact Our Dawlish Team</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-bsr-highlight" size={18} />
                    <span className="text-gray-300">01626 911236</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-bsr-highlight" size={18} />
                    <span className="text-gray-300">info@bsrdecorating.co.uk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-bsr-white mb-6 text-center">
            Why Choose BSR Decorating in Dawlish?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-bsr-white mb-3">Local Expertise</h4>
              <p className="text-gray-300 mb-4">
                We know Dawlish inside and out, from the coastal weather challenges to the architectural styles common in the area.
              </p>
              
              <h4 className="text-lg font-semibold text-bsr-white mb-3">Quality Materials</h4>
              <p className="text-gray-300">
                We use high-quality, weather-resistant paints and materials perfect for Dawlish's coastal environment.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bsr-white mb-3">Competitive Pricing</h4>
              <p className="text-gray-300 mb-4">
                Fair, transparent pricing with detailed quotes and no hidden costs for all Dawlish residents.
              </p>
              
              <h4 className="text-lg font-semibold text-bsr-white mb-3">Fully Insured</h4>
              <p className="text-gray-300">
                Comprehensive insurance coverage for your peace of mind on every Dawlish decorating project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
