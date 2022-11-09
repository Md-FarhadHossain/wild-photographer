import React from 'react'

const WhyChooseUsContext = ({title, description, icon}) => {
  return (
    <div>
        <div>
            {icon}
        </div>
        <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default WhyChooseUsContext