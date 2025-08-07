"use client"
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='md:px-28 max-w-full p-2 bg-gray-200 dark:bg-blue-950 flex items-center justify-center'>
      <span className='text-xs text-gray-400'>Copy {year}. GowthamNagaraj Portofolio .</span>
    </div>
  )
}

export default Footer
