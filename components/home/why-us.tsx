import gradient2 from '@/public/images/gradient/gradient-3.png';
import gradient3 from '@/public/images/gradient/gradient-4.png';
import gradient4 from '@/public/images/gradient/gradient-5.png';
import gradient1 from '@/public/images/gradient/gradient-6.png';
import Image from 'next/image';
import { StarIcon } from '../shared/Icons';

const WhyUs = () => {
  return (
    <section className="py-[112px]">
      <div className="main-container">
        <div className="space-y-5 mb-[76px]">
          <div className="flex items-center gap-x-2.5 py-2 px-6">
            <StarIcon />
            <p className="uppercase font-interTight text-sm font-normal leading-[21px] text-[#040509]">
              Why Choose BTS
            </p>
          </div>
          <div className="text-left max-w-[732px] w-full">
            <h2 className="text-[72px] font-semibold text-secondary leading-[86.4px] tracking-[-1.44px] font-figtree">
              Why clients trust us to build what matters
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          {/* Row 1 */}
          <div className="col-span-3">
            <div className="p-6 rounded-2xl bg-white space-y-6 min-h-[360px]">
              <h3 className="text-[28px] font-medium leading-[39.2px] tracking-[-0.56px] text-secondary max-w-[159px] w-full">
                Proven track record
              </h3>
              <div className="space-y-1">
                <h4 className="text-secondary text-[72px] font-semibold leading-[86.4px] tracking-[-1.44px]">10+</h4>
                <p className="text-xl font-normal leading-[30px] text-secondary/50 max-w-[247px] w-full">
                  Years delivering mission-critical projects for global brands and high-growth startups.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="relative p-6 rounded-2xl bg-white space-y-6 min-h-[360px] flex flex-col justify-between overflow-hidden z-10">
              <figure className="absolute top-[-113%] right-[-30%] h-[860px] w-[640px] z-[-1] pointer-events-none">
                <Image src={gradient1} alt="why-us" className="w-full h-full object-cover" />
              </figure>
              <h3 className="text-[28px] font-medium leading-[39.2px] tracking-[-0.56px] text-secondary max-w-[259px] w-full">
                Flexible, scalable Teams
              </h3>
              <p className="max-w-[420px] w-full text-xl font-normal leading-[30px] text-secondary/50">
                Of our clients partner with us for multiple years, trusting our committed and collaborative teams.
              </p>
            </div>
          </div>
          <div className="col-span-3 row-span-2">
            <div className="p-6 rounded-2xl bg-white space-y-6 h-full relative overflow-hidden z-10">
              <figure className="absolute top-[32%] right-[-75%] rotate-[45deg] size-[780px] z-[-1] pointer-events-none">
                <Image src={gradient2} alt="why-us" className="w-full h-full object-cover" />
              </figure>
              <div className="space-y-6">
                <h3 className="text-[28px] font-medium leading-[39.2px] tracking-[-0.56px] text-secondary max-w-[159px] w-full">
                  Deep accountability
                </h3>
                <p className="text-xl font-normal leading-[30px] text-secondary/50 max-w-[247px] w-full">
                  As a California benefit corporation, we prioritize business success and employee empowerment, ensuring
                  a disciplined, engaged workforce.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-3">
            <div className="p-6 rounded-2xl bg-white space-y-6 min-h-[341px] relative overflow-hidden z-10">
              <figure className="absolute bottom-[-67%] right-[-45%] size-[460px] -skew-5 z-[-1] pointer-events-none">
                <Image src={gradient4} alt="why-us" className="w-full h-full object-cover" />
              </figure>
              <div className="space-y-6">
                <h4 className="text-secondary text-[72px] font-semibold leading-[86.4px] tracking-[-1.44px]">90%</h4>
                <p className="text-xl font-normal leading-[30px] text-secondary/50 max-w-[247px] w-full">
                  Of our clients partner with us for multiple years, trusting our committed and collaborative teams.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="p-6 rounded-2xl bg-white space-y-6 min-h-[341px] flex flex-col justify-between">
              <h3 className="text-[28px] font-medium leading-[39.2px] tracking-[-0.56px] text-secondary max-w-[240px] w-full">
                Full product Lifecycle support
              </h3>
              <p className="text-xl font-normal leading-[30px] text-secondary/50 max-w-[247px] w-full">
                From MVP design to enterprise-scale deployment, backed by QA and DevOps experts, and post-launch
                optimization expertise.
              </p>
            </div>
          </div>
          <div className="col-span-3 row-span-2">
            <div className="p-6 rounded-2xl bg-white space-y-6 h-full relative overflow-hidden z-10">
              <figure className="absolute bottom-[-65%] right-[-90%] w-[740px] h-[810px] z-[-1] pointer-events-none">
                <Image src={gradient3} alt="why-us" className="w-full h-full object-cover" />
              </figure>
              <h3 className="text-[28px] font-medium leading-[39.2px] tracking-[-0.56px] text-secondary max-w-[250px] w-full">
                Global Expertise, Local Commitment
              </h3>
              <p className="text-xl font-normal leading-[30px] text-secondary/50 max-w-[247px] w-full">
                Nearshore and offshore talent across Latin America and Europe delivering high-quality code and seamless
                communication in English and Spanish.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="col-span-6">
            <div className="p-6 rounded-2xl bg-white space-y-6 min-h-[270px] flex flex-col justify-between">
              <h3 className="text-[28px] font-medium leading-[39.2px] tracking-[-0.56px] text-secondary max-w-[159px] w-full mb-4">
                Speed + Quality
              </h3>
              <p className="text-xl font-normal leading-[30px] text-secondary/50 max-w-[247px] w-full">
                Agile squads deliver fast releases without sacrificing reliability.
              </p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="p-6 rounded-2xl bg-white space-y-6 min-h-[270px] flex flex-col justify-between">
              <h3 className="text-[28px] font-medium leading-[39.2px] tracking-[-0.56px] text-secondary max-w-[157px] w-full">
                Direct team Access
              </h3>
              <p className="text-xl font-normal leading-[30px] text-secondary/50 max-w-[247px] w-full">
                No bureaucracy; connect directly with developers and senior experts for transparent collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
