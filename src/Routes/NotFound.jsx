import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex  flex-col items-center justify-center error-404 h-full'>
      <div>
        <span className='a max-sm:text-exphone text-extra'>4</span>
        <span className='b max-sm:text-exphone text-extra'>0</span>
        <span className='c max-sm:text-exphone text-extra'>4</span>
      </div>
      <img src="/img/giphy.gif" alt="" />
        <Link to="/" className=' bg-red-800 text-white p-4 rounded-lg max-sm:text-sm'>Go to Home</Link>
     
        
    </div>
  )
}
