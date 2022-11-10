import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const MyReviews = () => {
  const [myReview, setMyReview] = useState([]);
  const [res, setRes] = useState(true);
  const { user } = useContext(UserContext);

  const serviceData = useLoaderData();
  console.log(serviceData);

  useEffect(() => {
    fetch(`http://localhost:5000/add-review?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)

        setMyReview(data);
      });
  }, [res]);

  console.log(myReview);

  const hanldeDelete = (userReview) => {
    // e.preventDefault()
    const modal = window.confirm(`you want to delete the review?`);
    if(modal){
      fetch(`http://localhost:5000/add-review/${userReview?._id}`, {
      method: "DELETE",
    }).then((data) => {
      setRes(!res);
      toast.success(`Successfully deleted the review`)
      console.log(data);
    });
    } else {
      toast.error(`Didn't delete the review`)
    }
  };

  const hanldeEdit = (userReview) => {};
  let count = 1;

  document.title = "My Review";

  return (
    <div className="mx-auto container">
      <h1 className="text-center text-4xl font-bold my-4">My review</h1>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full my-8 border border-separate">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th className="w-[1rem]">No.</th>
                <th>Service Name</th>
                <th>Your Review</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myReview.map((userReview) => {
                const {
                  displayName,
                  email,
                  photoURL,
                  image,
                  price,
                  title,
                  review,
                  _id,
                } = userReview;

                return (
                  <tr key={_id}>
                    <th className="border">
                      <span>{count++}</span>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{title}</div>
                          <div className="text-sm opacity-50 font-semibold">
                            ${price}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="whitespace-normal">{review}</p>
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        ${price}
                      </span>
                    </td>

                    <th className="text-right">
                      <Link
                        to={`/my-reviews/edit/${_id}`}
                        onClick={() => hanldeEdit(userReview)}
                        className="btn btn-success text-gray-900 btn-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => hanldeDelete(userReview)}
                        className="btn ml-4 btn-error text-gray-900 btn-sm"
                      >
                        DELETE
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default MyReviews;
