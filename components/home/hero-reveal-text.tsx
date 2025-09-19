'use client';
import useReveal from '../../hooks/useReveal';

const HeroRevealText = () => {
  const { revealRef } = useReveal();
  return (
    <div className="max-w-[647px] w-full absolute right-0 top-[70%] -translate-y-[70%] z-10 bg-linear-[180deg,rgba(4, 5, 9, 0.30)_0%,rgba(4, 5, 9, 0.62)_100%] rounded-full border border-[#3D4553]/50 backdrop-blur-[70px] p-[42px]">
      <p ref={revealRef} className="text-white text-2xl font-normal leading-[36px] tracking-[-0.48px]">
        Blue Trail Software is a benefit corporation committed to delivering ethical, high-performance software for
        enterprises, scale-ups, and innovators.
      </p>
    </div>
  );
};

export default HeroRevealText;
