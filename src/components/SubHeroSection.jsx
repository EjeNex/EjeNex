import React from 'react';
import BloodDrop from '../assets/BloodDrop.png';
import SubHeroImage from '../assets/SubHeroImage.png';
import imgBorder from '../assets/imgBorder.png';
import './SubHeroSection.css';

const SubHeroSection = () => {


  return (
    <>
        <div className='w-full px-10 py-30 relative flex lg:flex-row flex-col-reverse gap-5' 
        style={{ backgroundColor: 'rgba(249, 239, 201, 0.5)' }}>
            <div className='subhero-image-block opacity-full w-full pt-20 lg:pt-0 '>
                {/* Image border */}
                <img src={imgBorder} alt="Image Border" className='subhero-border w-[95%] lg:w-[50%] opacity-100 absolute -bottom-5 left-0 lg:top-[16%] lg:-left-50 z-20'/>
                {/* Main image */}
                <img src={SubHeroImage} alt="Sub Hero" className='subhero-image w-[180px] md:w-[220px] lg:w-[270px] absolute -bottom-10 -right-3 lg:top-[23%] lg:left-20'/>
            </div>


             {/* RIGHT — Text content */}
            <div className="flex flex-col gap-4 max-w-xl">
                {/* Blood drop icon */}
                <img src={BloodDrop} alt="Blood Drop" className="w-8 h-8" />

                {/* Heading */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
                    From Crisis Response to{' '}
                    <span className="text-red-500">Predictive Care</span>
                </h2>

                {/* Body copy */}
                <p className="text-gray-600 text-base leading-relaxed">
                    Blood shortages don't happen suddenly — they are predictable.
                    EjeNex transforms fragmented blood systems into a single
                    intelligent network that anticipates demand, motivates donors,
                    and stabilizes supply before lives are put at risk.
                </p>
            </div>

        </div>
    </>
  )
}

export default SubHeroSection
