import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext';

const Services = () => {
  const [services, setServices] = useState([])
  const {loading} = useContext(UserContext)
 
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then((response) => response.json())
    .then(data => {
      setServices(data)
      console.log(data)
    })
    .catch(err => console.log(err))
  }, [])


  if(loading) {
    return <>
        <h1 className="text-3xl">Loading ........</h1>
    </>
}
document.title = 'Services'
  return (
    <div className='container mx-auto my-20'>
      <h1 className="text-3xl font-bold text-center my-20">Services</h1>

      <div className=" flex flex-wrap justify-center lg:justify-between items-center">
        {services.map((service) => {
          return (
            <div
              key={service._id}
              className="card w-[30rem] my-4 bg-base-100 shadow-xl"
            >
              <figure>
                <PhotoProvider>
                  <PhotoView src={service.image}>
                    <img
                      className="h-[300px] object-cover w-full cursor-pointer hover:opacity-80"
                      src={service.image}
                      alt="Shoes"
                    />
                  </PhotoView>
                </PhotoProvider>
              </figure>
              <div className="card-body">
                <h2 className="card-title h-[3rem] overflow-hidden">
                  {service.title}
                  <div className="badge badge-secondary">${service.price}</div>
                </h2>
                <p className="short_descrip">{service.description}</p>
                <Link to={`/services/${service._id}`} className="link-hover inline-block text-right text-blue-500">
                  see more
                </Link>
                <div className="card-actions">
                  <h3 className="text-2xl font-semibold">
                    Price: ${service.price}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default Services