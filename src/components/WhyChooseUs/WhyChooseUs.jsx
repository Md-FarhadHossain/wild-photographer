import React from "react";
import WhyChooseUsContext from "./WhyChooseUsContext";
import { FaPhotoVideo,FaPencilRuler,FaSteam } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-slate-200 py-16">
      <div className="container mx-auto my-16 px-4">
        <h1 className="text-4xl font-bold text-center">Why Choose Us</h1>


       <div className="flex mt-16  lg:justify-between sm:justify-center flex-wrap items-center">
       <WhyChooseUsContext
          icon={<FaPhotoVideo />}
          title="High Quality Images"
          description="At 300 pixels per inch (which roughly translates to 300 DPI, or dots per inch."
        />

        <WhyChooseUsContext
          icon={<FaPencilRuler />}
          title="Abundant Experience"
          description="High quality example sentences with “has abundant experience” in context."
        />
        <WhyChooseUsContext
          icon={<FaSteam />}
          title="Modern Equipments"
          description="Modern machines are complex systems that consist of structural elements."
        />
       </div>


      </div>
    </div>
  );
};

export default WhyChooseUs;
