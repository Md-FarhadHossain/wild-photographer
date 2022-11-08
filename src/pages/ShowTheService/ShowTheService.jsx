import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ShowTheService = () => {
  const serviceData = useLoaderData();
  console.log(serviceData);

  const { title, description, image, price, _id } = serviceData;

  return (
    <div>
      <div className="container mx-auto flex items-center justify-between h-[80vh]">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full">
            <img className="h-full" src={image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="text-2xl font-bold">
                Price: ${price}
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Review this service</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTheService;
