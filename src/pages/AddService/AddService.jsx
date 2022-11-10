import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddService = () => {

  const navigate = useNavigate()

  const handleAddService = (e) => {
    e.preventDefault();
    const serviceValue = {
      title: e.target.title.value,
      description: e.target.description.value,
      image: e.target.photoLink.value,
      price: e.target.price.value,
    }
    console.log(serviceValue)
    fetch('https://wildife-grapher.vercel.app/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceValue)
    })
    .then(result => {
      console.log(result)
      e.target.reset()
      toast.success('Service added successfully!')
      setTimeout(() => {
        navigate('/services')
      }, 800);
    })
  }

  document.title = 'Add Service'

  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-col items-center h-[80vh]">
      <h1 className="text-3xl font-bold text-center mb-8">Add Services</h1>
        <form onSubmit={handleAddService} className="shadow-lg p-5 rounded-lg">
          <div className="my-4">
            <p>Title</p>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="my-4">
            <p>Description</p>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>

          <div className="my-4">
            <p>Photo Link</p>
            <input
              type="link"
              name="photoLink"
              placeholder="Photo Link"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="my-4">
            <p>Price</p>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div>
            <button className="btn">Add the Service</button>
          </div>
        </form>
      </div>

      <Toaster />
    </div>
  );
};

export default AddService;
