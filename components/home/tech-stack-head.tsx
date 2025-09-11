import Link from 'next/link';
import { StarWhiteIcon } from '../shared/Icons';

const TechStackHead = () => {
  return (
    <div className="flex items-end justify-between">
      <div>
        <div className="flex items-center gap-x-2.5 py-2 px-6">
          <StarWhiteIcon />
          <p className="uppercase font-interTight text-sm font-normal leading-[21px] text-white">Stacks</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-heading-2 font-semibold text-white font-figtree">Tech Stack</h2>
          <p className="text-2xl font-normal leading-[33.6px] text-white/50 max-w-[630px] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
          </p>
        </div>
      </div>
      <div className="block">
        <Link href="#" className="btn btn-primary">
          <span>Explore Our Capabilities</span>
        </Link>
      </div>
    </div>
  );
};

export default TechStackHead;
