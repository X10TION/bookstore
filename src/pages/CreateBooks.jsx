import React, { useState } from 'react'
import BackButton from '../component/BackButton'
import axios from 'axios'
import Spinner from '../component/spinner'
import { useNavigate } from 'react-router-dom'


function CreateBooks() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publishYear, setPublisher] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleSaveBook = () => {
      const data = {
        title,
        author,
        publishYear
      };
      setLoading(true);

      axios
      .post('http://localhost:8099/bookstore', data)
      .then(() => {
        setLoading(false);
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert("An Error occured. please check console applications")
        console.log(error)
      })
    }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'> Create Books</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
            <label htmlFor="title" className='text-xl mr-4 text-gray-400'>Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
        </div>

        <div className='my-4'>
            <label htmlFor="author" className='text-xl mr-4 text-gray-400'>Author</label>
            <input 
              type="text" 
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
        </div>

        <div className='my-4'>
            <label htmlFor="publishYear" className='text-xl mr-4 text-gray-400'>publish Year</label>
            <input 
              type="text" 
              value={publishYear}
              onChange={(e) => setPublisher(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBooks