import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

const MyReviews = () => {
  const [myReview, setMyReview] = useState([]);
  const [res, setRes] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5000/add-review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        
        setMyReview(data);
      });
  }, [res]);

  console.log(myReview)

  const hanldeDelete = (userReview) => {
    // e.preventDefault()
    fetch(`http://localhost:5000/add-review/${userReview?._id}`, {
      method: "DELETE",
    }).then((data) => {
      setRes(!res)
      console.log(data)
      toast.success('Successfully Deleted the Review!')
    });
  };

  const hanldeEdit = (userReview) => {

  }

  document.title = 'My Review'

  return (
    <div className="mx-auto container">
      <h1 className="text-center text-4xl font-bold my-4">My review</h1>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myReview.map((userReview) => {
                const { displayName, email, photoURL, review, _id } =
                  userReview;

                return (
                  <tr key={_id}>
                    
                    <th></th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{displayName}</div>
                          <div className="text-sm opacity-50">{email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{review}</p>
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <th>
                    
                      <Link to={`/my-reviews/edit/${_id}`}
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

            {/* <!-- foot --> */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

    <Toaster />
    </div>
  );
};

export default MyReviews;
