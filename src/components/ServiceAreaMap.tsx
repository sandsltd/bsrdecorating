'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    mapboxgl: typeof import('mapbox-gl');
  }
}

const ServiceAreaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [postcodeData, setPostcodeData] = useState<{
    mainAreas: string[];
    largerJobAreas: string[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    postcode: '',
    serviceType: 'domestic' as 'domestic' | 'commercial',
    numberOfRooms: '',
    externalDecorating: false,
    garageDoor: false,
    frontDoor: false,
    name: '',
    email: '',
    phone: ''
  });

  // Load postcode data
  useEffect(() => {
    fetch('/data/postcodes.json')
      .then(response => response.json())
      .then(data => setPostcodeData(data))
      .catch(error => console.error('Error loading postcode data:', error));
  }, []);

  // Modal functions
  const openQuoteModal = () => {
    setIsModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsModalOpen(false);
    setFormData({
      postcode: '',
      serviceType: 'domestic' as 'domestic' | 'commercial',
      numberOfRooms: '',
      externalDecorating: false,
      garageDoor: false,
      frontDoor: false,
      name: '',
      email: '',
      phone: ''
    });
  };

  // Postcode validation function
  const validatePostcode = (postcode: string) => {
    if (!postcodeData) return null;

    const input = postcode.toUpperCase();
    let postcodePrefix = '';
    
    if (input.includes(' ')) {
      postcodePrefix = input.split(' ')[0];
    } else {
      const cleanInput = input.replace(/[^A-Z0-9]/g, '');
      const match = cleanInput.match(/^([A-Z]+\d{1,2})/);
      if (match) {
        const extracted = match[1];
        if (extracted.length >= 4) {
          const longVersion = extracted.substring(0, 4);
          const shortVersion = extracted.substring(0, 3);
          if (postcodeData.largerJobAreas.includes(longVersion) || postcodeData.mainAreas.includes(longVersion)) {
            postcodePrefix = longVersion;
          } else {
            postcodePrefix = shortVersion;
          }
        } else {
          postcodePrefix = extracted;
        }
      }
    }

    if (postcodeData.mainAreas.includes(postcodePrefix)) {
      return 'main';
    } else if (postcodeData.largerJobAreas.includes(postcodePrefix)) {
      return 'larger';
    } else {
      return 'outside';
    }
  };

  // Form submission
  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const postcodeStatus = validatePostcode(formData.postcode);
    if (!postcodeStatus) {
      alert('Please enter a valid postcode');
      return;
    }

    try {
      // Send email with quote details
      const response = await fetch('/api/send-quote-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          postcodeStatus
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(`Quote request submitted successfully! We'll contact you within 24 hours.`);
        closeQuoteModal();
      } else if (result.missingConfig) {
        // Email not configured yet - show fallback message
        alert(`Thank you for your interest! Email service is being set up. Please call us directly at 07700 900000 or email hello@saunders-simmons.co.uk with your quote request.`);
        closeQuoteModal();
      } else {
        alert(`Error sending quote request: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Error submitting quote request. Please try again or call us directly.');
    }
  };

  // Form field updates
  const updateFormField = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // Initialize map only once and ensure container exists

    const mapboxApiKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
    
    if (!mapboxApiKey) {
      console.error('Mapbox API key not found');
      return;
    }

    // Load Mapbox GL JS
    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js';
    script.onload = () => {
      // Load CSS
      const link = document.createElement('link');
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      // Initialize map
      window.mapboxgl.accessToken = mapboxApiKey;
      
      map.current = new window.mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-3.7, 50.6], // Centered between all locations
        zoom: 8.5,
        attributionControl: false
      });

      // Add zoom controls
      map.current!.addControl(new window.mapboxgl.NavigationControl(), 'top-right');

      // Remove default map labels
      map.current!.on('style.load', () => {
        const layers = map.current!.getStyle().layers;
        layers.forEach((layer) => {
          if (layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {
            map.current!.removeLayer(layer.id);
          }
        });
      });

      // Handle map resize for mobile responsiveness
      const handleResize = () => {
        if (map.current) {
          setTimeout(() => {
            map.current!.resize();
          }, 100);
        }
      };

      window.addEventListener('resize', handleResize);

      map.current!.on('load', () => {
        // Create BSR logo marker element for headquarters
        const el = document.createElement('div');
        el.style.width = '70px';
        el.style.height = '70px';
        el.style.borderRadius = '50%';
        el.style.border = '3px solid #E801F8';
        el.style.backgroundColor = 'white';
        el.style.boxShadow = '0 4px 12px rgba(232, 1, 248, 0.4)';
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
        el.style.overflow = 'hidden';
        el.style.cursor = 'pointer';
        el.style.zIndex = '100';
        
        // Add logo image
        const img = document.createElement('img');
        img.src = '/Logos/BSR Logo-4.png';
        img.style.width = '60px';
        img.style.height = '60px';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '50%';
        img.alt = 'BSR Decorating Logo';
        el.appendChild(img);

        // Add BSR headquarters marker
        new window.mapboxgl.Marker(el)
          .setLngLat([-3.4667, 50.5833]) // Dawlish coordinates
          .addTo(map.current!);

        // Main coverage areas - individual markers for each location
        const mainAreas: Array<{ name: string; coords: [number, number] }> = [
          { name: 'Teignmouth', coords: [-3.4986, 50.5465] },
          { name: 'Newton Abbot', coords: [-3.6107, 50.5301] },
          { name: 'Kingsteignton', coords: [-3.5839, 50.5459] },
          { name: 'Bovey Tracey', coords: [-3.6751, 50.5905] },
          { name: 'Torquay', coords: [-3.5312, 50.4619] },
          { name: 'Exeter', coords: [-3.5339, 50.7236] },
          { name: 'Exton', coords: [-3.4167, 50.6167] },
          { name: 'Limpstone', coords: [-3.4500, 50.6333] },
          { name: 'Exmouth', coords: [-3.4139, 50.6195] }
        ];

        // Add individual markers for each main coverage area
        mainAreas.forEach(area => {
          const areaEl = document.createElement('div');
          areaEl.style.width = '14px';
          areaEl.style.height = '14px';
          areaEl.style.backgroundColor = '#E801F8';
          areaEl.style.borderRadius = '50%';
          areaEl.style.border = '2px solid white';
          areaEl.style.boxShadow = '0 2px 6px rgba(232, 1, 248, 0.4)';
          areaEl.style.cursor = 'pointer';

          const marker = new window.mapboxgl.Marker(areaEl)
            .setLngLat(area.coords)
            .addTo(map.current!);

          // Add custom label
          const labelEl = document.createElement('div');
          labelEl.style.cssText = `
            position: absolute;
            background: rgba(232, 1, 248, 0.9);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            white-space: nowrap;
            pointer-events: none;
            transform: translate(-50%, -100%);
            margin-top: -5px;
            border: 1px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          `;
          labelEl.textContent = area.name;

          new window.mapboxgl.Marker({
            element: labelEl,
            anchor: 'bottom'
          })
          .setLngLat(area.coords)
          .addTo(map.current!);

          // Add popup for each area
          const popup = new window.mapboxgl.Popup({ offset: 15 })
            .setHTML(`
              <div style="text-align: center; padding: 12px; font-family: Arial, sans-serif;">
                <h4 style="margin: 0; color: #E801F8; font-weight: bold; font-size: 18px;">${area.name}</h4>
                <p style="margin: 4px 0 0 0; font-size: 14px; color: #333; font-weight: 500;">Main Coverage Area</p>
              </div>
            `);
          
          marker.setPopup(popup);
        });

        // Larger project areas - individual markers
        const largerProjectAreas: Array<{ name: string; coords: [number, number] }> = [
          { name: 'Plymouth', coords: [-4.1420, 50.3755] },
          { name: 'Honiton', coords: [-3.1967, 50.7984] }
        ];

        // Add individual markers for larger project areas
        largerProjectAreas.forEach(area => {
          const largeEl = document.createElement('div');
          largeEl.style.width = '16px';
          largeEl.style.height = '16px';
          largeEl.style.backgroundColor = 'transparent';
          largeEl.style.borderRadius = '50%';
          largeEl.style.border = '3px solid #E801F8';
          largeEl.style.boxShadow = '0 2px 6px rgba(232, 1, 248, 0.4)';
          largeEl.style.cursor = 'pointer';

          const marker = new window.mapboxgl.Marker(largeEl)
            .setLngLat(area.coords)
            .addTo(map.current!);

          // Add custom label for larger project areas
          const largeLabelEl = document.createElement('div');
          largeLabelEl.style.cssText = `
            position: absolute;
            background: rgba(232, 1, 248, 0.9);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            white-space: nowrap;
            pointer-events: none;
            transform: translate(-50%, -100%);
            margin-top: -5px;
            border: 1px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          `;
          largeLabelEl.textContent = area.name;

          new window.mapboxgl.Marker({
            element: largeLabelEl,
            anchor: 'bottom'
          })
          .setLngLat(area.coords)
          .addTo(map.current!);

          // Add popup for each larger project area
          const popup = new window.mapboxgl.Popup({ offset: 15 })
            .setHTML(`
              <div style="text-align: center; padding: 12px; font-family: Arial, sans-serif;">
                <h4 style="margin: 0; color: #E801F8; font-weight: bold; font-size: 18px;">${area.name}</h4>
                <p style="margin: 4px 0 0 0; font-size: 14px; color: #333; font-weight: 500;">Larger Projects Available</p>
              </div>
            `);
          
          marker.setPopup(popup);
        });

        // Add main coverage area polygon (includes all main areas including Torquay)
        const mainCoverageArea = [
          [-3.40, 50.78],  // North (Exeter area)
          [-3.25, 50.73],  // Northeast (Exmouth area)
          [-3.30, 50.60],  // East (Exmouth/Limpstone)
          [-3.35, 50.52],  // Southeast (Dawlish/Teignmouth)
          [-3.45, 50.42],  // South (Torquay area - extended to include)
          [-3.55, 50.40],  // South-southwest (below Torquay)
          [-3.70, 50.48],  // Southwest (Newton Abbot/Kingsteignton)
          [-3.75, 50.58],  // West (Bovey Tracey)
          [-3.65, 50.68],  // Northwest
          [-3.50, 50.75],  // North-central
          [-3.40, 50.78]   // Back to start
        ];

        map.current!.addSource('main-coverage', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [mainCoverageArea]
            },
            properties: {}
          }
        });

        // Add main coverage area fill
        map.current!.addLayer({
          id: 'main-coverage-fill',
          type: 'fill',
          source: 'main-coverage',
          paint: {
            'fill-color': '#fce7f3',
            'fill-opacity': 0.5
          }
        });

        // Add main coverage area border
        map.current!.addLayer({
          id: 'main-coverage-line',
          type: 'line',
          source: 'main-coverage',
          paint: {
            'line-color': '#f9a8d4',
            'line-width': 3,
            'line-opacity': 0.9
          }
        });

        // Add extended coverage area (wraps around main area with buffer for larger projects)
        const extendedCoverageArea = [
          [-3.10, 50.88],  // North (above Honiton area)
          [-3.05, 50.83],  // Northeast (Honiton region)
          [-3.12, 50.78],  // East (around Honiton)
          [-3.20, 50.55],  // Southeast
          [-3.25, 50.35],  // South (buffer below main area)
          [-3.45, 50.30],  // South-central
          [-3.70, 50.32],  // Southwest
          [-4.30, 50.30],  // South (below Plymouth)
          [-4.35, 50.40],  // West (Plymouth area)
          [-4.25, 50.50],  // Northwest (above Plymouth)
          [-3.90, 50.65],  // North-central
          [-3.60, 50.80],  // North
          [-3.30, 50.85],  // Northeast
          [-3.10, 50.88]   // Back to start
        ];

        map.current!.addSource('extended-coverage', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [extendedCoverageArea]
            },
            properties: {}
          }
        });

        // Add extended coverage area fill (lighter pink)
        map.current!.addLayer({
          id: 'extended-coverage-fill',
          type: 'fill',
          source: 'extended-coverage',
          paint: {
            'fill-color': '#fdf2f8',
            'fill-opacity': 0.3
          }
        });

        // Add extended coverage area border
        map.current!.addLayer({
          id: 'extended-coverage-line',
          type: 'line',
          source: 'extended-coverage',
          paint: {
            'line-color': '#f9a8d4',
            'line-width': 2,
            'line-opacity': 0.7,
            'line-dasharray': [8, 4]
          }
        });
      });
    };
    
    script.onerror = () => {
      console.error('Failed to load Mapbox GL JS');
    };
    
    document.head.appendChild(script);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (map.current) {
        map.current!.remove();
        map.current = null;
      }
    };
  }, []);

      return (
      <div className="space-y-8">
        {/* Map Key Card - Above Map */}
        <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
          <h4 className="text-lg font-semibold text-bsr-highlight mb-4">Map Key</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-bsr-highlight border-2 border-white"></div>
              <span className="text-gray-300">BSR HQ (Dawlish)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-bsr-highlight rounded-full border border-white"></div>
              <span className="text-gray-300">Main Coverage Areas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-bsr-highlight rounded-full bg-transparent"></div>
              <span className="text-gray-300">Larger Projects Only</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 bg-pink-200 border border-pink-300"></div>
              <span className="text-gray-300">Coverage Zones</span>
            </div>
          </div>
        </div>

        {/* Map and Right Sidebar Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Map Container - Left Side */}
          <div className="flex-1">
            <div
              ref={mapContainer}
              className="w-full h-[60vh] lg:h-full rounded-xl shadow-2xl border border-bsr-gray-light"
              style={{ minHeight: '400px' }}
            />
          </div>

          {/* Right Sidebar with 3 Cards */}
          <div className="lg:w-80 space-y-6">
            {/* Service Areas Card */}
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h4 className="text-lg font-semibold text-bsr-highlight mb-4">Covering South East Devon</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-semibold text-bsr-white mb-2">Main Coverage</h5>
                  <p className="text-xs text-gray-300">Dawlish • Teignmouth • Newton Abbot • Kingsteignton • Bovey Tracey • Torquay • Exeter • Exton • Limpstone • Exmouth</p>
                </div>
                <div className="pt-3 border-t border-bsr-gray-light">
                  <h5 className="text-sm font-semibold text-bsr-white mb-2">Larger Projects</h5>
                  <p className="text-xs text-gray-300">Plymouth • Honiton</p>
                </div>
              </div>
            </div>

            {/* Quote Request Card */}
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h4 className="text-lg font-semibold text-bsr-highlight mb-4">Get Your Quote</h4>
              <div className="space-y-4">
                <p className="text-sm text-gray-300">Get a personalised quote for your decorating project</p>
                <button
                  onClick={openQuoteModal}
                  className="w-full bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Request Quote
                </button>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h4 className="text-lg font-semibold text-bsr-highlight mb-4">Get a Quote</h4>
              <div className="space-y-3">
                <p className="text-sm text-gray-300">Free quotes across all areas</p>
                <div className="text-center py-2">
                  <div className="text-bsr-highlight font-bold text-xl">07700 900000</div>
                  <p className="text-xs text-gray-300 mt-1">Click markers for details</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Request Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-bsr-highlight">Request a Quote</h3>
                  <button
                    onClick={closeQuoteModal}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmitQuote} className="space-y-4">
                  {/* Postcode */}
                  <div>
                    <label className="block text-sm font-medium text-bsr-white mb-2">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={(e) => updateFormField('postcode', e.target.value)}
                      placeholder="e.g. EX1 2GH"
                      className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white placeholder-gray-400 focus:border-bsr-highlight focus:outline-none"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-medium text-bsr-white mb-2">
                      Service Type *
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => updateFormField('serviceType', e.target.value)}
                      className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white focus:border-bsr-highlight focus:outline-none"
                    >
                      <option value="domestic">Domestic</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>

                  {/* Number of Rooms */}
                  <div>
                    <label className="block text-sm font-medium text-bsr-white mb-2">
                      Number of Rooms
                    </label>
                    <input
                      type="number"
                      value={formData.numberOfRooms}
                      onChange={(e) => updateFormField('numberOfRooms', e.target.value)}
                      placeholder="e.g. 3"
                      className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white placeholder-gray-400 focus:border-bsr-highlight focus:outline-none"
                    />
                  </div>

                  {/* Additional Services */}
                  <div>
                    <label className="block text-sm font-medium text-bsr-white mb-3">
                      Additional Services
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.externalDecorating}
                          onChange={(e) => updateFormField('externalDecorating', e.target.checked)}
                          className="mr-2 text-bsr-highlight focus:ring-bsr-highlight"
                        />
                        <span className="text-gray-300">Exterior Decorating</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.garageDoor}
                          onChange={(e) => updateFormField('garageDoor', e.target.checked)}
                          className="mr-2 text-bsr-highlight focus:ring-bsr-highlight"
                        />
                        <span className="text-gray-300">Garage Door</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.frontDoor}
                          onChange={(e) => updateFormField('frontDoor', e.target.checked)}
                          className="mr-2 text-bsr-highlight focus:ring-bsr-highlight"
                        />
                        <span className="text-gray-300">Front Door</span>
                      </label>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-bsr-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateFormField('name', e.target.value)}
                      placeholder="Your full name"
                      className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white placeholder-gray-400 focus:border-bsr-highlight focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-bsr-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateFormField('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white placeholder-gray-400 focus:border-bsr-highlight focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-bsr-white mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormField('phone', e.target.value)}
                      placeholder="07700 900000"
                      className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white placeholder-gray-400 focus:border-bsr-highlight focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Submit Quote Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

      </div>
  );
};

export default ServiceAreaMap;
