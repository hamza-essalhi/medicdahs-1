import React from 'react';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
export default function Patient({ patient, forwardedRef }) {
  return (
    <div ref={forwardedRef} className="flex-1 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 max-sm:p-1 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max">
      <div className="flex w-full justify-end color-error text-xl max-sm:text-sm">
      <motion.div  transition={{ duration: 0.1 }}
            whileHover={{
              scale: 1.4,
              textShadow: "0px 0px 4px gray"
            }}>
      <Link to={'/patient-profile/'+patient?.id} className='m-2 px-4'><FaShare /></Link>
      </motion.div>
      </div>
      <img className='w-100px max-sm:w-50px mt-10 max-sm:mt-3' src={patient.image} alt={`Person ${patient.firstname}`} />
      <form className="row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1">
        {/* Display nurse information here using the 'nurse' prop */}
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="firstname" className='flex-1 '>
            Nom
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={patient.firstname}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="lastname" className='flex-1'>
            Prénom
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={patient.lastname}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="lastname" className='flex-1'>
            Âge
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={patient.age}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="lastname" className='flex-1'>
            Sexe
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={patient.gender}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="address" className='flex-1'>
            Adresse
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={patient.address}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="phone" className='flex-1'>
            Téléphone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={patient.phone}
            readOnly
          />
        </div>
      </form>
    </div>
  );
}
