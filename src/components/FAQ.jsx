import React from "react";

const FAQ = () => {
  return (
    <div className="pb-32 flex flex-col items-center relative">
      <h1 className="text-center font-medium text-zinc-50 text-5xl pb-16">
        FAQ
      </h1>
      <div className="max-w-3xl">
        <h2 className="text-zinc-50 text-3xl pb-2 font-semibold">
          What services do you offer?
        </h2>
        <p className="text-zinc-300 text-2xl pb-12">
          I offer a range of copywriting services, including website content,
          blog posts, product descriptions, social media posts, newsletters,
          press releases, and more.
        </p>
        <h2 className="text-zinc-50 text-3xl pb-2 font-semibold">
          Who is your typical client?
        </h2>
        <p className="text-zinc-300 text-2xl pb-12">
          I work with a wide variety of clients, from small businesses and
          startups to larger corporations. Regardless of size, I aim to help
          businesses communicate more effectively with their audiences.
        </p>
        <h2 className="text-zinc-50 text-3xl pb-2 font-semibold">
          What industries do you specialize in?
        </h2>
        <p className="text-zinc-300 text-2xl pb-12">
          I have experience writing for many industries, and I take pride in my
          ability to research and adapt to new ones. However, if you'd like to
          know about a specific industry, feel free to ask!
        </p>
        <h2 className="text-zinc-50 text-3xl pb-2 font-semibold">
          How do you charge for your services?
        </h2>
        <p className="text-zinc-300 text-2xl pb-12">
          My pricing is project-based, which means I quote a fee based on the
          size and scope of the project. I also consider the level of expertise
          required and the timeline for delivery.
        </p>
        <h2 className="text-zinc-50 text-3xl pb-2 font-semibold">
          Can you write in different styles or tones?
        </h2>
        <p className="text-zinc-300 text-2xl pb-12">
          Absolutely! I pride myself on being a versatile writer who can adapt
          to your brand's specific voice and style.
        </p>
        <h2 className="text-zinc-50 text-3xl pb-2 font-semibold">
          How do you ensure the copy aligns with our brand?
        </h2>
        <p className="text-zinc-300 text-2xl pb-12">
          I take the time to understand your brand, your values, and your
          audience before I start writing. This ensures that every piece of
          content I produce is a reflection of your brand's identity and
          resonates with your target audience.
        </p>
        <h2 className="text-zinc-50 text-3xl pb-2 font-semibold">
          How do revisions work?
        </h2>
        <p className="text-zinc-300 text-2xl pb-12">
          Each project quote includes a set number of revision rounds. My goal
          is to make sure you're completely satisfied with the final product.
        </p>
      </div>
      <div className="absolute blue_gradient w-96 h-96 -right-48 top-0 -z-10"></div>
    </div>
  );
};

export default FAQ;
