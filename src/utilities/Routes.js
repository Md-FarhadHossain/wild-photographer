import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Main from './Main'
import Services from '../pages/Services/Services'
import CustomarsReview from '../pages/CustomarsReview/CustomarsReview'
import Blog from '../pages/Blog/Blog'
import Contact from '../pages/Contact/Contact'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/services',
                    element: <Services />
                },
                {
                    path: '/coustomars-review',
                    element: <CustomarsReview />
                },
                {
                    path: 'blog',
                    element: <Blog />
                },
                {
                    path: '/contact',
                    element: <Contact />
                }
            ]
        }
    ])
  return (

    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Routes