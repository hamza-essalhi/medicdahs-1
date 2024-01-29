// consultationProfile.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { motion } from "framer-motion"
import { FaX } from 'react-icons/fa6';
import { FaPlusSquare, FaDownload } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';
import data from '../data.json';





export default function AddConsultation({ setShowBackDRropAlertMessage, setValueOfBackdrop }) {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    address: '',
    phone: '',
    weight: '',
    bdc: '',
    bloodPressure: '',
    bloodSugar: '',
    price: '',
    observations: '',
    recommendations: '',
    analysis: '',
    analysisReport: '',
    patientId: ""
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    // Filter data based on the search term
    const filtered = data.filter((patient) => {
      const fullName = `${patient.firstname} ${patient.lastname}`;
      return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredData(filtered);
  }, [data, searchTerm]);

  useEffect(() => {


    const foundPtient = data.find((p) => p.id === parseInt(id));

    // Update the state with the found consultation
    setPatient(foundPtient)
  }, [id]);



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
        age: inputValues.age,
        gender: inputValues.gender,
        address: inputValues.address,
        phone: inputValues.phone,
        weight: inputValues.weight,
        bdc: inputValues.bdc,
        bloodPressure: inputValues.bloodPressure,
        bloodSugar: inputValues.bloodSugar,
        price: inputValues.price,
        observations: inputValues.observations,
        recommendations: inputValues.recommendations,
        analysis: inputValues.analysis,
        analysisReport: inputValues.analysisReport,
        date: formattedDateString, // Include the formatted date in the user object
        patientId: patient.id
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
  const handleSelectChange = (e) => {
    const selectedPatient = filteredData.find((patient) => {
      const fullName = `${patient.firstname} ${patient.lastname}`;
      return fullName.toLowerCase() === e.target.value.toLowerCase();
    });

    setPatient(selectedPatient);
  };
  return (
    <div className={`flex mx-2 flex-col consultations`} >
      {
        !id &&<div className="flex header flex-wrap flex-col backdrop-blur-sm addConsultation w-full p-4 my-3">

        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="" className='flex-1'>Trouver un patient</label>
          <input
            type="text"
            placeholder="Search for a patient"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
          <label htmlFor="" className='flex-1'>Sélectionnez un patient</label>

          <select onChange={handleSelectChange}>
            <option value="">Select a patient</option>
            {filteredData.map((patient) => {
              const fullName = `${patient.firstname} ${patient.lastname}`;
              return (
                <option key={patient.id} value={fullName}>
                  {fullName}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      }
      <form onSubmit={handleSubmit} className="flex flex-wrap flex-col backdrop-blur-sm addConsultation w-full p-4" >
        <div className={`flex flex-wrap`}>
          {
            patient && <div className="flex-1 flex-col border-2 rounded-md border-blue-300  mx-3 my-2 flex  p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
              <h1 className='w-full p-4 text-xl max-sm:text-sm'>  Detail De Patient</h1>
              <img className='w-100px max-sm:w-50px mt-10 max-sm:mt-3' src={patient.image} alt={`Person `} />
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
                    value={patient.firstname}

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
                    value={patient.lastname}

                  />
                </div>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="age" className='flex-1'>
                    Âge
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="age"
                    name="age"
                    value={patient.age}

                  />
                </div>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="gender" className='flex-1'>
                    Sexe
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="gender"
                    name="gender"
                    value={patient.gender}

                  />
                </div>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="address" className='flex-1'>
                    Adresse
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="address"
                    name="address"
                    value={patient.address}

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

                    value={patient.phone}
                  />
                </div>
              </div>
            </div>

          }
          <div className="flex-1 flex-col border-2 rounded-md border-blue-300 mx-3 my-2 flex  p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
            <h1 className='w-full p-4 text-xl max-sm:text-sm'> Détails de Santé</h1>
            <img className='w-100px max-sm:w-50px mt-10 max-sm:mt-3' src="/img/doctor-visit.png" alt={`Person`} />
            <div className='row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1'>
              <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                <label htmlFor="weight" className='flex-1'>
                  Le poids
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  id="weight"
                  name="weight"


                />
              </div>

              <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                <label htmlFor="bdc" className='flex-1'>
                  BDC
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  id="bdc"
                  name="bdc"

                />
              </div>

              <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                <label htmlFor="bloodPressure" className='flex-1'>
                  La tension artérielle
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  id="bloodPressure"
                  name="bloodPressure"


                />
              </div>

              <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                <label htmlFor="bloodSugar" className='flex-1'>
                  La glycémie
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  id="bloodSugar"
                  name="bloodSugar"


                />
              </div>


              <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                <label htmlFor="price" className='flex-1'>
                  Paiement
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  id="price"
                  name="price"


                />
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className="flex-1 flex-col border-2 rounded-md border-blue-300 mx-3 my-2 flex  p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
            <h1 className='w-full p-4 text-xl max-sm:text-sm'>Consultant's Report</h1>

            <img className='w-100px max-sm:w-50px mt-10 max-sm:mt-3' src="/img/medical-history.png" alt="" />
            <div className='row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1'>
              <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-start'>
                <label htmlFor="observations" className='flex-1 '>
                  Constatations
                </label>
                <textarea
                  onChange={handleInputChange}
                  type="text"
                  id="observations"
                  name="observations"


                  rows={6}
                />
              </div>

              <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-start'>
                <label htmlFor="recommendations" className='flex-1'>
                  Recommandations
                </label>
                <textarea
                  onChange={handleInputChange}
                  type="text"
                  id="recommendations"
                  name="recommendations"

                  rows={6}
                />
              </div>

              <h1 className='w-full p-3 text-xl max-sm:text-sm my-4'>Les Analyses</h1>

              <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                <label htmlFor="analysis" className='flex-1'>
                  L'analyse
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  id="analysis"
                  name="analysis"


                />
              </div>

              <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-start'>
                <label htmlFor="analysisReport" className='flex-1'>
                  Rapport de l'analyse
                </label>
                <textarea
                  onChange={handleInputChange}
                  type="text"
                  id="analysisReport"
                  name="analysisReport"


                  rows={6}
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