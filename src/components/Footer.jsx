import React from "react";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="pb-16 text-center relative">
      <div className="absolute blue_gradient w-96 h-96 -left-48 -top-52 -z-10"></div>
      <div className="pb-24">
        <h1 className="text-zinc-50 text-5xl font-semibold pb-5">
          Grow your Email List
        </h1>
        <h1 className="text-zinc-50 text-5xl font-semibold pb-5">
          Grow your Brand
        </h1>
        <h1 className="text-zinc-50 text-5xl font-semibold">
          Grow your Pocket
        </h1>
      </div>
      <a
        href="https://calendly.com/vladgulyashki/copywriting-success-consultation?month=2023-07"
        className="px-8 py-4 text-2xl font-medium rounded-full btn shadow"
        target="_blank"
      >
        Get Started
      </a>
      <div className="flex flex-col justify-center items-center pt-24">
        <a
          href="https://twitter.com/GrowMindsetHub"
          target="_blank"
          className="text-zinc-400 text-4xl hover:text-zinc-300 hover:scale-105"
        >
          <BsTwitter />
        </a>
        <p className="pt-16 text-zinc-500">
          Made by{" "}
          <a
            href="https://twitter.com/kristf_nemeth"
            target="_blank"
            className="underline hover:text-zinc-100"
          >
            Kristof
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
