import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '../../data/blog';
import { StarIcon } from '../shared/Icons';

const Blog = () => {
  return (
    <section className="pt-[112px] pb-[176px]">
      <div className="main-container">
        <div className="space-y-4 mb-10">
          <div className="flex items-center justify-center gap-x-2.5 py-2 px-6">
            <StarIcon />
            <p className="uppercase font-interTight text-sm font-normal leading-[21px] text-[#040509]">Our Blog</p>
          </div>
          <div className="text-center">
            <h2 className="text-[72px] font-semibold text-secondary leading-[86.4px] tracking-[-1.44px] font-figtree">
              Our Insights
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="xl:col-span-4 lg:col-span-6 col-span-12 bg-white p-2 rounded-3xl group hover:translate-y-[-10px] transition-all duration-500">
              <Link href="#">
                <figure className="overflow-hidden rounded-2xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  />
                </figure>
              </Link>
              <div className="pt-5 pb-8 px-5 space-y-3">
                <Link href="#" className="block">
                  <h3 className="text-black font-medium text-[28px] leading-[39.2px] tracking-[-0.56px]">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-black/50 font-normal text-xl leading-[30px]">{blog.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <Link href="#" className="btn btn-primary">
            <span>Read More Blogs</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
