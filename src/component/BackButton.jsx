import React from 'react'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// BsArrow90DegLeft
// Link
function BackButton({destination= "/"}) {
  return (
    <div className='flex'>
        <Link to ={destination}  className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrow90DegLeft  className="text-2xl"/>
        </Link>
    </div>
  )
}

export default BackButton