import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {

  const handleMessage = (e) => {
    e.preventDefault()
    toast.success('Message sent successfully')
    e.target.reset()
  }

  document.title = 'Contact'
  return (
    <div>
      <div className="hero min-h-screen bg-slate-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:ml-16 lg:text-right">
      <h1 className="text-5xl font-bold">Contact Us!</h1>
      <p className="py-6">Customer service is the assistance and advice provided <br /> by a company to those people who buy or use its <br /> products or services.  Each industry requires different levels of customer service, <br /> but in the end,  the idea of a well-performed service is that of increasing revenues</p>
    </div>
    <form onSubmit={handleMessage} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input required type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Write You Message</span>
          </label>
          <textarea required className="textarea min-h-[7rem] max-h-[20rem] textarea-bordered" placeholder="Send us your message"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Send The Message</button>
        </div>
      </div>
    </form>
  </div>
</div>
<Toaster />
    </div>
  )
}

export default Contact