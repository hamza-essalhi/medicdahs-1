import React from 'react'

import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
export default function NextPatient() {
  return (
    <div className="flex-1 flex-col nextPatient patient-home  ml-3 mr-3  flex  backdrop-blur-sm p-4  items-center justify-center  max-sm:min-w-full max-sm:m-0 max-sm:mt-3">

      <div className='flex justify-end w-full'>
        <h1 className='wating max-sm:text-exsm text-md '>En Attend</h1>
      </div>
      <img src="/img/icons/20-30.png" alt="" className='w-100px max-sm:w-50px' />
      <div className=" row flex flex-1 flex-col mr-3 patient-home backdrop-blur-sm p-4  items-center justify-center w-full mt-4">
      <Link className=' mb-4 flex justify-end w-full'><FaUserEdit className='btn max-sm:text-xl text-3xl bg-red-400'/></Link>

        <h1 className='wating max-sm:text-exsm text-md'>Mr.Hamza Essalhi</h1>
        <div className='w-60% flex gap-3 p-3 max-sm:text-exsm mt-3'>
          <span className='flex-1'>date de naissance</span>
          <span>2020-05-03</span>
        </div>
        <div className='w-60% flex gap-3  p-3 max-sm:text-exsm'>
          <span className='flex-1'>Dernier rendez-vous</span>
          <span>2020-05-03</span>
        </div>
        <div className='w-60% flex gap-3  p-3 max-sm:text-exsm'>
          <span className='flex-1'>Date d'inscription</span>
          <span>2020-05-03</span>
        </div>
      </div>

    </div>
  )
}
