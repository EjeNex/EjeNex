import React from 'react';

const JoinUs = () => {
  return (
    <section className="w-full bg-primary-100 px-6 md:px-12 lg:px-20 py-10 lg:py-20">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-10">

        {/* Text */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h2 className="text-white text-2xl lg:text-2xl font-bold">
            Join this awesome community!
          </h2>
          <p className="text-white font-light text-md lg:text-base">
            Predicting shortages. Empowering donors. Saving lives.
          </p>
        </div>

        {/* Button */}
        <button className="text-primary-100 hover:bg-primary-200 bg-white hover:text-white transition-colors font-semibold px-10 py-3 rounded text-sm flex-shrink-0">
          Join Us
        </button>

      </div>
    </section>
  );
};

export default JoinUs;