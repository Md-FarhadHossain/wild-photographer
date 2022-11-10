import React from 'react'

const BlogContent = ({title, description}) => {
  return (
    <div className="container mx-auto px-4 my-8">
      <div className="mockup-window border bg-base-300">
        <div className="flex flex-col px-4 p-8 bg-base-200">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogContent