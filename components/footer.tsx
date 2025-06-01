import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-4 md:px-[14vw] py-12">
      <div className=" border-t border-gray-800 mb-6"></div>
      <p className="text-gray-600 text-xs md:text-base text-center">
        Copyright © {currentYear} Zhafran. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
