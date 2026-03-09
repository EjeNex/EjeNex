import React from 'react';
import BloodBag from '../assets/bloodBag.png';
import bulletPoint from '../assets/bulletPoint.png';
import Corona from '../assets/Corona.png';
import ImageFrame from '../assets/ImageFrame.png';

const points = [
  {
    title: 'Why we exist',
    body: "Blood shortages cost lives—not because donors don't exist, but because systems react too late. EjeNex was created to help health systems move from emergency response to early, informed action.",
  },
  {
    title: 'What We Do',
    body: 'We use predictive intelligence to analyze donation patterns, hospital demand, and public health trends—forecasting blood shortages weeks in advance and giving decision-makers time to act.',
  },
  {
    title: 'How We Empower Donors',
    body: 'We believe donors are heroes. Through recognition, rewards, and long-term protection, EjeNex transforms one-time donors into trusted, lifelong contributors—building reliability and confidence in the blood supply system.',
  },
];

const About = () => {
  return (
    <section className="w-full py-16 lg:py-24 relative overflow-hidden">

      <div>
          {/* Label */}
          <p className="px-6 md:px-12 text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
              About Us
          </p>

          {/* Heading */}
          <h2 className="w-full px-6 md:px-12 text-2xl lg:text-4xl font-light text-gray-900 leading-snug mb-10">
              From goodwill to impact — powered by prediction.
          </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Corona / network icon — top right */}
          <img
            src={Corona}
            alt=""
            className="absolute top-11 right-4 lg:top-20 lg:right-24 w-16 lg:w-20 z-10"
          />

        {/* LEFT — Text */}
        <div className="flex-1">
          {/* Bullet points */}
          <div className="flex flex-col gap-8">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4 items-start pr-6">
                {/* Red bullet */}
                <img
                  src={bulletPoint}
                  alt=""
                  className="w-10 mt-1 shrink-0"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Image with frame */}
        <div className="md:px-12 lg:px-20 shrink-0 w-full lg:w-[45%] relative lg:flex justify-center items-start hidden">

          {/* Image + decorative frame wrapper */}
          <div className="md:w-[300px] lg:w-[400px] mt-10">
            {/* Frame overlay */}
            <img
              src={ImageFrame}
              alt=""
              className="absolute top-7.5 left-18 inset-0 w-[90%] h-[95%] object-fill z-10 pointer-events-none"
            />
            {/* Blood bag photo */}
            <img
              src={BloodBag}
              alt="Blood bag"
              className="w-[70%] md:h-[78%] lg:h-[90%] object-cover rounded"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;