import React from 'react';
import Testimonial from '../assets/testimonial.png';
import quote from '../assets/quote.png';
import unquote from '../assets/unquote.png';

const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    name: 'Samuel Papa',
    avatar: null,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-14 lg:py-20 overflow-hidden"
    style={{ backgroundColor: 'rgba(249, 239, 201, 0.5)' }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
            Lives Touched by the Software
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="relative">

          {/* Background speech bubble watermark */}
          <img
            src={Testimonial}
            alt=""
            className="absolute -right-[30%] lg:-left-16 top-[63%] -translate-y-1/2 w-80 lg:w-72 opacity-80 pointer-events-none select-none"
          />

          {/* Quote block */}
          <div className="relative px-4 lg:px-10 py-6">

            {/* Opening quote — top left */}
            <img
              src={quote}
              alt="open quote"
              className="w-8 lg:w-8 mb-4"
            />

            {/* Quote text — centered */}
            <p className="text-center text-gray-900 text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
              {testimonials[0].text}
            </p>

            {/* Closing quote — bottom right */}
            <div className="flex justify-end mt-4">
              <img
                src={unquote}
                alt="close quote"
                className="w-8 lg:w-8"
              />
            </div>

            {/* Avatar + name — centered below */}
            <div className="flex flex-col items-center mt-6 gap-2">
              {/* Avatar placeholder circle with X */}
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <line x1="3" y1="3" x2="17" y2="17" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="17" y1="3" x2="3" y2="17" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">{testimonials[0].name}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;