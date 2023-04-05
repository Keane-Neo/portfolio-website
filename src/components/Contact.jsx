import React from 'react'
import { forwardRef } from 'react'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='h-screen w-screen flex justify-center items-center'>
      <div className='w-1/2 h-1/2 border-solid border-black border-2 flex flex-col justify-center items-center'>
        <p className='text-3xl font-bold mb-5'>Feel free to contact me!</p>
        <div className='flex'>
          <a href='mailto: keaneneo2@gmail.com'><AiOutlineMail size={20} className='mr-5 pt-1'/></a>
          <a href='mailto: keaneneo2@gmail.com' className=' hover:underline'>keaneneo2@gmail.com</a>
        </div>
      </div>
    </section>
  )
})


export default Contact