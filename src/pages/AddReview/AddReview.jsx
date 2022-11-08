import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AddReview = () => {
    const [reviews, setReviews] = useState()

    const handleReview = (e) => {
        e.preventDefault()
        const reviewValue = {
            review: e.target.textarea.value
        }
        console.log(reviewValue)
        
        fetch('http://localhost:5000/add-review', {
            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewValue)
        })
        
    }
    
  return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mt-16">Add your review</h1>
        {/* Add review form */}
      <form onSubmit={handleReview} className="flex flex-col w-3/5 mx-auto my-16">
        <textarea
            name="textarea"
          className="textarea textarea-bordered min-h-[10rem] max-h-[15rem]"
          placeholder="Write about your experience on our services..."
        ></textarea>
        <button className="btn mt-8">Add The Review</button>
      </form>
    </div>
  );
};

export default AddReview;
