import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const { user, signout } = useContext(UserContext);
  const handleSignout = (e) => {
    e.preventDefault();
    signout()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container mx-auto navbar">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/coustomars-review">Customars Review</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                <li>
                  <Link className="btn btn-success mt-3" to="/my-reviews">
                    My reviews
                  </Link>
                </li>
                <li>
                  
                  <Link className="btn btn-success mt-3" to="/add-service">
                    Add service
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/coustomars-review">Customars Review</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </>
            )}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl">
           <img className="w-9 mr-2" src={logo} alt="" /> Wildlife Grapher
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {user ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/coustomars-review">Customars Review</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                <li>
                  <Link className="btn btn-success ml-4" to="/my-reviews">
                    My reviews
                  </Link>
                </li>
                <li>
                  
                  <Link className="btn btn-success ml-4" to="/add-service">
                    Add service
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/coustomars-review">Customars Review</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <Link onClick={handleSignout} className="btn btn-warning">
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" className="btn">
                Sign Up
              </Link>
              <Link to="/login" className="btn ml-4">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
