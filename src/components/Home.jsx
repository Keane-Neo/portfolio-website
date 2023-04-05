import React from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { forwardRef, useEffect } from 'react'


const Home = forwardRef((props, ref) => {
  let text1 = new SplitType('#text1');
  let text2 = new SplitType('#text2');
  let text3 = new SplitType('#text3');
  
  useEffect(() => {
    gsap.fromTo(
      text1.chars,
      { y: '100%' },
      {
        y: '0%',
        duration: 0.5,
        stagger: 0.02,
        ease: 'power4.out',
      }
    );
    
    gsap.fromTo(
      text2.chars,
      { y: '100%' },
      {
        y: '0%',
        duration: 0.5,
        delay: 1,
        stagger: 0.02,
        ease: 'power4.out',
      }
    );
    
    gsap.fromTo(
      text3.chars,
      { y: '100%' },
      {
        y: '0%',
        duration: 0.5,
        delay: 2,
        stagger: 0.02,
        ease: 'power4.out',
      }
    );
  })
  
  
  return (
    <section ref={ref} className='h-screen flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-6xl font-bold'>Hi, I'm Keane.</h1>
          <h2 className='text-3xl font-bold'> I am a </h2>
        <h2 id='text1' className='text-4xl font-bold text-gray-600' style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}>Web Developer</h2>
        <h2 id='text2' className='text-4xl font-bold text-gray-600' style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}>Tech Enthusiast</h2>
        <h2 id='text3' className='text-4xl font-bold text-blue-500' style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}>Lifelong Learner</h2>
        </div>
        <div className='w-1/5 h-auto'>
          <img src='./bg-image.jpg' alt='profile' className='rounded-full mt-5' />
        </div>
    </section>
  )
})

export default Home

