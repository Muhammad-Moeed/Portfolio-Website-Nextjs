import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Image 
        src="/images/logo.png" // Path to your logo in the public folder
        alt="Logo" // Alt text for accessibility
        width={100} // Set the desired width
        height={50} // Set the desired height
      />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;