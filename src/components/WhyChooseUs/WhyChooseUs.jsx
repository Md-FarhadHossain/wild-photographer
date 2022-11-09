import React from "react";
import WhyChooseUsContext from "./WhyChooseUsContext";
import { FaPhotoVideo } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center">Why Choose Us</h1>
        <WhyChooseUsContext
            icon={<FaPhotoVideo />}
          title="High Quality Images"
          description="At 300 pixels per inch (which roughly translates to 300 DPI, or dots per inch, on a printing press), an image will appear sharp and crisp. These are considered to be high resolution, or high-res, images."
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
