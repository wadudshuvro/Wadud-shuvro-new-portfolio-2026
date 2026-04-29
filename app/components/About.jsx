import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className=" scroll-behavior: smooth text-center mb-2 text-lg font-Ovo">
        Introdution
      </h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center I gap-20 my-20">
        <div className="W-64 sm:w-80 rounded-3x1 max-w-none">
          <Image
            src={assets.user_image}
            alt="Wadud Shuvro - about section portrait"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced Frontend Developer with 6 years of
            professional experience. Throughout my career, I have had the
            privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x1">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6
                cursor-pointer
                hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white duration-500"
                key={index}
              >
                <Image
                  src={icon}
                  alt={`Wadud Shuvro - ${title} icon`}
                  className="w-7 mt-3 dark:hidden"
                />
                <Image
                  src={iconDark}
                  alt={`Wadud Shuvro - ${title} icon dark`}
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white/90">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-white/70">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 dark:text-white/90 font-Ovo">
            Tolls I used{' '}
          </h4>
          <ul className="flex items-center gap-3 xm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer
                hover:-translate-y-1 duration-500 dark:bg-white/5"
                key={index}
              >
                <Image
                  src={tool}
                  alt={`Wadud Shuvro - development tool ${index + 1}`}
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
