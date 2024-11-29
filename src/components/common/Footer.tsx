import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-neutral-100">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Vasanth. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js Page Router, TypeScript, Tailwind CSS, Framer Motion,
        Vercel hosting.
      </p>
    </footer>
  );
};
export default Footer;
