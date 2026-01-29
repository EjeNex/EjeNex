import React from 'react'
import logo from '../assets/ejenex_logo.png'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="lg:hidden w-full bg-primary-100 px-5 py-3 flex justify-between items-center text-primary-50">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="ejenex_logo" className="bg-secondary-100 rounded-sm" width={50} />
          <h4 className="font-semibold text-white">EjeNex</h4>
        </a>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={26} className='text-white' /> : <Menu className="text-white" size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
        } bg-secondary-100 text-primary-50`}
      >
        <div className="flex flex-col gap-4 px-5 pb-5 text-sm font-semibold py-3">
          <a href="#">About us</a>
          <a href="#">Features</a>
          <a href="#">How it works</a>
          <a href="#">Contact us</a>
          <a
            href="#"
            className="bg-primary-100 text-white rounded-sm py-2 text-center hover:bg-primary-200"
          >
            Join Waitlist
          </a>
        </div>
      </div>

      {/* DESKTOP HEADER (YOUR ORIGINAL) */}
      <div className="hidden lg:flex w-full h-10 bg-secondary-100 font-semibold py-8 px-10 justify-between items-center text-sm font-sans text-primary-50">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="ejenex_logo" width={60} />
          <h4>EjeNex</h4>
        </a>

        <div className="space-x-5">
          <a href="#">About us</a>
          <a href="#">Features</a>
          <a href="#">How it works</a>
          <a href="#">Contact us</a>
          <a
            href="#"
            className="bg-primary-100 rounded-sm text-white shadow-md py-2 px-4 hover:bg-primary-200"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
