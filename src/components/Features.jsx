import React from 'react';
import SmartBloodDemandPrediction from '../assets/SmartBloodDemandPrediction.png';
import LifeCreditDonorRecognition from '../assets/LifeCreditDonorRecognition.png';
import SmartMatchingInstantAction from '../assets/SmartMatchInstantAction.png';
import Processor from '../assets/Processor.png';
import MobileAltogether from '../assets/MobileAltogther.png';

const features = [
  {
    desktopImg: SmartBloodDemandPrediction,
    title: 'Smart Blood Demand Prediction',
    quote: '"We act before shortages happen."',
    body: 'Anticipates blood shortages early by analyzing trends and demand, allowing hospitals and donors to act before emergencies arise.',
    imageLeft: true,
  },
  {
    desktopImg: LifeCreditDonorRecognition,
    title: 'LifeCredits & Donor Recognition',
    quote: '"Every donation earns impact — and appreciation."',
    body: 'Rewards verified donations with recognition, benefits, and long-term value, making every contribution visible, appreciated, and impactful.',
    imageLeft: false,
  },
  {
    desktopImg: SmartMatchingInstantAction,
    title: 'Smart Matching & Instant Action',
    quote: '"Right donor. Right place. Right time."',
    body: 'Connects donors instantly to nearby hospitals and urgent needs based on blood type and location, removing delays and uncertainty.',
    imageLeft: true,
  },
];

const Features = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <img src={Processor} alt="Processor" className="w-14 h-14 mb-4 opacity-20" />
          <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug max-w-2xl text-left lg:text-center">
            From Prediction To Participation — Every Feature Has A Purpose.
          </h2>
        </div>

        {/* MOBILE layout — one image strip + stacked text blocks */}
        <div className="flex flex-row lg:hidden gap-4 space-y-5">
          {/* Single combined image on the left */}
          <img
            src={MobileAltogether}
            alt="Features"
            className="w-12 object-contain self-stretch shrink-0"
          />

          {/* Text blocks stacked, evenly spaced to align with image sections */}
          <div className="flex flex-col justify-between flex-1 py-1">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
                <p className="text-red-500 text-xs italic">{feature.quote}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP layout — alternating rows */}
        <div className="hidden lg:flex flex-col gap-16">
          {features.map((feature, i) => (
            <div key={i} className={`flex items-center gap-6 ${feature.imageLeft ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="flex-1 flex justify-center">
                <img
                  src={feature.desktopImg}
                  alt={feature.title}
                  className="w-full object-contain"
                />
              </div>

              <div className={`flex-1 flex flex-col gap-2 ${feature.imageLeft ? 'pl-6' : 'pr-6'}`}>
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-red-500 text-sm italic">{feature.quote}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;