import heroGradient from '@/public/images/gradient/gradient-1.png';
import Image from 'next/image';
import Link from 'next/link';
import HeroRevealText from './hero-reveal-text';

const Hero = () => {
  return (
    <section className="bg-linear-[0deg,#000_0%,#000_100%] relative overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="2xl:pt-[200px] pt-[170px] pb-14">
          <div>
            <h1 className="hero-text-gradient 2xl:text-heading-1 text-[84px] font-medium leading-[100px] tracking-[-4px] 2xl:max-w-[1110px] max-w-[950px] text-white w-full">
              More than code. we build trust through craft and commitment.
            </h1>
            <p className="text-2xl font-normal leading-[33.6px] text-white/50 max-w-[630px] w-full mt-11 mb-[90px]">
              Engineered with integrity. backed by mentorship. Delivered with care.
            </p>
            <div className="space-x-5 mb-[103px]">
              <Link href="/" className="btn btn-primary">
                <span>Schedule a 30-min discovery Call</span>
              </Link>
              <Link href="/" className="btn btn-secondary">
                <span>See our results</span>
              </Link>
            </div>

            <a
              href="#clients"
              className="w-16 h-[84px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer group">
              <svg
                className="group-hover:translate-y-2 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={28}
                viewBox="0 0 20 28"
                fill="none">
                <path d="M9.5 1L10 27" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 18L10 27L19 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <HeroRevealText />
      </div>
      <figure className="absolute top-0 right-0 max-w-[1012px] w-full h-full max-h-[1372px] z-5">
        <Image src={heroGradient} alt="hero-image" />
      </figure>
      <figure className="absolute top-[-3%] right-[-38%] w-full h-full z-0 overflow-y-hidden">
        <div className="w-full h-full absolute top-0 left-0 mix-blend-soft-light bg-black"></div>
        <div className="w-full h-full absolute top-0 left-0 mix-blend-hue bg-[#18FB50]"></div>
        <video autoPlay muted loop playsInline>
          <source src="/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </figure>
    </section>
  );
};

export default Hero;
