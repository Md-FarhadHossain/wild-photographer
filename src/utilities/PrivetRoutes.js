
import { CSSProperties } from "react";
import PuffLoader from "react-spinners/ClipLoader";
import { useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext } from '../context/AuthContext'

const PrivetRoutes = ({children}) => {
    const { user,loading} = useContext(UserContext)
    const location = useLocation()
    let [color, setColor] = useState("#ffffff");

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        width: '5rem',
        height: '5rem'
      };

    if(loading) {
        return <>
            {/* <h1 className="text-3xl text-center w-full">Loading ........</h1> */}
            <h1 className="text-center"><PuffLoader size={50} color="#36d7b7" /></h1>
        </>
    }
    if(user){
        return children
    }

  return <Navigate to='/login' state={{from: location}} replace />
}

export default PrivetRoutes