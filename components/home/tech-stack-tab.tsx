'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { techStack } from '../../data/tech-stack';
import { ArrowDownIcon } from '../shared/Icons';

const techCategories = [
  {
    id: 1,
    title: 'All Stacks',
  },
  {
    id: 2,
    title: 'Frontend',
  },
  {
    id: 3,
    title: 'Backend',
  },
  {
    id: 4,
    title: 'Mobile',
  },
  {
    id: 5,
    title: 'AR & Visualization',
  },
  {
    id: 6,
    title: 'QA & Automation',
  },
  {
    id: 7,
    title: 'DevOps & Tools',
  },
];

const TechStackTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const stackItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const getFilteredTechStacks = () => {
    if (activeTab === 1) {
      return techStack;
    } else {
      const selectedCategory = techCategories.find((cat) => cat.id === activeTab);
      if (selectedCategory) {
        return techStack.filter((stack) => stack.stackName === selectedCategory.title);
      }
      return [];
    }
  };

  const filteredTechStacks = getFilteredTechStacks();

  // Initialize refs arrays
  const setStackItemRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      stackItemRefs.current[index] = el;
    }
  };

  const setTabButtonRef = (el: HTMLButtonElement | null, index: number) => {
    if (el) {
      tabButtonRefs.current[index] = el;
    }
  };

  // GSAP animation for tab switching
  useGSAP(() => {
    if (contentRef.current) {
      // Animate content fade out and in
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
      );

      // Animate individual tech stack items using refs
      const validStackItems = stackItemRefs.current.filter(Boolean);
      if (validStackItems.length > 0) {
        gsap.fromTo(
          validStackItems,
          {
            opacity: 0,
            scale: 0.9,
            y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            delay: 0.2,
          },
        );
      }
    }
  }, [activeTab, filteredTechStacks]);

  // GSAP animation for tab buttons
  useGSAP(() => {
    const validTabButtons = tabButtonRefs.current.filter(Boolean);
    if (validTabButtons.length > 0) {
      gsap.fromTo(
        validTabButtons,
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        },
      );
    }
  }, []);

  const handleTabChange = (tabId: number) => {
    if (contentRef.current) {
      // Animate out current content
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setActiveTab(tabId);
        },
      });
    } else {
      setActiveTab(tabId);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-x-14">
      <div className="col-span-3">
        <div>
          <ul className="border-l border-l-[#282D36] py-4">
            {techCategories.map((stack, index) => (
              <li key={stack.id} className="relative">
                <button
                  disabled={activeTab === stack.id}
                  ref={(el) => setTabButtonRef(el, index)}
                  data-active={activeTab === stack.id}
                  className="px-6 py-2.5 text-white/50 hover:text-white data-[active=true]:text-white -ml-px border-l border-l-transparent data-[active=true]:border-l-primary cursor-pointer text-2xl font-normal leading-[33.6px] transition-colors duration-300"
                  onClick={() => handleTabChange(stack.id)}>
                  {stack.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-9">
        <div ref={contentRef} className="space-y-14">
          {filteredTechStacks.map((stack, index) => (
            <div key={stack.id} ref={(el) => setStackItemRef(el, index)} className="space-y-3">
              <div className="flex items-center gap-1.5">
                <p className="text-white/50 text-2xl font-normal leading-[33.6px]">{stack.stackName}</p>
                <ArrowDownIcon />
              </div>
              <div className="flex items-center flex-wrap gap-6">
                {stack.stacks.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center gap-x-3 min-w-[234px] max-w-max border border-white/10 bg-black/10 backdrop-blur-[25px] rounded-2xl px-2 py-2.5">
                    <figure className="size-14 shrink-0 rounded-full overflow-hidden p-2.5 bg-white flex items-center justify-center">
                      <Image src={tech.icon} alt={tech.name} className="w-full h-full " />
                    </figure>
                    <div>
                      <p className="text-white/50 text-xl font-normal leading-[30px]">{tech.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackTab;
