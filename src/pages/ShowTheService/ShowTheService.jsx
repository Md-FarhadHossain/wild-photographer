import React, { useContext, useState } from "react";
import { useEffect } from "react";
import PuffLoader from "react-spinners/ClipLoader";

import { Link, useLoaderData } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const ShowTheService = () => {
  const serviceData = useLoaderData();
  // console.log(serviceData);
  const [reviews, setReviews] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(`https://wildife-grapher.vercel.app/add-review`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setReviews(data);
      });
  }, []);

  const remaningReview = reviews.filter(
    (review) => review.serviceId == serviceData._id
  );

  const { title, description, image, price, _id } = serviceData;

  // useEffect(() => {
  //   fetch(`https://wildife-grapher.vercel.app/add-review?serviceId=${}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setReviews(data);
  //     });
  // }, [])

  // reviews.map((re) => {
  //   if(serviceData?._id == re.serviceId){
  //     console.log('good',_id,re.serviceId)
  //   } else {
  //     console.log('badd',serviceData?._id, re.serviceId)
  //   }

  // })

  if(serviceData.length === 0) {
    return <h1 className="text-center"><PuffLoader size={50} color="#36d7b7" /></h1>
  }

  return (
    <div>
      <div className="container flex-col mx-auto flex items-center my-16 h-[80vh]">
        {/* Service Details */}
        <h1 className="text-3xl font-bold my-8">Service Details</h1>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-[20rem]">
            <img className="h-[20rem] object-cover mx-w-[10rem]" src={image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="text-2xl font-bold">Price: ${price}</div>
            <div className="card-actions justify-end">
              {user ? (
                <>
                  <Link to={`/add-review/${_id}`} className="btn btn-primary">
                    Review this service
                  </Link>
                </>
              ) : (
                <>
                  
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-6" className="btn btn-primary">
                    Review this service
                  </label>
                  
                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      {/* <h3 className="font-bold text-lg">
                        Congratulations random Internet user!
                      </h3> */}
                      <p className="py-4 text-3xl text-center">
                      Please login to add a review
                      </p>
                      <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-error">Close</label>
                        <Link
                          to={`/add-review/${_id}`}
                          htmlFor="my-modal-6"
                          className="btn"
                        >
                          Login Here
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Service Review */}
        <div className="mt-14">
          <h1 className="text-3xl font-bold my-8">Customars Reviews</h1>
          <div className="flex flex-wrap justify-between items-center my-8">
            {remaningReview.map((userReview) => {
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
