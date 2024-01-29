import React from 'react';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
export default function Consultation({ consultation, forwardedRef }) {
  return (
    <div ref={forwardedRef} className="flex-1 flex-col max-sm:p-2 nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max">
      <div className="flex w-full justify-end color-error text-xl max-sm:text-sm">
        <motion.div transition={{ duration: 0.1 }}
          whileHover={{
            scale: 1.4,
            textShadow: "0px 0px 4px gray"
          }}>
          <Link to={'/consultation/' + consultation?.id}  className='m-2 px-4'><FaShare /></Link>
        </motion.div>
      </div>
      <img className='w-100px max-sm:w-50px mt-4 max-sm:mt-1' src="/img/doctors-office.png" alt={`Person ${consultation.id}`} />
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
            value={consultation.firstname}
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
            value={consultation.lastname}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="lastname" className='flex-1'>
            La date
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={consultation.date}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="phone" className='flex-1'>
          Paiement
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={consultation.price}
            readOnly
          />
        </div>
        
        
      </form>
    </div>
  );
}
