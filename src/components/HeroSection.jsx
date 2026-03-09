import React from 'react';
import roundDecor from '../assets/roundDecor.png';
import heartRate from '../assets/heart-rate.png';
import roundFrame from '../assets/roundFrame.png';
import mobileRoundFrame from '../assets/mobileRoundFrame.png';

function HeroSection() {
  return (
    <section className="relative w-full mb-10 bg-gray-50 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary-100 to-white">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      { /* Content Container */}
      <div className="relative max-w-7xl mx-auto pl-5 pr-5 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center w-full">
          
          {/* Left Content */}
          <div className="lg:hidden flex justify-baseline mb-5 w-full lg:w-[50%]">
            <img src={roundDecor} alt="Heart rate decoration" />
          </div>

          <div className="m-auto lg:ml-5">

            <h1 className="text-center lg:text-left text-4xl lg:text-5xl lg:font-light leading-tight">
                Where One Donation,  
                <br className="hidden lg:block" />

                Becomes a{" "}
                <span className="text-primary-100 font-semibold">
                Lifeline
                </span>
                <br className="block lg:hidden" />

                <img src={heartRate} alt="Heart rate indicator" className="inline-block ml-2 w-24 lg:w-28 h-18 lg:h-24" />
            </h1>
            

            
            <p className="text-gray-600 text-lg max-w-md text-center lg:text-left">
              EjeNex predicts blood shortages before they happen
              and mobilizes donors when their contribution matters most.
            </p>

            <div className="flex flex-col lg:flex-row gap-4 pt-4 px-4 lg:px-0">
              <button className="bg-primary-100 text-white lg:px-10 py-3 rounded hover:bg-primary-200 transition-colors font-medium">
                Join the waitlist
              </button>
              <button className="border-2 border-primary-100 text-primary-100 px-8 py-3 rounded hover:bg-primary-100 hover:text-white transition-colors font-medium">
                Book a demo
              </button>
            </div>
          </div>

          {/* Desktop Rounded Image Frame */}
          <div>
            <img src={roundFrame} alt="Rounded decorative frame" className="hidden lg:block absolute -right-34 top-[4%]" width={540}/>
          </div>

          {/* Mobile Rounded Image Frame */}
          <div className="lg:hidden">
            <img src={mobileRoundFrame} alt="Rounded decorative frame" className="absolute bottom-0 -left-10" width={200}/>
          </div>
          {/* Right Image with Circular Border */}
          <div className="hidden absolute right-[15%] top-[11%] lg:flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Circle Border */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  className="w-100 h-100 lg:w-125 lg:h-125" 
                  viewBox="0 0 500 500"
                >
                  <circle
                    cx="250"
                    cy="250"
                    r="240"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="3"
                    strokeDasharray="5 15"
                    className="animate-[spin_30s_linear_infinite]"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle cx="250" cy="80" r="8" fill="#dc2626" />
                  <circle cx="250" cy="420" r="8" fill="#dc2626" />
                </svg>
              </div>

              {/* Image */}
              <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80"
                  alt="Blood donation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;