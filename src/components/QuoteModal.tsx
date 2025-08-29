'use client';

import { useState, useEffect } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  postcode: string;
  serviceType: 'domestic' | 'commercial';
  numberOfRooms: string;
  externalDecorating: boolean;
  garageDoor: boolean;
  frontDoor: boolean;
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface PostcodeData {
  mainAreas: string[];
  largerJobAreas: string[];
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [postcodeData, setPostcodeData] = useState<PostcodeData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    postcode: '',
    serviceType: 'domestic',
    numberOfRooms: '',
    externalDecorating: false,
    garageDoor: false,
    frontDoor: false,
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Load postcode data
  useEffect(() => {
    fetch('/data/postcodes.json')
      .then(response => response.json())
      .then(data => setPostcodeData(data))
      .catch(error => console.error('Error loading postcode data:', error));
  }, []);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        postcode: '',
        serviceType: 'domestic',
        numberOfRooms: '',
        externalDecorating: false,
        garageDoor: false,
        frontDoor: false,
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  }, [isOpen]);

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
        onClose();
      } else if (result.missingConfig) {
        // Email not configured yet - show fallback message
        alert(`Thank you for your interest! Email service is being set up. Please call us directly at 07700 900000 or email hello@saunders-simmons.co.uk with your quote request.`);
        onClose();
      } else {
        alert(`Error sending quote request: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Error submitting quote request. Please try again or call us directly.');
    }
  };

  // Form field updates
  const updateFormField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
      <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-bsr-highlight">Request a Quote</h3>
            <button
              onClick={onClose}
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
              <div className="relative">
                <select
                  required
                  value={formData.serviceType}
                  onChange={(e) => updateFormField('serviceType', e.target.value as 'domestic' | 'commercial')}
                  className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white focus:border-bsr-highlight focus:outline-none appearance-none cursor-pointer pr-10"
                >
                  <option value="domestic">Domestic - Home & Residential</option>
                  <option value="commercial">Commercial - Business & Industrial</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
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

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-bsr-white mb-2">
                Additional Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => updateFormField('message', e.target.value)}
                placeholder="Tell us more about your project requirements, timeline, or any specific details..."
                rows={4}
                className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white placeholder-gray-400 focus:border-bsr-highlight focus:outline-none resize-none"
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
  );
};

export default QuoteModal;
