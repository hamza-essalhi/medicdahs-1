// PatientProfile.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import conts from '../const.json';
import price from '../price.json';
import { motion } from "framer-motion"
import { FaRulerVertical, FaWeightHanging, FaX } from 'react-icons/fa6';
import { FaHeart, FaFlask } from 'react-icons/fa';

import CusCalendar from '../Components/CusCalendar';
import Table from '../Components/Table';

export default function PatientProfile({ setShowBackDRropAlertMessage, setValueOfBackdrop }) {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [editedPatient, setEditedPatient] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChanged, setIschisChanged] = useState(false);

  useEffect(() => {

    // Find the patient with the specified id from data.json
    const foundPatient = data.find((p) => p.id ===parseInt(id));

    // Update the state with the found patient
    setPatient(foundPatient);
    setEditedPatient(foundPatient); // Initialize editedPatient with the found data
  }, [id]);

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


  const handellDelete = (rowData) => {

    setShowBackDRropAlertMessage(true)
    setValueOfBackdrop(editedPatient.firstname + " " + editedPatient.lastname)

  };
  const filteredData = conts
  .filter((item) => item.id === parseInt(id))
  .map(({ id, price, date, firstname, lastname }) => ({
    id,
    price,
    date,
    firstname,
    lastname,
  }));


  return (
    <div className={`flex mx-2 flex-col patients`}>
      {
        patient ? <div className={`flex flex-wrap`}>
          <div className="flex-1 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
            <div className="flex w-full justify-end color-error text-xl max-sm:text-sm"><motion.button transition={{ duration: 0.1 }}
              whileHover={{
                scale: 1.4,
                textShadow: "0px 0px 4px gray"
              }}> <FaX onClick={handellDelete}></FaX></motion.button></div>
            <img className='w-100px max-sm:w-50px max-sm:text-exsm active-color mt-10 max-sm:mt-3' src={patient.image} alt={`Person ${patient.firstname}`} />
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
          <div className='flex flex-col max-lg:w-full'>
            <div className="max-lg:order-2 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max">
            <h3 className='mx-2 text-lg max-sm:text-sm'>Prochain rendez-vous</h3>

              <CusCalendar />
            </div>
            <div className="max-lg:order-1 gap-3 w- full flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max">
              <h3 className='mx-2 text-lg max-sm:text-sm'>Les détails de patient </h3>
              <div className='flex flex-col gap-5 w-full'>
                <div className='flex items-center'>
                  <div className='flex items-center w-full'>
                    <FaRulerVertical className='w-50px max-sm:text-exsm active-color' />
                    <span className='max-sm:text-exsm'>La taille</span>
                  </div>
                  <span className='w-30% max-sm:text-exsm'>180 Cm</span>
                </div>
                <div className='flex items-center'>
                  <div className='flex items-center w-full'>
                    <FaWeightHanging className='w-50px max-sm:text-exsm active-color' />
                    <span className='max-sm:text-exsm'>Le poids</span>
                  </div>
                  <span className='w-30% max-sm:text-exsm'>80 Kg</span>
                </div>
                <div className='flex items-center'>
                  <div className='flex items-center w-full'>
                    <FaHeart className='w-50px max-sm:text-exsm active-color' />
                    <span className='max-sm:text-exsm'>Le battement du cœur</span>
                  </div>
                  <span className='w-30% max-sm:text-exsm'>80 bpm</span>
                </div>
                <div className='flex items-center'>
                  <div className='flex items-center w-full'>
                    <FaFlask className='w-50px max-sm:text-exsm active-color' />
                    <span className='max-sm:text-exsm'>La glycémie</span>
                  </div>
                  <span className='w-30% max-sm:text-exsm'>80 mg/dL</span>
                </div>
              </div>
            </div>
          </div>
          <Table addUrl={"/add-consultation/"+id} url="/consultation/" action={true} counterName="consultation" title='Les Consultations' data={filteredData} setShowBackDRropAlertMessage={setShowBackDRropAlertMessage} setValueOfBackdrop={setValueOfBackdrop} />
          <Table action={true}  counterName="Paiement"  title='Les Paiements' data={price} setShowBackDRropAlertMessage={setShowBackDRropAlertMessage} setValueOfBackdrop={setValueOfBackdrop} />

        </div> :
          <div className="flex-1 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
            <h1>Il n'y a aucun patient trouvé</h1>

          </div>
      }
    </div>
  );
}