import { assets } from '@/assets/assets';
import Image from 'next/image';

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3x1 text-center mx-auto flex flex-col
    items-center justify-center gap-4 pt-28 pb-10 sm:h-screen sm:py-0"
    >
      <div>
        <Image
          src={assets.profile_img}
          alt="Wadud Shuvro - profile headshot"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2x1 mb-3 font-Ovo">
        Hi! I&apos;m Wadud Shuvro
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3x1 sm:text-6xl lg:text-[66px] font-Ovo">
        frontend web developer <br />
        based in Bangladesh.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo text-black/70 dark:text-white/70">
        I am a frontend developer from Bangladesh with 6 years of experience in
        multiple companies like Servicengine, SJ Innovation.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black
       text-white flex items-center gap-2"
        >
          contact me{' '}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/api/resume"
          download="Wadud Shuvro Resume.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 dark:border-white/50 flex items-center gap-2 hover:bg-lightHover dark:hover:bg-darkHover duration-300"
        >
          my resume{' '}
          <Image
            src={assets.download_icon}
            alt=""
            className="w-4 dark:invert"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
