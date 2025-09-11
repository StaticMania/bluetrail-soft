import Image from 'next/image';
import Link from 'next/link';
import { teams } from '../../data/team';
import { ArrowRightIcon } from '../shared/Icons';

const Team = () => {
  return (
    <section className="pb-[112px] 2xl:pt-[176px] pt-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-x-8 gap-y-8 mb-16">
          {teams.map((team) => (
            <Link href="#" key={team.id} className="xl:col-span-3 lg:col-span-6 col-span-6 block group">
              <div className="space-y-9">
                <figure className="rounded-full overflow-hidden 2xl:size-[336px] size-[280px] mx-auto relative">
                  <div className="absolute h-full w-full top-0 left-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <button className="size-[74px] rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 overflow-hidden">
                      <ArrowRightIcon />
                    </button>
                  </div>
                  <Image
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  />
                </figure>
                <div className="text-center">
                  <h3 className="text-secondary text-heading-3 font-medium">{team.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/" className="btn btn-primary">
            <span>Let’s Talk About Your Goals</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
