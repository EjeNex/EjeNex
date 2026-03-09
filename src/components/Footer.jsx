import React from 'react';
import Logo from '../assets/eje_logo.png';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const leftLinks = ['Mobile app', 'Help desk', 'Community'];
const rightLinks = ['Company', 'Resources', 'Blog'];

const socialIcons = [
  { icon: <Twitter size={16} />, label: 'Twitter' },
  { icon: <Instagram size={16} />, label: 'Instagram' },
  { icon: <Linkedin size={16} />, label: 'LinkedIn' },
];

const SocialButtons = () => (
  <div className="flex flex-row items-center justify-center gap-2">
    {socialIcons.map(({ icon, label }) => (
      <a
        key={label}
        href="#"
        aria-label={label}
        className="w-9 h-9 text-primary-50 hover:primary-50 hover:primary-100 transition-colors"
      >
        {icon}
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full border-t-4 border-primary-100 bg-white px-6 md:px-12 lg:px-20 pt-8 pb-6">

      {/* ── MOBILE layout ── */}
      <div className="flex flex-col lg:hidden gap-2">

        {/* Logo */}
        <div className="flex items-center">
            <img src={Logo} alt="Ejenex" className="w-24 object-contain" />
            <p className="text-2xl font-light text-primary-50">EjeNex</p>
        </div>

        <hr />

        {/* 2-column links */}
        <div className="flex flex-row gap-16 justify-between">
          <div className="flex flex-col gap-3">
            {leftLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-gray-700 hover:text-primary-100 transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {rightLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-gray-700 hover:text-red-600 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <SocialButtons />

        <p className="text-xs text-center text-gray-400">
          © Ejenex, Inc. 2025. Where Intelligence, Trust, and Life Connect.
        </p>

      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden lg:flex flex-col gap-6">

        {/* Top row — links | logo | links */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-10">
            {leftLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-gray-700 hover:text-red-600 transition-colors">
                {link}
              </a>
            ))}
          </div>

        {/* Logo */}
        <div className="flex items-center">
            <img src={Logo} alt="Ejenex" className="w-24 object-contain" />
            <p className="text-2xl font-light text-primary-50">EjeNex</p>
        </div>

          <div className="flex flex-row gap-10">
            {rightLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-gray-700 hover:text-red-600 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        <hr />

        {/* Bottom — social icons + copyright centered */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <SocialButtons />
          <p className="text-xs text-center text-gray-400">
            © Ejenex, Inc. 2025. Where Intelligence, Trust, and Life Connect.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;