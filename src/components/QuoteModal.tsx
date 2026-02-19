'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  postcode: string;
  serviceType: 'domestic' | 'commercial';
  numberOfRooms: string;
  interiorDecorating: boolean;
  externalDecorating: boolean;
  garageDoor: boolean;
  frontDoor: boolean;
  wallpaperHanging: boolean;
  colourConsultation: boolean;
  officeSpaces: boolean;
  retailSpaces: boolean;
  industrialWarehouse: boolean;
  outOfHours: boolean;
  otherCommercial: boolean;
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
  const [currentStep, setCurrentStep] = useState(1);
  const [postcodeData, setPostcodeData] = useState<PostcodeData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    postcode: '',
    serviceType: 'domestic',
    numberOfRooms: '',
    interiorDecorating: false,
    externalDecorating: false,
    garageDoor: false,
    frontDoor: false,
    wallpaperHanging: false,
    colourConsultation: false,
    officeSpaces: false,
    retailSpaces: false,
    industrialWarehouse: false,
    outOfHours: false,
    otherCommercial: false,
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

  // Reset form and step when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      setFormData({
        postcode: '',
        serviceType: 'domestic',
        numberOfRooms: '',
        interiorDecorating: false,
        externalDecorating: false,
        garageDoor: false,
        frontDoor: false,
        wallpaperHanging: false,
        colourConsultation: false,
        officeSpaces: false,
        retailSpaces: false,
        industrialWarehouse: false,
        outOfHours: false,
        otherCommercial: false,
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
        alert(`Quote request submitted successfully! We'll contact you within 2 working days. Please check your email for a confirmation.`);
        onClose();
      } else if (result.missingConfig) {
        // Email not configured yet - show fallback message
        alert(`Thank you for your interest! Email service is being set up. Please call us directly at 01626 911236 or email info@bsrdecorating.co.uk with your quote request.`);
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

  // Step navigation
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Step validation
  const canProceedToStep2 = () => {
    return formData.postcode.trim() !== '';
  };

  const canProceedToStep3 = () => {
    if (formData.serviceType === 'commercial') {
      // For commercial, at least one service must be selected
      return formData.officeSpaces || formData.retailSpaces || formData.industrialWarehouse || formData.outOfHours || formData.otherCommercial;
    } else {
      // For domestic, either number of rooms OR at least one service must be provided
      const hasRooms = formData.numberOfRooms.trim() !== '';
      const hasService = formData.interiorDecorating || formData.externalDecorating || formData.garageDoor || formData.frontDoor || formData.wallpaperHanging || formData.colourConsultation;
      return hasRooms || hasService;
    }
  };

  if (!isOpen) return null;

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-bsr-white mb-2">Let&apos;s start with the basics</h4>
        <p className="text-gray-300 text-sm">We need to know your location and service type</p>
      </div>

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
        <label className="block text-sm font-medium text-bsr-white mb-3">
          What type of service do you need? *
        </label>
        <div className="grid grid-cols-1 gap-3">
          <label 
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              formData.serviceType === 'domestic' 
                ? 'border-bsr-highlight bg-bsr-highlight bg-opacity-10' 
                : 'border-bsr-gray-light hover:border-bsr-highlight'
            }`}
          >
            <input
              type="radio"
              name="serviceType"
              value="domestic"
              checked={formData.serviceType === 'domestic'}
              onChange={(e) => updateFormField('serviceType', e.target.value)}
              className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
            />
            <div>
              <div className="font-semibold text-bsr-white">Domestic</div>
              <div className="text-sm text-gray-300">Home & Residential</div>
            </div>
          </label>
          <label 
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              formData.serviceType === 'commercial' 
                ? 'border-bsr-highlight bg-bsr-highlight bg-opacity-10' 
                : 'border-bsr-gray-light hover:border-bsr-highlight'
            }`}
          >
            <input
              type="radio"
              name="serviceType"
              value="commercial"
              checked={formData.serviceType === 'commercial'}
              onChange={(e) => updateFormField('serviceType', e.target.value)}
              className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
            />
            <div>
              <div className="font-semibold text-bsr-white">Commercial</div>
              <div className="text-sm text-gray-300">Business & Industrial</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-bsr-white mb-2">
          {formData.serviceType === 'domestic' ? 'Home Decorating Options' : 'Commercial Project Details'}
        </h4>
        <p className="text-gray-300 text-sm">Select any services that apply to your project</p>
      </div>

      {formData.serviceType === 'domestic' ? (
        <>
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

          {/* Domestic Services */}
          <div>
            <label className="block text-sm font-medium text-bsr-white mb-3">
              Domestic Services
            </label>
            <p className="text-sm text-gray-400 mb-3">Please provide number of rooms above OR select at least one service below</p>
            <div className="space-y-2">
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.interiorDecorating}
                  onChange={(e) => updateFormField('interiorDecorating', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Interior Decorating</span>
              </label>
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.externalDecorating}
                  onChange={(e) => updateFormField('externalDecorating', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Exterior Decorating</span>
              </label>
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.garageDoor}
                  onChange={(e) => updateFormField('garageDoor', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Garage Door Painting</span>
              </label>
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.frontDoor}
                  onChange={(e) => updateFormField('frontDoor', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Front Door Painting</span>
              </label>
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.wallpaperHanging}
                  onChange={(e) => updateFormField('wallpaperHanging', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Wallpaper Hanging & Removal</span>
              </label>
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.colourConsultation}
                  onChange={(e) => updateFormField('colourConsultation', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Colour Consultation</span>
              </label>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Commercial Services */}
          <div>
            <label className="block text-sm font-medium text-bsr-white mb-3">
              Commercial Services *
            </label>
            <p className="text-sm text-gray-400 mb-3">Please select at least one service type</p>
            <div className="space-y-2">
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.officeSpaces}
                  onChange={(e) => updateFormField('officeSpaces', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Office Spaces</span>
              </label>
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.retailSpaces}
                  onChange={(e) => updateFormField('retailSpaces', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Retail Spaces</span>
              </label>
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.industrialWarehouse}
                  onChange={(e) => updateFormField('industrialWarehouse', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Industrial & Warehouse</span>
              </label>
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.outOfHours}
                  onChange={(e) => updateFormField('outOfHours', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Out-of-Hours Working</span>
              </label>
              <label className="flex items-center p-3 border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-colors">
                <input
                  type="checkbox"
                  checked={formData.otherCommercial}
                  onChange={(e) => updateFormField('otherCommercial', e.target.checked)}
                  className="mr-3 text-bsr-highlight focus:ring-bsr-highlight"
                />
                <span className="text-gray-300">Other (please detail in project details below)</span>
              </label>
            </div>
          </div>
        </>
      )}

      {/* Additional Message */}
      <div>
        <label className="block text-sm font-medium text-bsr-white mb-2">
          Project Details
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => updateFormField('message', e.target.value)}
          placeholder="Tell us more about your project requirements, timeline, or any specific details..."
          rows={4}
          className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white placeholder-gray-400 focus:border-bsr-highlight focus:outline-none resize-none"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-bsr-white mb-2">Contact Details</h4>
        <p className="text-gray-300 text-sm">How can we get back to you with your quote?</p>
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
          placeholder="01626 911236"
          className="w-full p-3 bg-bsr-black border border-bsr-gray-light rounded-lg text-bsr-white placeholder-gray-400 focus:border-bsr-highlight focus:outline-none"
        />
      </div>

      {/* Summary */}
      <div className="bg-bsr-black bg-opacity-50 rounded-lg p-4 border border-bsr-gray-light">
        <h5 className="font-semibold text-bsr-highlight mb-2">Quote Summary</h5>
        <div className="text-sm text-gray-300 space-y-1">
          <div>Location: {formData.postcode}</div>
          <div>Service: {formData.serviceType === 'domestic' ? 'Domestic' : 'Commercial'}</div>
          {formData.numberOfRooms && <div>Rooms: {formData.numberOfRooms}</div>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
      <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-semibold text-bsr-highlight">Request a Quote</h3>
              <div className="flex items-center space-x-2 mt-1">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-8 h-2 rounded-full transition-colors duration-200 ${
                      step <= currentStep ? 'bg-bsr-highlight' : 'bg-bsr-gray-light'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-400 ml-2">Step {currentStep} of 3</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={currentStep === 3 ? handleSubmitQuote : (e) => e.preventDefault()}>
            {/* Step Content */}
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-bsr-gray-light mt-6">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center space-x-2 px-6 py-3 border border-bsr-gray-light text-bsr-white rounded-lg hover:border-bsr-highlight transition-colors duration-200"
                >
                  <ChevronLeft size={18} />
                  <span>Back</span>
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={(currentStep === 1 && !canProceedToStep2()) || (currentStep === 2 && !canProceedToStep3())}
                  className="flex items-center space-x-2 bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center space-x-2 bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>Submit Quote Request</span>
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
