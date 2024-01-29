import React from 'react'

export default function NotFoundUserPage({message}) {
  return (
    <div className=" flex-col url  mx-3 my2 flex  p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max">
      <div>
       <h3>{message}</h3>
      </div>
      <img src="/img/walking.gif" alt="" className='w-50%' />
       
     
    
    </div>
  )
}
