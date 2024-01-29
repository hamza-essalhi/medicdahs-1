// PatientProfile.js

import React, {  useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

import { motion } from "framer-motion"




export default function Profile({ setShowBackDRropAlertMessage, setValueOfBackdrop }) {
  const foundPatient = {
    "id": "lroy2yh38j8t0i476c2",
    "firstname": "Noor",
    "lastname": "Lazar (name)",
    "address": "884 Street, Tangier",
    "phone": "+212 156551173",
    "gender": "female",
    "age": 26,
    "image": "/img/icons/20-30-woman.png"
  };
  const { id } = useParams();
  const [patient, setPatient] = useState(foundPatient);
  const [editedPatient, setEditedPatient] = useState(foundPatient);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChanged, setIschisChanged] = useState(false);



  const handleInputChange = (e) => {
    setIschisChanged(true)
    const { name, value } = e.target;
    setEditedPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      setIsSubmitting(true);

      // Update the data.json file with the edited patient data
      const updatedData = data.map((p) => (p.id === id ? editedPatient : p));

      // Simulate a delay (you can replace this with an actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update the local state with the edited patient data
      setPatient(editedPatient);

      // You can update the global state or perform other actions as needed

      console.log('Patient data updated successfully:', editedPatient);
    } catch (error) {
      console.error('Error updating patient data:', error);
    } finally {
      setIsSubmitting(false);
      setIschisChanged(false)
    }
  };


 
  return (
    <div className={`flex mx-2 flex-col patients`}>
      <div className={`flex flex-wrap`}>
        <div className="flex-1 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
          <img className='w-100px max-sm:w-50px max-sm:text-exsm active-color mt-10 max-sm:mt-3' src={patient?.image} alt={`Person ${patient.firstname}`} />
          <form className="row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1" onSubmit={handleSubmit}>
            <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
              <label htmlFor="firstname" className='flex-1 '>
                Nom
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={editedPatient.firstname}
                onChange={handleInputChange}
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
                value={editedPatient.lastname}
                onChange={handleInputChange}
              />
            </div>
            <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
              <label htmlFor="age" className='flex-1'>
                Âge
              </label>
              <input
                type="text"
                id="age"
                name="age"
                value={editedPatient.age}
                onChange={handleInputChange}
              />
            </div>
            <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
              <label htmlFor="gender" className='flex-1'>
                Sexe
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={editedPatient.gender}
                onChange={handleInputChange}
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
                value={editedPatient.address}
                onChange={handleInputChange}
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
                value={editedPatient.phone}
                onChange={handleInputChange}
              />
            </div>
            {
              isChanged && (
                isSubmitting ? (
                  <div className="loader max-sm:w-30px max-sm:border-4"></div>
                ) : (
                  <motion.button
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2 }}
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 4px gray"
                    }}
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded my-4 max-sm:text-exsm"
                    disabled={isSubmitting}
                  >
                    Sauvegarder
                  </motion.button>
                )
              )
            }


          </form>
        </div>
       


      </div>
    </div>
  );
}