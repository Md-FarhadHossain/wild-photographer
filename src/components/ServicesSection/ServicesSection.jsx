import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`, {
      headers: {
        limit: 3,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container mx-auto px-5 my-20">
      <h1 className="text-4xl mb-8 font-bold text-center">Our Services</h1>

      <div className=" flex flex-wrap justify-center lg:justify-between items-center">
        {services.map((service) => {
          return (
            <div
              key={service._id}
              className="card w-[30rem] my-4 bg-base-100 shadow-xl"
            >
              <figure>
                <PhotoProvider>
                  <PhotoView src={service.image}>
                    <img
                      className="h-[300px] object-cover w-full cursor-pointer hover:opacity-80"
                      src={service.image}
                      alt="Shoes"
                    />
                  </PhotoView>
                </PhotoProvider>
              </figure>
              <div className="card-body">
                <h2 className="card-title ">
                  {service.title}
                  <div className="badge badge-secondary">${service.price}</div>
                </h2>
                <p className="short_descrip">{service.description}</p>
                <Link to={`/services/${service._id}`} className="link-hover inline-block text-right text-blue-500">
                  see more
                </Link>
                <div className="card-actions">
                  <h3 className="text-2xl font-semibold">
                    Price: ${service.price}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center my-8">
        <Link to="/services" className="btn rounded-none btn-primary">
          See all services
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
