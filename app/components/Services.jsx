'use client';

import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image'; // Added missing import

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="scroll-behavior: smooth text-center mb-2 text-lg font-Ovo">
        What I offer
      </h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
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
    </div>
  );
};

export default Services;
