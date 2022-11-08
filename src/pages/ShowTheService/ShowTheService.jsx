import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ShowTheService = () => {
  const serviceData = useLoaderData();
  // console.log(serviceData);
  const [reviews, setReviews] = useState([]);
  const [reviewId, setReviewId] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/add-review")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/add-review/${reviews?.serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        
        console.log(data);
        setReviewId(data);
      });
  },[])

  console.log(reviews)

  const { title, description, image, price, _id } = serviceData;

  reviews.map((re) => {
    if(serviceData?._id == re.serviceId){
      console.log('good',_id,re.serviceId)
    } else {
      console.log('badd',serviceData?._id, re.serviceId)
    }
  
  })

 
  return (
    <div>
      <div className="container flex-col mx-auto flex items-center my-16 h-[80vh]">
        {/* Service Details */}
        <h1 className="text-3xl font-bold my-8">Service Details</h1>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full">
            <img className="h-full" src={image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="text-2xl font-bold">Price: ${price}</div>
            <div className="card-actions justify-end">
              <Link to={`/add-review/${_id}`} className="btn btn-primary">Review this service</Link>
            </div>
          </div>
        </div>

        

        {/* Service Review */}
        <div className="mt-14">
          <h1 className="text-3xl font-bold my-8">Customars Reviews</h1>
          <div className="flex flex-wrap justify-between items-center my-8">
            {reviews.map((userReview) => {
              const { displayName, email, photoURL, review, _id } = userReview;
              return (
                <div
                  key={_id}
                  className=" px-8 pt-8 pb-4 shadow-lg m-4 min-w-[25rem] max-w-[30rem] rounded-md"
                >
                  <div className="flex items-center">
                    <img
                      className="rounded-full w-14 h-14 mr-3 object-cover"
                      src={photoURL}
                      alt=""
                    />
                    <div>
                      <h2 className="font-semibold text-gray-800">
                        {displayName}
                      </h2>
                      <small className=" text-gray-500">{email}</small>
                    </div>
                  </div>
                  <div>
                    <p className="mt-4">{review}</p>
                    <div className="rating mt-4">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTheService;
