'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.enum(['domestic', 'commercial', 'both']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onSuccess: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data);
      
      reset();
      onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-bsr-white mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-bsr-gray border border-bsr-gray-light rounded-md text-bsr-white placeholder-gray-400 focus:outline-none focus:border-bsr-highlight transition-colors duration-200"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-bsr-white mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-bsr-gray border border-bsr-gray-light rounded-md text-bsr-white placeholder-gray-400 focus:outline-none focus:border-bsr-highlight transition-colors duration-200"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-bsr-white mb-2">
          Phone Number *
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 bg-bsr-gray border border-bsr-gray-light rounded-md text-bsr-white placeholder-gray-400 focus:outline-none focus:border-bsr-highlight transition-colors duration-200"
          placeholder="07805 469770"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
        )}
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-bsr-white mb-2">
          Service Required *
        </label>
        <select
          {...register('service')}
          id="service"
          className="w-full px-4 py-3 bg-bsr-gray border border-bsr-gray-light rounded-md text-bsr-white focus:outline-none focus:border-bsr-highlight transition-colors duration-200"
        >
          <option value="">Select a service</option>
          <option value="domestic">Domestic Decorating</option>
          <option value="commercial">Commercial Decorating</option>
          <option value="both">Both Domestic & Commercial</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-bsr-white mb-2">
          Project Details *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 bg-bsr-gray border border-bsr-gray-light rounded-md text-bsr-white placeholder-gray-400 focus:outline-none focus:border-bsr-highlight transition-colors duration-200 resize-none"
          placeholder="Tell us about your project, including room sizes, timeline, and any specific requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-bsr-highlight hover:bg-[#d001e8] disabled:bg-gray-600 text-bsr-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-sm text-gray-400 text-center">
        We&apos;ll get back to you within 24 hours with a free quote.
      </p>
    </form>
  );
};

export default ContactForm;
