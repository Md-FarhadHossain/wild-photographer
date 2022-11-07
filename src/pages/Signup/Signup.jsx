import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const Signup = () => {
    const {signup} = useContext(UserContext)
    const handleSignup = (e) => {
        e.preventDefault()
        const userInfo = {
            email: e.target.email.value,
            password: e.target.password.value,
            name: e.target.name.value,
            photoLink: e.target.photoLink.value
        }
        console.log(userInfo)
        signup(userInfo.email, userInfo.password)
        .then(result => {
            console.log(result)
        })
    }

  return (
    <div className="h-[75vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-6 font-bold">Signup Now</h1>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignup} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Link</span>
            </label>
            <input
              type="link"
              name="photoLink"
              placeholder="Photo Link"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <span href="#" className="label-text-alt ">
                Already have an accout?{" "}
                <Link to="/login" className="link">
                  Login Here
                </Link>
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
