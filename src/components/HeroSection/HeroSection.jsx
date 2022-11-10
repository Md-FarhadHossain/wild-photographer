import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1449781499120-fbbded86c656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80")` }}
      >
        <div className="hero-overlay bg-opacity-50 brightness-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome to,<br /> Wildlife Grapher</h1>
            <p className="mb-5">
            Here are many elements in photography that come together to make an image be considered “good”. Some of these elements include, but are not limited to lighting.
            </p>
            <Link to='/services' className="btn  btn-accent text-black rounded-sm px-9 btn-lg">Services</Link>
            <Link to='/blog' className="btn ml-4 btn-accent  text-black rounded-sm px-9 btn-lg">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
