import React from 'react'
import BlogItem from './BlogItem'
import Blogfooter from './Blogfooter'
import useCustomhook from './useCustomhook'

const Blogs = () => {

   const {state} =  useCustomhook()
   console.log(state)

   const lngt = state.people.length
  return (
    <div className=' mx-auto bg-gray-200 w-[420px] h-auto py-3 px-4 rounded-md shadow-lg flex flex-col justify-between space-y-2'>

        <div className=''>
            <h1 className=' text-center text-2xl tracking-wider leading-6 font-semibold'>{lngt} Birthdays Today</h1>
        </div>

        <BlogItem />
        <Blogfooter />
    </div>
  )
}

export default Blogs