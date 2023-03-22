import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeMain from '../Homeview/Home/HomeMain/HomeMain'

const Allroutes = () => {
    let element = useRoutes([
        {
            path: '/',
            element: <HomeMain />
        }
    ])
  return element
}

export default Allroutes