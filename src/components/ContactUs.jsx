import React from 'react';
import EmailIcon from '../assets/EmailIcon.png';
import PhoneIcon from '../assets/PhoneIcon.png';
import LocationIcon from '../assets/LocationIcon.png';
import PhoneWatermark from '../assets/PhoneWatermark.png';

const ContactUs = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-12 py-14 lg:py-20 overflow-hidden">
      <div className="max-w-5xl flex flex-col lg:flex-row gap-10 lg:gap-20 m-auto">

        {/* LEFT — Form */}
        <div className="flex-1">
          {/* Header */}
          <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-1">
            Contact Us
          </p>
          <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8">
            Join the Lifeline Now
          </h2>

          {/* Form */}
          <div className="flex flex-col gap-5 bg-white shadow-sm p-8">

            {/* First + Last name row */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-sm text-gray-700">First Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-red-400"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-sm text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-red-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-red-400"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Subject</label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-red-400"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Message</label>
              <textarea
                rows={5}
                className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-red-400 resize-none"
              />
            </div>

            {/* Send button — right aligned */}
            <div className="flex justify-end">
              <button className="bg-red-600 hover:bg-red-700 transition-colors text-white text-sm font-medium px-6 py-2 rounded flex items-center gap-2">
                {/* Paper plane icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Send
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT — Contact info + watermark */}
        <div className="relative flex flex-col justify-center lg:justify-start lg:items-end gap-7 shrink-0 lg:py-23 lg:w-[55%]">

          {/* Phone watermark — behind everything */}
          <img
            src={PhoneWatermark}
            alt=""
            className="absolute top-[3%] -right-15 lg:top-[77%] -lg:right-[9%] w-60 lg:w-64 opacity-70 pointer-events-none select-none"
          />

          {/* Email */}
          <div className="flex flex-row lg:flex-row-reverse items-center lg:justify-end gap-3 lg:gap-2 relative z-10">
            <div className="w-18 h-18 bg-secondary-50 rounded-full flex items-center justify-center shrink-0">
              <img src={EmailIcon} alt="Email" className="w-15 h-15 object-contain" />
            </div>
            <div className="flex flex-col lg:items-end ">
              <p className="text-md font-bold text-gray-900">Email</p>
              <p className="text-md text-gray-500">info@ejenex.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-row lg:flex-row-reverse items-center lg:justify-end gap-3 lg:gap-2 relative z-10">
            <div className="w-18 h-18 bg-secondary-50 rounded-full flex items-center justify-center shrink-0">
              <img src={PhoneIcon} alt="Phone" className="w-15 h-15 object-contain" />
            </div>
            <div className="flex flex-col lg:items-end">
              <p className="text-md font-bold text-gray-900">Phone</p>
              <p className="text-md text-gray-500">+234 1234567890</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-row lg:flex-row-reverse items-center lg:justify-end gap-3 lg:gap-2 relative z-10">
            <div className="w-18 h-18 bg-secondary-50 rounded-full flex items-center justify-center shrink-0">
              <img src={LocationIcon} alt="Location" className="w-15 h-15 object-contain" />
            </div>
            <div className="flex flex-col lg:items-end">
              <p className="text-md font-bold text-gray-900">Location</p>
              <p className="text-md text-gray-500">Kigali, Rwanda</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;