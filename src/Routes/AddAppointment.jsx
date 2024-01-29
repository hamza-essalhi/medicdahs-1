// consultationProfile.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { motion } from "framer-motion"
import { FaX } from 'react-icons/fa6';
import { FaPlusSquare, FaDownload } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';
import data from '../data.json';





export default function AddAppointment({ setShowBackDRropAlertMessage, setValueOfBackdrop }) {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    date:''
  });
  

  



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const currentDate = new Date();

      // Format the date in the desired format (MM/DD/YYYY)
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1; // Note: Month is zero-based
      const year = currentDate.getFullYear();

      const formattedDateString = `${month}/${day}/${year}`;

      // Create a new user object with input values
      const newUser = {
        firstname: inputValues.firstname,
        lastname: inputValues.lastname,
        phone: inputValues.phone,
        date: inputValues.date, // Include the formatted date in the user object
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(newUser);
    } catch (error) {
      console.error('Error updating consultation data:', error);
    }
    setIsSubmitting(false);


  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  
  return (
    <div className={`flex mx-2 flex-col consultations`} >
   
      <form onSubmit={handleSubmit} className="flex flex-wrap flex-col backdrop-blur-sm addConsultation w-full p-4" >
        <div className={`flex flex-wrap`}>
           <div className="flex-1 flex-col border-2 rounded-md border-blue-300  mx-3 my-2 flex  p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
              <h1 className='w-full p-4 text-xl max-sm:text-sm'>  Detail De Patient</h1>
             
              <div className='row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1'>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="firstname" className='flex-1 '>
                    Nom
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    

                  />
                </div>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="lastname" className='flex-1'>
                    Prénom
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                 

                  />
                </div>
              
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="phone" className='flex-1'>
                    Téléphone
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="phone"
                    name="phone"

                  />
                </div>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="phone" className='flex-1'>
                  Rendez-vous
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="date"
                    id="phone"
                    name="date"

                    
                  />
                </div>
              </div>
            </div>

         </div>
        {
          isSubmitting ?
            <div className='flex justify-center'><div className="loader max-sm:w-30px max-sm:border-4"></div></div>
            :
            <div className='flex justify-center'>
              <motion.button
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 4px gray"
                }}
                type="submit"
                className="bg-blue-500 text-white p-2 rounded my-4 max-sm:text-exsm w-30% "
                disabled={isSubmitting}
              >
                Sauvegarder
              </motion.button>
            </div>

        }
      </form>


    </div>




  );
}