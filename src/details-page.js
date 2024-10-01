import React from 'react'
import AboutEnergy from './components/about-energy'
import { Link } from "react-router-dom";
function DetailsPage (){
  return (
    <div className='flex flex-col items-center '>
<AboutEnergy/>
<Link className="bg-orange-500 px-7 py-2  text-white rounded-md " to="/app">Home</Link>
  </div>
  )
}

export default DetailsPage
