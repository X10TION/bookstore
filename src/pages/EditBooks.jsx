import React, { useState, useEffect } from 'react'
import BackButton from '../component/BackButton'
import axios from 'axios'
import Spinner from '../component/spinner'
import { useNavigate, useParams } from 'react-router-dom'


function EditBook() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publishYear, setPublisher] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      setLoading(true);
        axios.get(`http://localhost:8099/bookstore/${id}`)
        .then((response) => {
          setAuthor(response.data.author)
          setPublisher(response.data.publishYear)
          setTitle(response.data.title)
          setLoading(false)
        }).catch((error) => {
          setLoading(false);
          alert("An Error happened. please check the console")
        })
    },[])

    const handleEditBook = () => {
      const data = {
        title,
        author,
        publishYear
      };
      setLoading(true);

      axios
      .put(`http://localhost:8099/bookstore/${id}`, data)
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
      <h1 className='text-3xl my-4'> Edit Books</h1>
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
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook