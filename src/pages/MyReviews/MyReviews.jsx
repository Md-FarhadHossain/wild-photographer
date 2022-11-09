import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';

const MyReviews = () => {
  const [myReview, setMyReview] = useState([]);
  const [res, setRes] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5000/add-review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setRes(!res);
        setMyReview(data);
      });
  }, [res]);

  const hanldeDelete = (userReview) => {
    // e.preventDefault()
    fetch(`http://localhost:5000/add-review/${userReview?._id}`, {
      method: "DELETE",
    }).then((data) => {
      console.log(data)
      toast.success('Successfully Deleted the Review!')
    });
  };
  document.title = 'My Review'
  
  return (
    <div className="mx-auto container">
      my review
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
                      <button
                        onClick={() => hanldeDelete(userReview)}
                        className="btn btn-warning btn-xs"
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
