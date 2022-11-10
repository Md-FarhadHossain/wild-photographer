import React, { useContext, useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const UpdateReview = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewId, setReviewId] = useState({});
  const navigate = useNavigate()
  const {user} = useContext(UserContext);
  const editData = useLoaderData();
  console.log(editData);
  const router = useParams();
  const { id } = router;
  console.log(id);

  useEffect(() => {
    fetch(`https://wildife-grapher.vercel.app/add-review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  // reviews.map(review => {
  //     return console.log(review._id)
  // })

  // console.log(reviews)

  const handleUpdateReview = (e) => {
  e.preventDefault();
    const reviewValue = {
      displayName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      review: e.target.textarea.value,
    };
    console.log(reviewValue);

    fetch(`https://wildife-grapher.vercel.app/add-review/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reviewValue)
    })
    .then(res => res.json())
    .then(data => {
        toast.success('Review updated successfully!')
        setTimeout(() => {
          navigate('/my-reviews')
          e.target.reset()
        }, 1000);
        console.log(data)
    })
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-16">Update your review</h1>
      {/* Add review form */}
      <form
        onSubmit={handleUpdateReview}
        className="flex flex-col w-3/5 mx-auto my-16"
      >
        <textarea
          name="textarea"
          defaultValue={reviews?.review}
          className="textarea textarea-bordered min-h-[10rem] max-h-[15rem]"
          placeholder="Write about your experience on our services..."
        ></textarea>
        <button className="btn mt-8">Update The Review</button>
      </form>
      <Toaster />
    </div>
  );
};

export default UpdateReview;
