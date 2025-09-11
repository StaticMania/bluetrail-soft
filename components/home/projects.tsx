import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../data/projects';
import { ArrowRightIcon, StarIcon } from '../shared/Icons';

const Projects = () => {
  return (
    <section className="py-[176px]">
      <div className="main-container">
        <div className="space-y-5 mb-24">
          <div className="flex items-center justify-center gap-x-2.5 py-2 px-6">
            <StarIcon />
            <p className="uppercase font-interTight text-sm font-normal leading-[21px] text-foreground">
              Proven outcomes
            </p>
          </div>
          <div className="text-center max-w-[750px] w-full mx-auto">
            <h2 className="text-heading-2 font-semibold text-secondary font-figtree">
              We turn roadblocks into breakthroughs
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-8">
          {projects.map((project) => (
            <article key={project.id} className="col-span-12">
              <div className="relative max-h-[640px] h-full rounded-3xl overflow-hidden group">
                <figure>
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  />
                </figure>
                <div className="absolute bottom-4 inset-x-4 w-[98%] rounded-2xl overflow-hidden backdrop-blur-[17px] bg-secondary/50 py-8 px-5 z-10">
                  <div className="space-y-6">
                    <figure className="max-w-[160px] w-full">
                      <Image src={project.client} alt={project.name} className="w-full h-full object-cover " />
                    </figure>
                    <div className="grid grid-cols-12 gap-x-4 divide-x divide-white/10">
                      {project.features.map((feature, index) => (
                        <div key={feature.id} className="xl:col-span-4 lg:col-span-6 col-span-12 ">
                          <p
                            className={`text-2xl font-normal leading-[33.6px] max-w-[390px] w-full ${index === 0 ? 'text-white/80' : 'text-white/50'}`}>
                            {feature.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute h-full w-full top-0 left-0 bg-black/70 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
                  <Link
                    href="#"
                    className="size-[74px] rounded-full backdrop-blur-[6px] bg-[#0d0d12] flex items-center justify-center absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 z-10 overflow-hidden">
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
