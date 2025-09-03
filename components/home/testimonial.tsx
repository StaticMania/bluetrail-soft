'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../../data/testimonial';
import { RatingStarIcon, StarIcon } from '../shared/Icons';

const Testimonial = () => {
  return (
    <section className="pb-[112px] pt-[176px]">
      <div className="main-container">
        <div className="space-y-4 mb-14">
          <div className="flex items-center justify-center gap-x-2.5 py-2 px-6">
            <StarIcon />
            <p className="uppercase font-interTight text-sm font-normal leading-[21px] text-[#040509]">
              Client testimonials
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[72px] font-semibold text-secondary leading-[86.4px] tracking-[-1.44px] font-figtree">
              We Don’t Just Deliver. <br /> We Deliver Better.
            </h2>
          </div>
        </div>
        <div className="px-1">
          <Swiper
            className="swiper"
            slidesPerView={3}
            loop={true}
            effect="slide"
            speed={1000}
            spaceBetween={8}
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            scrollbar={false}>
            <div>
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="swiper-slide">
                  <article className="p-8 rounded-3xl border border-[#D9E0EC] bg-white/25 min-h-[364px] flex flex-col justify-between">
                    <div className="space-y-5">
                      <div className="flex items-center gap-x-1">
                        <RatingStarIcon />
                        <RatingStarIcon />
                        <RatingStarIcon />
                        <RatingStarIcon />
                        <RatingStarIcon />
                      </div>
                      <div>
                        <p className="text-secondary text-xl font-normal leading-[30px] font-interTight">
                          {testimonial.review}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <figure className="size-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.user.image}
                          alt={testimonial.user.name}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <div>
                        <h3 className="text-black text-xl font-normal leading-[30px]">{testimonial.user.name}</h3>
                        <p className="text-black/50 text-lg font-normal leading-[27px]">
                          {testimonial.user.designation}
                        </p>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className="flex justify-center mt-[76px]">
          <Link href="#" className="btn btn-primary">
            <span>Read More Success Stories</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
