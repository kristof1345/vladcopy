import React from "react";
import client1 from "./../../public/client1.jpg";
import client2 from "./../../public/client2.jpg";
import client3 from "./../../public/client3.jpg";

const Clients = () => {
  return (
    <div className="pb-32 flex flex-col items-center gap-20 relative">
      <h1 className="text-center text-zinc-50 text-5xl">Clients</h1>
      <div className="flex flex-col s:flex-row gap-8 max-w-7xl text-center">
        <div>
          <img src={client1} alt="client 1" className="rounded shadow mb-16" />
          <a
            href="https://twitter.com/tomas_attt"
            target="_blank"
            className="px-8 py-4 text-2xl font-medium rounded-full btn shadow"
          >
            Thomas's Twitter
          </a>
        </div>
        <div>
          <img src={client2} alt="client 2" className="rounded shadow  mb-16" />
          <a
            href="https://twitter.com/ewritingmastery"
            target="_blank"
            className="px-8 py-4 text-2xl font-medium rounded-full btn shadow"
          >
            Brett's Twitter
          </a>
        </div>
        <div>
          <img src={client3} alt="client 2" className="rounded shadow  mb-16" />
          <a
            href="https://twitter.com/Andrey_Shche"
            target="_blank"
            className="px-8 py-4 text-2xl font-medium rounded-full btn shadow"
          >
            Andrey's Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clients;
