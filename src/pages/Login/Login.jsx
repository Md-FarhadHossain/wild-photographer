import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext'

const Login = () => {


    const {login} = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = (e) => {
        e.preventDefault()
        const userInfo = {
            email: e.target.email.value,
            password: e.target.password.value,
            
        }
        console.log(userInfo)
        login(userInfo.email, userInfo.password)
        .then(result => {
          navigate(from, {replace: true})
            console.log(result)
           
        })
        .catch(err => console.log(err))
    }
    document.title = 'Login'
  return (
    <div className="h-[75vh] flex flex-col items-center justify-center">
    <h1 className="text-4xl mb-6 font-bold">Login Here</h1>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        
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
             Donn't have an accout?
              <Link to="/signup" className="link">
                Signup Now
              </Link>
            </span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login