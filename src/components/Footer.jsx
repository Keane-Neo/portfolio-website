import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='flex justify-center w-full h-10 absolute bottom-0 bg-gray-300 pt-2'>
      <p className='pr-2'>© 2023</p>
      <a href='https://github.com/Keane-Neo' target="_blank" rel="noopener noreferrer"><AiFillGithub size={30} className=''/></a>
      <a href='https://www.linkedin.com/in/keane-neo/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={30} /></a>
    </footer>
  )
}

export default Footer