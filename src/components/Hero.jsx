import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <h1 className='cyan_gradient from-red-500 to-purple-500 text-xl font-bold'>SumAI</h1>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/josaputra15")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Your Articles with <br className='max-md:hidden' />
        <span className='red_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with SumAI
      </h2>
    </header>
  );
};

export default Hero;