'use client';

import { assets, workData } from '@/assets/assets';
import Image from 'next/image';

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="scroll-behavior: smooth text-center mb-2 text-lg font-Ovo">
        My portfolio
      </h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of proj
        ets showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white dark:bg-white/10 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700 dark:text-white/70">
                  {project.description}
                </p>
              </div>
              <div className="border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-white/80 border-[0.5px] border-gray-700 dark:border-white/60 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:hover:bg-darkHover duration-500 "
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow"
          className="w-4 dark:hidden"
        />
        <Image
          src={assets.right_arrow_bold_dark}
          alt="right arrow"
          className="w-4 hidden dark:block"
        />
      </a>
    </div>
  );
};

export default Work;
