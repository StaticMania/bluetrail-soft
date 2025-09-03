import { services2 } from '../../data/services';
import { StarIcon } from '../shared/Icons';

const WhatWeDo = () => {
  return (
    <section className="py-[176px]">
      <div className="main-container">
        <div className="space-y-5 mb-24">
          <div className="flex items-center justify-center gap-x-2.5 py-2 px-6">
            <StarIcon />
            <p className="uppercase font-interTight text-sm font-normal leading-[21px] text-[#040509]">What we do</p>
          </div>
          <div className="text-center">
            <h2 className="text-[72px] font-semibold text-secondary leading-[86.4px] tracking-[-1.44px]">
              Engineered to solve technical challenges. Committed to deliver excellence.
            </h2>
            <p className="text-secondary text-2xl font-normal leading-[33.6px] mb-8 mt-3">
              We grow our people, innovations, and relationships. The result shows in our engineering.
            </p>
            <p className="mx-auto max-w-[1186px] w-full text-center text-secondary/50 text-xl font-normal leading-[30px]">
              Whether you&apos;re launching a new product or modernizing an existing system, we offer full-cycle
              services tailored to your needs; from product discovery and planning to seamless delivery and ongoing
              optimization.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          {services2.map((service, index) => (
            <div
              key={service.id}
              className={`xl:col-span-4 lg:col-span-6 col-span-12 cursor-pointer hover:scale-[101%] transition-all duration-500 ${index === 3 && 'xl:col-start-3'}`}>
              <div className="py-14 px-[42px] min-h-[290px] rounded-[20px] bg-white space-y-8 flex flex-col justify-center items-center text-center">
                <figure className="size-[72px] rounded-full bg-primary flex items-center justify-center p-5">
                  <service.icon />
                </figure>
                <h3 className="text-secondary text-[28px] font-medium leading-[39.2px] tracking-[-0.56px] max-w-[275px] w-full mx-auto">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
