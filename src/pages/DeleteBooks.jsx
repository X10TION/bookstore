import React, { useState, useEffect } from 'react'
import BackButton from '../component/BackButton'
import axios from 'axios'
import Spinner from '../component/spinner'
import { useNavigate, useParams } from 'react-router-dom'



function DeleteBooks() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();

const handleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:8099/bookstore/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert("An Error happend . please check the console")

      })

}

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Books</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col items-center border-2 border-sky-400 w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete tis book?</h3>
        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick ={handleDeleteBook}
        >
          Yes, I delete It
        </button>
      </div>
      
    </div>
  )
}

export default DeleteBooks