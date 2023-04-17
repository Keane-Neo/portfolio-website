import React from 'react'
import { CgLink } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'
import { forwardRef } from 'react'

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='w-screen h-screen flex flex-1 flex-col justify-start items-center bg-gray-200'>
        <h1 className='text-6xl font-bold m-10 scroll-pt-16'>Projects</h1>
        <div className='w-3/5 h-3/5 border-solid border-black border-2 m-10 flex'>
            <img src="./bg-image.jpg" alt='screenshot of project' className='m-5'></img>
            <div className='flex flex-col w-2/3 h-5/6 mt-10'>
                <h1 className='text-4xl font-bold self-center'>Audio House</h1>
                <p className='text-2xl mt-5'>An online shopping website for all things audio - headphones & earphones</p>
                <p className='text-xl mt-32'>Built with ReactJS and TailwindCSS</p>
                <div className='flex justify-center items-center mt-10'>
                    <button className='bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-5'>Live<CgLink size={20} className='inline ml-2'/></button>
                    <button className='bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Source<AiFillGithub size={20} className='inline ml-2'/></button>
                </div>
            </div>
        </div>
    </section>
  )
})

export default Projects