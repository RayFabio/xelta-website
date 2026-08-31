import Navbar from "@/components/Navbar";
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adikarya Utama | Civil Construction & Infrastructure | XELTA',
  description:
    'XELTA Adikarya Utama - Professional civil construction, infrastructure development, and project management services.',
  keywords: [
    'civil construction',
    'infrastructure',
    'project management',
    'engineering',
    'construction services',
  ],
};

export default function Adikarya() {
  const services = [
    {
      title: 'Civil Construction',
      description: 'Full-service civil construction including foundations, structural design, and infrastructure development.',
    },
    {
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including roads, bridges, utilities, and public facilities.',
    },
    {
      title: 'Project Management',
      description: 'Professional project management from planning through completion with budget and timeline oversight.',
    },
    {
      title: 'Engineering & Design',
      description: 'Expert engineering services with innovative design solutions for complex construction challenges.',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control and testing to ensure all projects meet industry standards and specifications.',
    },
    {
      title: 'Maintenance & Support',
      description: 'Post-construction maintenance, repairs, and ongoing support services for long-term asset preservation.',
    },
  ];

  const specialties = [
    'Commercial building construction',
    'Infrastructure and public works',
    'Sustainable construction practices',
    'Advanced engineering solutions',
    'Construction safety management',
    'Timely project delivery',
  ];

  return (
    <div className="min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="section py-24 bg-gradient-dark text-white">
        <div className="container-xelta text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            XELTA Adikarya Utama
          </h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Building excellence through professional civil construction and infrastructure development
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-xelta">
          <h2 className="text-3xl font-bold mb-6 text-center">About Adikarya Utama</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-primary-700 mb-6 leading-relaxed">
              XELTA Adikarya Utama is a premier construction and infrastructure development company committed to 
              delivering world-class projects that stand the test of time. We combine modern engineering practices 
              with deep industry expertise to build infrastructure that serves communities and businesses.
            </p>
            <p className="text-lg text-primary-700 leading-relaxed">
              With a focus on quality, safety, and innovation, we transform ambitious visions into concrete reality, 
              managing complex projects with precision and professional excellence.
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

      {/* Specialties Section */}
      <section className="section bg-white">
        <div className="container-xelta">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Specialties</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {specialties.map((specialty, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-lg text-primary-700"
                >
                  <span className="text-accent-600 font-bold mt-1">✓</span>
                  <span>{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section bg-primary-50">
        <div className="container-xelta">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Adikarya Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Teams',
                description: 'Experienced engineers and construction professionals with proven project delivery records',
              },
              {
                title: 'Quality Focus',
                description: 'Rigorous quality standards and safety practices on every project',
              },
              {
                title: 'Innovation',
                description: 'Cutting-edge construction methods and sustainable infrastructure solutions',
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
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            Discuss your construction and infrastructure needs with our expert team. We're ready to turn your vision into reality.
          </p>
          <Link href="/contact" className="btn-accent">
            Get a Project Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
