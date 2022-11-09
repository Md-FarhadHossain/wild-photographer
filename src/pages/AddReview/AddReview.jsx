import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const AddReview = () => {
  const [reviews, setReviews] = useState();
  const { user } = useContext(UserContext);
  // console.log(user?.displayName, user?.email, user?.photoURL)

  const servicesData = useLoaderData();
  document.title = "Add Review";

  console.log(servicesData);

  const handleReview = (e) => {
    e.preventDefault();
    const reviewValue = {
      displayName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      review: e.target.textarea.value,
      serviceId: servicesData?._id,
    };
    console.log(reviewValue);

    fetch(`http://localhost:5000/add-review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewValue),
    }).then((result) => {
      console.log(result);
      toast.success("Review added successfully!");
    });
    e.target.reset();
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-16">Add your review</h1>
      {/* Add review form */}
      <form
        onSubmit={handleReview}
        className="flex flex-col w-3/5 mx-auto my-16"
      >
        <textarea
          name="textarea"
          className="textarea textarea-bordered min-h-[10rem] max-h-[15rem]"
          placeholder="Write about your experience on our services..."
        ></textarea>
        <button className="btn mt-8">Add The Review</button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddReview;
