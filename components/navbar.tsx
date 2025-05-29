import React from "react";
import StarBorder from "./react-bits/star-border";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 mt-6 md:flex hidden justify-center z-50 ">
      <StarBorder as="button" color="cyan" speed="5s">
        <a href="#home">Home</a>
        <a href="#home">Project</a>
        <a href="#home">Update</a>
        <a href="#home">Experience</a>
        <a href="#home">Contact</a>
      </StarBorder>
    </div>
  );
};

export default Navbar;
