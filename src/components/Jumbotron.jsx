import React from "react";

const Jumbotron = () => {
  return (
    <div className="s:pt-36 pb-32 pt-28">
      {/* <div className="absolute -left-1/4 -top-1/2 w-[500px] h-[500px] blue_gradient"></div> */}
      <div className="flex justify-center">
        <h1 className="text-zinc-50 h1 uppercase s:text-[6.5vw] text-[10vw] text-center leading-tight font-bold tracking-wide max-w-6xl">
          Want to grow your email list?
        </h1>
      </div>
      <div className="text-center text-zinc-300 s:pt-28 pt-20">
        <h2 className="s:text-3xl text-2xl normal">
          If you arrived at this website, then you must be interested in growing
          your email list
        </h2>
        <p className="s:text-2xl text-xl normal-case pt-9">
          According to Mailchimp, the average open rate of email's is around
          21.8%
        </p>
        <p className="s:text-2xl text-xl pt-9 pb-20 font-semibold">
          WANT TO LEVEL UP?
        </p>
        <a
          href="https://calendly.com/vladgulyashki/copywriting-success-consultation?month=2023-07"
          target="_blank"
          className="px-8 py-4 text-2xl font-medium rounded-full btn shadow"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
