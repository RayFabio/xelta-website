'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Valid email is required');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!formData.service) {
      setError('Please select a service');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form data:', formData);
      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-600">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {error && (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary-950 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-600 transition-colors"
            placeholder="Your name"
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-primary-950 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-600 transition-colors"
            placeholder="your@email.com"
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-primary-950 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-600 transition-colors"
            placeholder="+1 (234) 567-890"
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-primary-950 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-600 transition-colors"
            placeholder="Your company"
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-primary-950 mb-2">
          Service of Interest *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-600 transition-colors"
          disabled={loading}
        >
          <option value="">Select a service</option>
          <option value="akademi-training">Akademi - Training Programs</option>
          <option value="akademi-hr">Akademi - HR Development</option>
          <option value="akademi-certification">Akademi - Certification Courses</option>
          <option value="adikarya-construction">Adikarya - Civil Construction</option>
          <option value="adikarya-infrastructure">Adikarya - Infrastructure Development</option>
          <option value="adikarya-project-management">Adikarya - Project Management</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary-950 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-600 transition-colors resize-none"
          placeholder="Tell us about your needs..."
          disabled={loading}
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex-1"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        <button
          type="reset"
          disabled={loading}
          onClick={() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              service: '',
              message: '',
            });
          }}
          className="btn-secondary flex-1"
        >
          Clear
        </button>
      </div>

      <p className="text-sm text-primary-600 text-center">
        * Required fields. We'll respond to your inquiry as soon as possible.
      </p>
    </form>
  );
}
