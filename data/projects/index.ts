import client3 from '@/public/images/clients/client-10.svg';
import client4 from '@/public/images/clients/client-11.svg';
import client1 from '@/public/images/clients/client-8.svg';
import client2 from '@/public/images/clients/client-9.svg';
import project1 from '@/public/images/projects/project-1.jpg';
import project2 from '@/public/images/projects/project-2.jpg';
import project3 from '@/public/images/projects/project-3.jpg';
import project4 from '@/public/images/projects/project-4.jpg';

const projects = [
  {
    id: 1,
    client: client2,
    thumbnail: project1,
    name: 'Renault',
    features: [
      {
        id: 1,
        title: 'Needed faster development for next-gen vehicle platforms',
      },
      {
        id: 2,
        title: 'BTS optimized embedded systems and streamlined workflows',
      },
      {
        id: 3,
        title: 'Accelerated time-to-market for innovative vehicles.',
      },
    ],
  },
  {
    id: 2,
    client: client1,
    thumbnail: project2,
    name: 'Samsung',
    features: [
      {
        id: 1,
        title: 'Sought a seamless connected home ecosystem',
      },
      {
        id: 2,
        title: 'BTS delivered the SmartThings IoT platform',
      },
      {
        id: 3,
        title: 'Consumers enjoy smooth, integrated smart home experiences.',
      },
    ],
  },
  {
    id: 3,
    client: client3,
    thumbnail: project3,
    name: 'Axeptio',
    features: [
      {
        id: 1,
        title: 'Needed stronger QA for compliance software',
      },
      {
        id: 2,
        title: 'BTS improved coverage and stability',
      },
      {
        id: 3,
        title: 'Millions of users now trust the platform for cookie compliance.',
      },
    ],
  },
  {
    id: 4,
    client: client4,
    thumbnail: project4,
    name: 'Cartier',
    features: [
      {
        id: 1,
        title: 'Wanted to advance luxury retail engagement',
      },
      {
        id: 2,
        title: 'BTS developed cutting-edge 3D visualization solutions',
      },
      {
        id: 3,
        title: 'Elevated customer experience and brand perception.',
      },
    ],
  },
];

export { projects };
