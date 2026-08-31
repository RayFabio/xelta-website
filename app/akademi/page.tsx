import Navbar from "@/components/Navbar";
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Akademi Unggul | Professional Education & HR Development | XELTA',
  description:
    'XELTA Akademi Unggul - Professional training programs, HR development, and skill certification courses for career advancement.',
  keywords: [
    'professional training',
    'HR development',
    'education',
    'skill certification',
    'corporate training',
  ],
};

export default function Akademi() {
  const services = [
    {
      title: 'Professional Training Programs',
      description: 'Comprehensive, industry-focused training programs designed to develop professional competencies across various sectors.',
    },
    {
      title: 'HR Development & Consulting',
      description: 'Strategic HR solutions including organizational development, talent management, and workforce planning.',
    },
    {
      title: 'Skill Certification Courses',
      description: 'Accredited certification programs in technical and soft skills to enhance career prospects.',
    },
    {
      title: 'Corporate Training Solutions',
      description: 'Customized in-house training programs tailored to organizational needs and industry standards.',
    },
    {
      title: 'Leadership Development',
      description: 'Executive coaching and leadership programs for developing future organizational leaders.',
    },
    {
      title: 'Compliance & Regulatory Training',
      description: 'Specialized training to ensure organizational compliance with industry regulations and standards.',
    },
  ];

  const capabilities = [
    'Certified training instructors with industry expertise',
    'Comprehensive curriculum development and customization',
    'Modern training facilities and e-learning platforms',
    'Industry partnerships and collaborations',
    'Flexible scheduling (on-site, online, hybrid)',
    'Post-training support and performance tracking',
  ];

  return (
    <div className="min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="section py-24 bg-gradient-dark text-white">
        <div className="container-xelta text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            XELTA Akademi Unggul
          </h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Empowering professionals through excellence in education, training, and human resource development
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-xelta">
          <h2 className="text-3xl font-bold mb-6 text-center">About Akademi Unggul</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-primary-700 mb-6 leading-relaxed">
              XELTA Akademi Unggul is dedicated to transforming careers and organizational capabilities through 
              innovative, industry-relevant education and training solutions. We partner with businesses to develop 
              their most valuable asset—their people.
            </p>
            <p className="text-lg text-primary-700 leading-relaxed">
              With a commitment to excellence and measurable outcomes, we deliver training programs that bridge 
              the gap between current skills and industry demands, ensuring professional growth at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-primary-50">
        <div className="container-xelta">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-950">
                  {service.title}
                </h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section bg-white">
        <div className="container-xelta">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Capabilities</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {capabilities.map((capability, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-lg text-primary-700"
                >
                  <span className="text-accent-600 font-bold mt-1">✓</span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section bg-primary-50">
        <div className="container-xelta">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Akademi Unggul</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Instructors',
                description: 'Industry professionals with years of experience and proven track records',
              },
              {
                title: 'Proven Results',
                description: 'Measurable skill development and career advancement for our participants',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored programs designed specifically for your organizational needs',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary-950">
                  {item.title}
                </h3>
                <p className="text-primary-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-950 text-white">
        <div className="container-xelta text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Invest in Your Team's Future?
          </h2>
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how Akademi Unggul can help develop your workforce and drive organizational success.
          </p>
          <Link href="/contact" className="btn-accent">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
