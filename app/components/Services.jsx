'use client';

import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import contentfulCertificate from '../../assets/certificates/Screenshot_5.png';
import contentstackCertificate from '../../assets/certificates/Wadud_Shuvro_Contentstack_Certification.jpg';
import jnjNoticeCertificate from '../../assets/certificates/Screenshot_6.png';
import privacyTrainingCertificate from '../../assets/certificates/certificate 2_page-0001.jpg';
import kenvueCyberAwarenessCertificate from '../../assets/certificates/Screenshot_8.png';

const experienceHighlights = [
  'Contributed to multiple enterprise-grade healthcare platforms for Johnson & Johnson, supporting over 40 products under the JMC Medical Cloud (UK).',
  'Worked on high-impact pharmaceutical products including ERLEADA®, RYBREVANT®, TREMFYA®, and DARZALEX®, ensuring responsive, compliant, and user-friendly interfaces.',
  'Collaborated on digital experiences for Kenvue brands such as Neutrogena, Listerine, Aveeno, OGX, and Rogaine.',
  'Delivered frontend solutions across multiple agencies including Servicengine and SJ Innovation, working in cross-functional, international teams.',
];

const certificateCategories = ['All', 'CMS', 'Enterprise', 'Security'];

const certificates = [
  {
    title: 'Contentful Certified Professional Exam',
    issuer: 'Contentful',
    category: 'CMS',
    issueDate: 'Verified credential',
    credentialId: 'Available on certificate',
    description:
      'Professional certification validating enterprise CMS architecture, content modeling, and delivery expertise.',
    image: contentfulCertificate,
    featured: true,
  },
  {
    title: 'Contentstack Catalysts - Certified Developer',
    issuer: 'Contentstack',
    category: 'CMS',
    issueDate: 'Verified credential',
    credentialId: 'Available on certificate',
    description:
      'Developer certification focused on headless CMS implementation and scalable digital experience delivery.',
    image: contentstackCertificate,
  },
  {
    title: 'J&J Global Non-Employee Worker Notice',
    issuer: 'Johnson & Johnson',
    category: 'Enterprise',
    issueDate: 'Enterprise compliance',
    credentialId: 'Internal credential',
    description:
      'Compliance acknowledgement for work within global healthcare enterprise environments.',
    image: jnjNoticeCertificate,
  },
  {
    title: 'Information Security & Privacy Training Course v12',
    issuer: 'Enterprise Security Training',
    category: 'Security',
    issueDate: 'Training completion',
    credentialId: 'Available on certificate',
    description:
      'Security and privacy training covering responsible handling of sensitive data and digital products.',
    image: privacyTrainingCertificate,
  },
  {
    title: 'Kenvue - Phishing & Cyber Awareness',
    issuer: 'Kenvue',
    category: 'Security',
    issueDate: 'Training completion',
    credentialId: 'Available on certificate',
    description:
      'Cyber awareness training supporting secure collaboration across global consumer health brands.',
    image: kenvueCyberAwarenessCertificate,
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'All') {
      return certificates;
    }

    return certificates.filter(
      (certificate) => certificate.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="scroll-behavior: smooth text-center mb-2 text-lg font-Ovo">
        What I offer
      </h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo text-gray-800/90 dark:text-white/80">
        Frontend Developer with 6+ years of experience building scalable, high-performance web applications across healthcare and consumer brands. Proven track record of delivering enterprise-level digital products for global organizations, with a strong focus on performance, accessibility, and maintainable architecture.
      </p>

      <div className="max-w-3xl mx-auto mb-14">
        <div
          className="rounded-2xl border border-gray-300 dark:border-white/20 bg-lightHover/40 dark:bg-white/[0.03] p-8 md:p-10
          shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]"
        >
          <h3 className="text-center text-2xl sm:text-3xl font-Ovo mb-8 text-gray-900 dark:text-white">
            Experience Highlights
          </h3>
          <ul className="space-y-5 text-left">
            {experienceHighlights.map((item, index) => (
              <li key={index} className="flex gap-3.5 sm:gap-4">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-darkHover dark:bg-lime-300"
                  aria-hidden
                />
                <span className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-white/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white/90">
              {title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-white/70 leading-5">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 dark:text-white/80"
            >
              Read more
              <Image src={assets.right_arrow} alt="read more" className="w-4" />
            </a>
          </div>
        ))}
      </div>

      <section
        className="mt-20 border-y border-gray-200/80 dark:border-white/10 py-16"
        aria-labelledby="certificates-heading"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-white/50">
            Verified expertise
          </p>
          <h2
            id="certificates-heading"
            className="text-4xl sm:text-5xl font-Ovo text-gray-900 dark:text-white"
          >
            Certificates & Achievements
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600 dark:text-white/70">
            Credentials that support my work across enterprise healthcare,
            consumer brands, headless CMS platforms, security, and privacy-led
            delivery.
          </p>
        </div>

        <div
          className="mx-auto mt-9 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full border border-gray-200 bg-white/70 p-1.5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
          aria-label="Filter certificates by category"
        >
          {certificateCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                activeCategory === category
                  ? 'bg-black text-white shadow-sm dark:bg-white dark:text-black'
                  : 'text-gray-600 hover:bg-lightHover hover:text-gray-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white'
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCertificates.map((certificate) => (
            <article
              key={certificate.title}
              className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 p-5 transition duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 ${
                certificate.featured ? 'sm:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {certificate.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-lime-300 px-3 py-1 text-xs font-medium text-black">
                  Featured
                </span>
              )}

              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl border border-gray-100 bg-gray-50 dark:border-white/10 dark:bg-white/5">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-lightHover px-3 py-1 text-xs font-medium text-darkHover dark:bg-white/10 dark:text-lime-300">
                  {certificate.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-white/50">
                  {certificate.issueDate}
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-snug text-gray-900 dark:text-white">
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-white/70">
                {certificate.issuer}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-white/60">
                {certificate.description}
              </p>
              <p className="mt-4 text-xs text-gray-500 dark:text-white/50">
                Credential ID: {certificate.credentialId}
              </p>

              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition duration-300 hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black/40 dark:border-white/20 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-white/40"
                aria-label={`View certificate: ${certificate.title}`}
              >
                View Certificate
                <span aria-hidden>→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-white p-4 shadow-2xl dark:bg-darkTheme"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-white/50">
                  {selectedCertificate.issuer}
                </p>
                <h3
                  id="certificate-modal-title"
                  className="text-xl font-semibold text-gray-900 dark:text-white"
                >
                  {selectedCertificate.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/40 dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:focus:ring-white/40"
                aria-label="Close certificate preview"
              >
                Close
              </button>
            </div>
            <div className="relative max-h-[75vh] overflow-auto rounded-xl bg-gray-100 dark:bg-white/5">
              <Image
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} full certificate`}
                className="h-auto w-full object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
