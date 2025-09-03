import Blog from '../components/home/blog';
import Clients from '../components/home/clients';
import Hero from '../components/home/hero';
import Projects from '../components/home/projects';
import Services from '../components/home/services';
import Team from '../components/home/team';
import TechStack from '../components/home/tech-stack';
import Testimonial from '../components/home/testimonial';
import WhatWeDo from '../components/home/what-we-do';
import WhyUs from '../components/home/why-us';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Clients />
      <WhatWeDo />
      <TechStack />
      <Projects />
      <Services />
      <WhyUs />
      <Team />
      <Testimonial />
      <Blog />
    </main>
  );
}
