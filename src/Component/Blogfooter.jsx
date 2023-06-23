import React from 'react'
import useCustomhook from './useCustomhook'

const Blogfooter = () => {

  const { state, clearBtn, resetAll}  = useCustomhook()

  const {people} = state
  return (
    <div>
        {people.length < 1 ? (

            <button type='button' className='w-full py-2 px-4 bg-red-500 text-white rounded-lg my-2  hover:bg-rose-800  transition-colors' onClick={resetAll}>Reset All</button>
        )
        : 
        (
            <button type='button' className=' w-full py-2 px-4 bg-red-500 text-white rounded-lg my-2  hover:bg-rose-800  transition-colors' onClick={clearBtn}>Clear All</button>
        )
        }
    </div>
  )
}

export default Blogfooter