import Image from 'next/image';
import { clients } from '../../data/clients';

const Clients = () => {
  return (
    <section id="clients" className="py-14">
      <div className="main-container">
        <div className="flex items-center justify-center gap-x-14">
          {clients.map((client) => (
            <article key={client.id}>
              <Image src={client.logo} alt="client logo" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
