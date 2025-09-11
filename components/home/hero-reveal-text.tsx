'use client';
import useReveal from '../../hooks/useReveal';

const HeroRevealText = () => {
  const { revealRef } = useReveal();
  return (
    <div className="max-w-[415px] w-full absolute 2xl:right-[313px] right-[100px] 2xl:bottom-[246px] bottom-[150px] z-10 bg-linear-[180deg, rgba(4, 5, 9, 0.10)_0%, rgba(4, 5, 9, 0.12)_100%] rounded-2xl border border-[#3D4553]/50 backdrop-blur-[30px]  px-[38px] py-[42px]">
      <p ref={revealRef} className="text-white max-w-[339px] w-full text-xl font-normal leading-[30px]">
        Blue trail software is a benefit corporation committed to delivering ethical, high-performance software for
        enterprises, scale-ups, and innovators.
      </p>
    </div>
  );
};

export default HeroRevealText;
