import Link from 'next/link';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section className="pb-[176px]">
      <div className="main-container">
        <div className="flex items-end justify-between mb-[74px]">
          <h2 className="text-[72px] font-semibold text-secondary leading-[86.4px] tracking-[-1.44px] max-w-[327px] w-full">
            Industries we serve
          </h2>
          <Link href="#" className="btn btn-black">
            <span>View All Stories</span>
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-2">
          {services.map((service, index) => (
            <Link
              href={`#`}
              key={service.id}
              className={`block cursor-pointer hover:scale-[101%] transition-all duration-500 ${index < 4 ? 'xl:col-span-3 lg:col-span-6 col-span-12' : 'xl:col-span-4 lg:col-span-6 col-span-12'}`}>
              <article>
                <div className="py-14 px-[42px] min-h-[349px] rounded-[20px] bg-white flex flex-col justify-between">
                  <figure className="size-16 rounded-full bg-primary flex items-center justify-center p-2.5">
                    <service.icon />
                  </figure>
                  <div>
                    <h3 className="text-[28px] font-medium leading-[39.2px] tracking-[-0.56px] text-secondary">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
