import { assets } from '@/assets/assets';
import Image from 'next/image'; // Import Image if it's from next/image

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2 dark:hidden" />
        <Image
          src={assets.logo_dark2}
          alt=""
          className="w-36 mx-auto mb-2 hidden dark:block"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6 dark:hidden" />
          <Image
            src={assets.mail_icon_dark}
            alt=""
            className="w-6 hidden dark:block"
          />
          <a
            href="mailto:wadudshuvro199@gmail.com"
            className="text-blue-500 underline"
          >
            wadudshuvro@gmail.com
          </a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/20 mx-[10%] mt-12 py-6">
        <p>© 2025 Wadud shuvro. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/wadudshuvro"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wadud-shuvro/"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wadud-shuvro/"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
