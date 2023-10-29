import React from 'react'

function spinner() {
  return (
    <div className='animate-ping w-16 h-16 m-8 rounded-full bg-blue-100 align-middle'>
      <div className='animate-ping w-10 h-10  rounded-full bg-red-100'></div>
      <div className='animate-ping w-10 h-10  rounded-full bg-green-100'></div>
    </div>
  )
}

export default spinner