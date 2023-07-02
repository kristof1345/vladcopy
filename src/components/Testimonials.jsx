import React from "react";
import testimonial1 from "./../../public/testimonial1.jpg";
import testimonial2 from "./../../public/test.jpg";

const Testimonials = () => {
  return (
    <div className="pb-32 flex flex-col items-center gap-20 relative">
      <div className="absolute blue_gradient w-96 h-96 -left-48 -top-52 -z-10"></div>
      <h1 className="text-center text-zinc-50 text-5xl">Testimonials</h1>
      <div className="flex flex-col s:flex-row gap-8">
        <div>
          <img
            src={testimonial1}
            alt="testimonial 1"
            className="rounded shadow"
          />
        </div>
        <div>
          <img
            src={testimonial2}
            alt="testimonial 2"
            className="rounded shadow"
          />
        </div>
      </div>
      <a
        href="https://calendly.com/vladgulyashki/copywriting-success-consultation?month=2023-07"
        className="px-8 py-4 text-2xl font-medium rounded-full btn shadow"
        target="_blank"
      >
        Grow NOW
      </a>
    </div>
  );
};

export default Testimonials;
