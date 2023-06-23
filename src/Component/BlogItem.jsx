import React from 'react'
import useCustomhook from './useCustomhook'

const BlogItem = () => {

  const {state} =  useCustomhook()
  const {people} = state

  const getItem = people.map(item => {
    const {id, image, name, age} = item

    return  (
            <article key={id} className=' cursor-pointer rounded-md flex justify-start items-center gap-6 bg-white p-2 hover:-translate-y-1 transition-all'>
                <img src={image} alt=""  className=' w-16 h-16 object-cover rounded-full ring-4 ring-red-500'/>
                <div className=' flex flex-col gap-2'>
                <h3 className=' text-xl tracking-wider leading-5  text-slate-800'>{name}</h3>
                <p className=' text-slate-400'>{age} years</p>
                </div>
            </article>
            )  
        })

  return (
    <div className='  grid grid-cols-1  space-y-2 py-2'>
        {getItem}
    </div>
  )
}

export default BlogItem