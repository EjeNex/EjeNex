import React from 'react';
import settings from '../assets/Settings.png';
import BlackBeanDkArrow from '../assets/BlackBeanDkArrow.png';
import BlackBeanMbArrow from '../assets/BlackBeanMbArrow.png';
import RedDkArrow from '../assets/RedDkArrow.png';
import RedMbArrow from '../assets/RedMbArrow.png';

const steps = [
  {
    number: 1,
    title: 'Predict the Need',
    body: 'EjeNex continuously analyzes donation patterns, hospital demand, and public health signals to forecast blood shortages before they happen.',
    circleBg: 'bg-secondary-50 border border-yellow-200',
    numberColor: 'text-gray-800',
  },
  {
    number: 2,
    title: 'Mobilize the Right Donors',
    body: 'When a risk is detected, eligible donors are intelligently matched and notified based on blood type, location, and urgency—ensuring fast, targeted response.',
    circleBg: 'bg-primary-200',
    numberColor: 'text-white',
  },
  {
    number: 3,
    title: 'Deliver Impact & Recognition',
    body: 'Donations are verified, hospitals receive the blood they need, and donors earn LifeCredits, recognition, and transparent impact updates—closing the loop.',
    circleBg: 'bg-primary-100',
    numberColor: 'text-white',
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-12 py-10 lg:py-15 overflow-hidden">
      <div className="max-w-5xl">

        {/* Header */}
        <div className="mb-10">
          <img src={settings} alt="Settings" className="w-16 h-16 mb-4 opacity-20" />
          <p className="text-primary-100 text-sm font-bold tracking-widest uppercase mb-2">
            How It Works
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-snug">
            <span className="lg:hidden">
              The Right Donor.<br />The Right Moment.<br />The Right Outcome.
            </span>
            <span className="hidden lg:inline">
              The Right Donor. The Right Moment. The Right Outcome.
            </span>
          </h2>
        </div>

        {/* ── MOBILE layout ── */}
        <div className="flex flex-col relative lg:hidden space-y-15">

          {/* Step 1 */}
          <div className="flex flex-row items-start gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${steps[0].circleBg}`}>
              <span className={`text-base font-bold ${steps[0].numberColor}`}>1</span>
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <h3 className="text-base font-bold text-primary-200">{steps[0].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{steps[0].body}</p>
            </div>
          </div>

          {/* Arrow 1→2: black, curves right, arrow points left toward step 2 circle */}
          <div className="flex justify-end pr-20 -my-1">
            <img src={BlackBeanMbArrow} alt="Black Bean Arrow" className="absolute top-[8%] left-2 w-22 object-contain" />
          </div>

          {/* Step 2 — indented */}
          <div className="flex flex-col items-start gap-4 ml-10 text-center">
            <div className={`w-10 m-auto h-10 rounded-full flex items-center justify-center shrink-0 ${steps[1].circleBg}`}>
              <span className={`text-base font-bold ${steps[1].numberColor}`}>2</span>
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <h3 className="text-base font-bold text-primary-200">{steps[1].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{steps[1].body}</p>
            </div>
          </div>

          {/* Arrow 2→3: red, curves left, arrow points right toward step 3 circle */}
          <div className="flex justify-start pl-14 mt-4">
            <img src={RedMbArrow} alt="" className="absolute w-28 top-[57%] right-[33%] object-contain" />
          </div>

          {/* Step 3 */}
          <div className="flex flex-row items-start gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${steps[2].circleBg}`}>
              <span className={`text-base font-bold ${steps[2].numberColor}`}>3</span>
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <h3 className="text-base font-bold text-primary-200">{steps[2].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{steps[2].body}</p>
            </div>
          </div>

        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden lg:block relative">

          {/* Step 1 — left */}
          <div className="flex flex-row items-start gap-6 w-[65%] relative">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${steps[0].circleBg}`}>
              <span className={`text-xl font-bold ${steps[0].numberColor}`}>1</span>
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <h3 className="text-lg font-bold text-gray-900">{steps[0].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{steps[0].body}</p>
            </div>
          </div>

          {/* Arrow 1→2: black, sweeps down-right */}
          <div className="flex justify-start pl-20 mt-15">
            <img src={BlackBeanDkArrow} alt="" className="w-43 absolute top-[17%] left-7 object-contain" />
          </div>

          {/* Step 2 — center */}
          <div className="flex flex-row items-start gap-6 ml-[20%] w-[70%]">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${steps[1].circleBg}`}>
              <span className={`text-xl font-bold ${steps[1].numberColor}`}>2</span>
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <h3 className="text-lg font-bold text-gray-900">{steps[1].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{steps[1].body}</p>
            </div>
          </div>

          {/* Arrow 2→3: red, sweeps down-right */}
          <div className="flex justify-start pl-48 mt-15">
            <img src={RedDkArrow} alt="" className="w-37 absolute top-[58%] left-[23%] object-contain" />
          </div>

          {/* Step 3 — right */}
          <div className="flex flex-row items-start gap-6 ml-[38%]">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${steps[2].circleBg}`}>
              <span className={`text-xl font-bold ${steps[2].numberColor}`}>3</span>
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <h3 className="text-lg font-bold text-gray-900">{steps[2].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{steps[2].body}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;