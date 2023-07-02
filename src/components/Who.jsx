import React from "react";
import vlad from "./../../public/vlad.jpg";

const Who = () => {
  return (
    <div className="pb-32 flex flex-col items-center gap-20">
      <h1 className="text-center font-medium text-zinc-50 text-5xl">
        My name is Vladimir Gulyashki
      </h1>
      <div className="flex gap-8 flex-col s:flex-row">
        <div className="flex justify-center">
          <img src={vlad} alt="vlad" className="rounded shadow" />
        </div>
        <div className="text-zinc-300 text-2xl max-w-xl">
          <p className="pb-14">
            I'm a copywriter, which means I speak the language of persuasion.
          </p>
          <p className="pb-14">
            I can, and I've ALREADY MADE people increase their sales and
            engagement ratio thus generating more CASH FLOW.
          </p>
          <p>
            If you are interested in Copywriting, then I suggest you join my
            Newsletter
          </p>
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://hustlers-hub.beehiiv.com/subscribe"
          target="_blank"
          className="btn px-8 py-4 text-2xl font-medium rounded-full shadow"
        >
          Hustler's Hub
        </a>
        <p className="pt-14 text-zinc-300 text-2xl">
          P.S.: There is a gift for you inside
        </p>
      </div>
    </div>
  );
};

export default Who;
