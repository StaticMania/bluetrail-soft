import footerGradient from '@/public/images/gradient/gradient-1.png';
import Image from 'next/image';
import Link from 'next/link';
import FooterSlide from './footer-slide';

const links = [
  {
    id: 1,
    title: 'Services',
    href: '#',
  },
  {
    id: 2,
    title: 'Case Studies',
    href: '#',
  },
  {
    id: 3,
    title: 'About',
    href: '#',
  },
  {
    id: 4,
    title: 'Careers',
    href: '#',
  },
  {
    id: 5,
    title: 'Education',
    href: '#',
  },
  {
    id: 6,
    title: 'Contact',
    href: '#',
  },
];
const socials = [
  {
    id: 1,
    title: 'LinkedIn',
    href: '#',
  },
  {
    id: 2,
    title: 'Twitter',
    href: '#',
  },
  {
    id: 3,
    title: 'Facebook',
    href: '#',
  },
  {
    id: 4,
    title: 'Clutch',
    href: '#',
  },
  {
    id: 5,
    title: 'Github',
    href: '#',
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="2xl:max-w-[1880px] max-w-[1400px] mx-auto bg-black rounded-3xl font-figtree relative z-20">
        <div className="pt-[156px] pb-[70px] 2xl:px-[295px] px-[120px]">
          <div className="mb-[156px]">
            <FooterSlide />
            <p className="text-center text-xl font-normal leading-[30px] text-white/50 max-w-[600px] mx-auto mt-[26px] mb-14">
              Kick off with a free consultation to explore how we can help turn your vision into a high-performing
              software solution.
            </p>
            <div className="flex justify-center items-center gap-x-5">
              <Link href="/" className="btn btn-primary">
                <span>Book a Discovery Call</span>
              </Link>
              <Link href="/" className="btn btn-secondary">
                <span>Download a Case Study</span>
              </Link>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto">
            <div className="p-14 rounded-2xl bg-[#0D1017]">
              <div className="grid grid-cols-12">
                <div className="col-span-6">
                  <div>
                    <div className="space-y-3.5 mb-14">
                      <p className="text-white font-normal leading-[30px] text-xl">
                        2025 BlueTrailSoftware, Holding Inc.
                      </p>
                      <p className="text-white font-normal leading-[24px] text-base ">All rights reserved.</p>
                    </div>
                    <div className="space-y-3.5 mb-6">
                      <p className="text-white font-normal leading-[30px] text-xl">Address:</p>
                      <p className="text-white/50 font-normal leading-[21px] text-sm">
                        123 Compliance Street, Suite 200 <br /> New York, NY 10001
                      </p>
                    </div>
                    <div className="space-y-3.5 mb-6">
                      <p className="text-white font-normal leading-[30px] text-xl">Contact:</p>
                      <div className="text-white/50 font-normal leading-[21px] text-sm">
                        <p>+1 (000) 123-4567</p>
                        <p>hello@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 ">
                  <div className="space-y-2.5 px-6 text-right">
                    <p className="text-white leading-[24px] text-base font-medium p-2.5">Links</p>
                    <ul>
                      {links.map((link) => (
                        <li key={link.id} className="p-2.5">
                          <Link
                            href={link.href}
                            className="block text-white/50 leading-[24px] text-base font-normal hover:text-white transition-colors duration-300 underline-hover">
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="space-y-2.5 px-6 text-right">
                    <p className="text-white leading-[24px] text-base font-medium p-2.5">Social Prof</p>
                    <ul>
                      {socials.map((link) => (
                        <li key={link.id} className="p-2.5">
                          <Link
                            href={link.href}
                            className="block text-white/50 leading-[24px] text-base font-normal hover:text-white transition-colors duration-300 underline-hover">
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-[#7c8ea5]/25 my-10"></div>
              <div className="flex items-center justify-between">
                <ul className="flex items-center gap-x-2">
                  <li className="text-white text-base leading-[24px] font-normal underline-hover">
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <div className="h-4 w-px bg-white"></div>
                  </li>
                  <li className="text-white text-base font-normal leading-[24px] underline-hover">
                    <Link href="#">Security & Compliance</Link>
                  </li>
                </ul>

                <ul className="flex items-center gap-x-3">
                  <li>
                    <Link href="#" className="hover:-translate-y-1 transition-transform duration-300 block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path
                          d="M20 10.9713C20 5.41467 15.5229 0.910156 10 0.910156C4.47715 0.910156 0 5.41467 0 10.9713C0 15.993 3.65684 20.1554 8.4375 20.9102V13.8796H5.89844V10.9713H8.4375V8.75468C8.4375 6.23312 9.9305 4.84028 12.2146 4.84028C13.3088 4.84028 14.4531 5.03679 14.4531 5.03679V7.51277H13.1922C11.95 7.51277 11.5625 8.28838 11.5625 9.08406V10.9713H14.3359L13.8926 13.8796H11.5625V20.9102C16.3432 20.1554 20 15.9932 20 10.9713Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:-translate-y-1 transition-transform duration-300 block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 3.91016H8C5.23858 3.91016 3 6.14874 3 8.91016V16.9102C3 19.6716 5.23858 21.9102 8 21.9102H16C18.7614 21.9102 21 19.6716 21 16.9102V8.91016C21 6.14874 18.7614 3.91016 16 3.91016ZM19.25 16.9102C19.2445 18.7028 17.7926 20.1547 16 20.1602H8C6.20735 20.1547 4.75549 18.7028 4.75 16.9102V8.91016C4.75549 7.11751 6.20735 5.66565 8 5.66016H16C17.7926 5.66565 19.2445 7.11751 19.25 8.91016V16.9102ZM16.75 9.16016C17.3023 9.16016 17.75 8.71244 17.75 8.16016C17.75 7.60788 17.3023 7.16016 16.75 7.16016C16.1977 7.16016 15.75 7.60788 15.75 8.16016C15.75 8.71244 16.1977 9.16016 16.75 9.16016ZM12 8.41016C9.51472 8.41016 7.5 10.4249 7.5 12.9102C7.5 15.3955 9.51472 17.4102 12 17.4102C14.4853 17.4102 16.5 15.3955 16.5 12.9102C16.5027 11.7159 16.0294 10.5697 15.1849 9.72524C14.3404 8.88075 13.1943 8.4075 12 8.41016ZM9.25 12.9102C9.25 14.429 10.4812 15.6602 12 15.6602C13.5188 15.6602 14.75 14.429 14.75 12.9102C14.75 11.3914 13.5188 10.1602 12 10.1602C10.4812 10.1602 9.25 11.3914 9.25 12.9102Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:-translate-y-1 transition-transform duration-300 block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path
                          d="M14.1761 0.910156H16.9362L10.9061 7.68756L18 16.9102H12.4456L8.0951 11.3168L3.11723 16.9102H0.35544L6.80517 9.66096L0 0.910156H5.69545L9.6279 6.02278L14.1761 0.910156ZM13.2073 15.2856H14.7368L4.86441 2.44944H3.2232L13.2073 15.2856Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:-translate-y-1 transition-transform duration-300 block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 3.91016C3.67157 3.91016 3 4.58173 3 5.41016V20.4102C3 21.2386 3.67157 21.9102 4.5 21.9102H19.5C20.3284 21.9102 21 21.2386 21 20.4102V5.41016C21 4.58173 20.3284 3.91016 19.5 3.91016H4.5ZM8.52076 7.91288C8.52639 8.86913 7.81061 9.45835 6.96123 9.45413C6.16107 9.44991 5.46357 8.81288 5.46779 7.91429C5.47201 7.06913 6.13998 6.38991 7.00764 6.4096C7.88795 6.42929 8.52639 7.07476 8.52076 7.91288ZM12.2797 10.6719H9.75971H9.7583V19.2318H12.4217V19.0321C12.4217 18.6522 12.4214 18.2722 12.4211 17.8921C12.4203 16.8783 12.4194 15.8634 12.4246 14.8499C12.426 14.6038 12.4372 14.3479 12.5005 14.113C12.7381 13.2355 13.5271 12.6688 14.4074 12.8081C14.9727 12.8966 15.3467 13.2243 15.5042 13.7573C15.6013 14.0905 15.6449 14.4491 15.6491 14.7965C15.6605 15.8441 15.6589 16.8917 15.6573 17.9394C15.6567 18.3092 15.6561 18.6792 15.6561 19.049V19.2304H18.328V19.0251C18.328 18.5731 18.3278 18.1212 18.3275 17.6693C18.327 16.5398 18.3264 15.4103 18.3294 14.2804C18.3308 13.7699 18.276 13.2665 18.1508 12.7729C17.9638 12.0388 17.5771 11.4313 16.9485 10.9926C16.5027 10.6803 16.0133 10.4793 15.4663 10.4568C15.404 10.4542 15.3412 10.4508 15.2781 10.4474C14.9984 10.4322 14.7141 10.4169 14.4467 10.4708C13.6817 10.6241 13.0096 10.9743 12.5019 11.5916C12.4429 11.6624 12.3852 11.7343 12.2991 11.8416L12.2797 11.8659V10.6719ZM5.68164 19.2346H8.33242V10.6775H5.68164V19.2346Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:-translate-y-1 transition-transform duration-300 block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path
                          d="M21.593 7.87C21.4791 7.4474 21.2565 7.062 20.9473 6.75217C20.6382 6.44233 20.2533 6.21886 19.831 6.104C18.265 5.674 12 5.667 12 5.667C12 5.667 5.73596 5.66 4.16896 6.071C3.74689 6.19115 3.36279 6.41778 3.05353 6.72913C2.74427 7.04049 2.52025 7.42612 2.40296 7.849C1.98996 9.415 1.98596 12.663 1.98596 12.663C1.98596 12.663 1.98196 15.927 2.39196 17.477C2.62196 18.334 3.29696 19.011 4.15496 19.242C5.73696 19.672 11.985 19.679 11.985 19.679C11.985 19.679 18.25 19.686 19.816 19.276C20.2385 19.1613 20.6237 18.9384 20.9336 18.6292C21.2435 18.32 21.4673 17.9352 21.583 17.513C21.997 15.948 22 12.701 22 12.701C22 12.701 22.02 9.436 21.593 7.87ZM9.99596 15.672L10.001 9.672L15.208 12.677L9.99596 15.672Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <figure className="absolute top-0 right-0 w-[1012px] h-[1372px] z-[-1]">
          <Image src={footerGradient} alt="footer-gradient" />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
