import slide1 from '@/public/images/footer/slide-1.jpg';
import slide2 from '@/public/images/footer/slide-2.jpg';
import Image from 'next/image';

const FooterSlide = () => {
  return (
    <h2 className="max-w-[858px] mx-auto text-center text-white text-[72px] font-semibold leading-[120%] tracking-[-1.44px]">
      Let us scale your
      <figure className="inline-block w-[100px] h-[70px] rounded-full rotate-[15deg] overflow-hidden mx-3">
        <Image src={slide1} alt="slide" className="w-full h-full object-cover overflow-hidden" />
      </figure>
      future
      <figure className="inline-block w-[100px] h-[70px] rounded-full rotate-[-15deg] overflow-hidden mx-3">
        <Image src={slide2} alt="slide" className="w-full h-full object-cover overflow-hidden" />
      </figure>
      your innovation elevate
    </h2>
  );
};

export default FooterSlide;
