import React from "react";

const WhyChooseUsContext = ({ title, description, icon }) => {
  return (
    <div className="shadow-xl bg-white py-10 w-[30rem] p-6 rounded-lg relative my-8">
      <div className="flex justify-center items-center">
        <span className="text-5xl absolute rounded-full flex items-center justify-center bg-primary text-white shadow-xl top-[-2rem] w-20 h-20 ">
          {icon}
        </span>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-semibold mb-3">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsContext;
