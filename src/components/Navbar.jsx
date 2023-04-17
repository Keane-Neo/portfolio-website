import React from 'react'

const Navbar = ({ handleHomeClick, handleProjectsClick, handleContactClick }) => {    

  return (
    <nav className="flex justify-between sticky top-0 w-full h-16 bg-gray-700 text-white">
      <div>LOGO</div>
      <div className='flex justify-evenly'>
        <button className='p-5' onClick={handleHomeClick}>Home</button>
        <button className='p-5' onClick={handleProjectsClick}>Projects</button>
        <button className='p-5' onClick={handleContactClick}>Contact</button>
      </div>
    </nav>
  )
}

export default Navbar