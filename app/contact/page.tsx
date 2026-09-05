import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | XELTA - Education & Construction Solutions',
  description:
    'Get in touch with XELTA. Contact our team for inquiries about our education, HR development, or construction services.',
  keywords: ['contact', 'inquiry', 'support', 'XELTA'],
};

export default function Contact() {
  return (
    <div className="contact-page min-h-screen bg-slate-950 text-white">
      <section className="section py-24 bg-gradient-dark text-white">
        <div className="container-xelta text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-primary-200">
            Let's discuss how XELTA can support your goals
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-xelta">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Send us a Message</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-primary-950 mb-2 text-lg">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-accent-600 hover:text-accent-500 font-medium"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-950 mb-2 text-lg">Email</h3>
                    <a
                      href="mailto:info@xelta.com"
                      className="text-accent-600 hover:text-accent-500 font-medium break-all"
                    >
                      info@xelta.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-950 mb-2 text-lg">Address</h3>
                    <p className="text-primary-700">
                      Jakarta, Indonesia
                    </p>
                  </div>

                  <div className="pt-4 border-t border-primary-200">
                    <h3 className="font-semibold text-primary-950 mb-3 text-lg">Divisions</h3>
                    <ul className="space-y-2 text-primary-700">
                      <li><a href="/akademi" className="hover:text-accent-600 transition">Akademi Unggul</a></li>
                      <li><a href="/adikarya" className="hover:text-accent-600 transition">Adikarya Utama</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container-xelta max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-6">We're Here to Help</h2>
          <p className="text-lg text-primary-700 mb-6">
            We aim to respond to all inquiries within 24 hours during business days. 
            For urgent matters, please call us directly.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: 'Response Time', value: '< 24 hours' },
              { label: 'Support', value: '24/7 Available' },
              { label: 'Languages', value: 'ID, EN' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <p className="text-sm text-primary-600 mb-1">{item.label}</p>
                <p className="text-lg font-semibold text-primary-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
