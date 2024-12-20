import React from 'react'
import Button from './Button'
export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 max-w-[900px] mx-auto p-4'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-bold text-4xl sm:text-6xl md:text-7xl'>Swole <span className='text-blue-400 font-medium'>normous</span>
        </h1>
      </div>
      <p className='text-sm md:text-base font-light'>Ihereaby ackhowledge that I may become <span className='text-blue-400 font-medium'>
        unbelivably swolenormous </span> and accept all risks of becoming teh local <span className='text-blue-400 font-medium'> mass montrosity</span> , afflicted with severe body dismorphia, unable to fit through doors </p>
      <Button text={"Accept & Begin"} />
    </div>
  )
}
