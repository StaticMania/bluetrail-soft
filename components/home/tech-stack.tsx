import gradient from '@/public/images/gradient/gradient-2.png';
import Image from 'next/image';
import TechStackHead from './tech-stack-head';
import TechStackTab from './tech-stack-tab';

const TechStack = () => {
  return (
    <section>
      <div className="2xl:py-[176px] py-[100px] 2xl:max-w-[1880px] max-w-[1400px] 2xl:px-0 px-5 mx-auto bg-[#040509] rounded-[40px] relative overflow-hidden">
        <div className="main-container relative z-10">
          <TechStackHead />
          <div className="h-px w-full bg-[#2D343E] mt-14 mb-[76px]"></div>
          <TechStackTab />
        </div>
        <figure className="absolute top-0 left-0 w-[1012px] h-[1372px] z-0">
          <Image src={gradient} alt="footer-gradient" />
        </figure>
      </div>
    </section>
  );
};

export default TechStack;
