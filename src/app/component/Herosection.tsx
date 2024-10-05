"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';



const Herosection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 mt-20 items-center justify-center' >
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400'>Hello, I&apos;m{" "}</span> <br />
  
    <TypeAnimation
      sequence={[
        'Muhammad Moeed',
        1000,
        'Web Developer',
        1000,
        'App Developer',
        1000,
        'UI UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
            </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dicta excepturi doloribus, at maiores explicabo </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-600 via-teal-400 to-indigo-600 hover:bg-slate-200 text-black'>
              Hire Me
              </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-600 via-teal-400 to-indigo-600 hover:bg-slate-800 text-black mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white '> Download CV</span>
              </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg-mt-0 '  >
          <div className="rounded-full bg-[#181818] w-[260px] h-[260px] relative">
            <Image
              src='/images/moeed-banner.png'
              alt='hero image'
              className='absolute transform -translate-x-1/2 translate-y-1/2 left-1/2 top-[-140px]'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection