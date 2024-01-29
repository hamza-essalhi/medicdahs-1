// consultationProfile.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import conts from '../const.json';
import { motion } from "framer-motion"
import { FaX } from 'react-icons/fa6';
import { FaPlusSquare, FaDownload } from 'react-icons/fa';

import { Link,useNavigate } from 'react-router-dom';
import data from '../data.json';





export default function ConsultationPage({ setShowBackDRropAlertMessage, setValueOfBackdrop }) {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [consultation, setConsultation] = useState(null);
  const [editedConsultation, setEditedConsultation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChanged, setIschisChanged] = useState(false);
  const [isForm1Changed, setIsForm1chisChanged] = useState(false);
  const [isSubmittingForm1, setIsSubmittingForm1] = useState(false);
  const [isForm2Changed, setIsForm2chisChanged] = useState(false);
  const [isSubmittingForm2, setIsSubmittingForm2] = useState(false);
 

  useEffect(() => {

    // Find the consultation with the specified id from data.json
    const foundConsultation = conts.find((p) => p.id === parseInt(id));
    const foundPtient = data.find((p) => p.id === parseInt(foundConsultation.patientId));

    // Update the state with the found consultation
    setConsultation(foundConsultation);
    setPatient(foundPtient)
  
    setEditedConsultation(foundConsultation); // Initialize editedConsultation with the found data
  }, [id]);

  const handleInputChange = (e) => {
    setIschisChanged(true)
    const { name, value } = e.target;
    setEditedConsultation((prevconsultation) => ({
      ...prevconsultation,
      [name]: value,
    }));
  };
  const handleInputChangeForm1 = (e) => {
    setIsForm1chisChanged(true)
    const { name, value } = e.target;
    setEditedConsultation((prevconsultation) => ({
      ...prevconsultation,
      [name]: value,
    }));
  };
  const handleInputChangeForm2 = (e) => {
    setIsForm2chisChanged(true)
    const { name, value } = e.target;
    setEditedConsultation((prevconsultation) => ({
      ...prevconsultation,
      [name]: value,
    }));
  };

  const handleSubmit = async (e,target) => {
    e.preventDefault();


    try {
      if (target ==1){
        setIsSubmitting(true);
      }
      else if (target==2){
        setIsSubmittingForm1(true);
      }else if (target==3){
        setIsSubmittingForm2(true);
      }
      

      // Update the data.json file with the edited consultation data
      const updatedData = conts.map((p) => (p.id === id ? editedConsultation : p));

      // Simulate a delay (you can replace this with an actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update the local state with the edited consultation data
      setConsultation(editedConsultation);

      // You can update the global state or perform other actions as needed

      console.log('consultation data updated successfully:', editedConsultation);
    } catch (error) {
      console.error('Error updating consultation data:', error);
    } 
      setIsSubmitting(false);
      setIschisChanged(false)
      setIsSubmittingForm1(false);
      setIsForm1chisChanged(false)
      setIsSubmittingForm2(false);
      setIsForm2chisChanged(false)
    
  };


  const handellDelete = (rowData) => {

    setShowBackDRropAlertMessage(true)
    setValueOfBackdrop(editedConsultation.firstname + " " + editedConsultation.lastname)

  };
  const navigate=useNavigate()

  const handlePrint = () => {
   navigate("/consultation-basic-page/"+id)
  };
  return (
    <div className={`flex mx-2 flex-col consultations`} >
      {
        consultation ? <div className={`flex flex-wrap flex-col`}>
          <div className={` url flex items-center justify-between gap-1 mx-3 p-2 my-2 max-sm:mx-0 max-sm:p-1`}>
            <div className='flex items-center'>
              <FaPlusSquare className={`icon max-sm:text-exsm`} />
              <Link to={"/add-consultation/"+id} className={`p-3 max-sm:text-exsm`}>Ajouter</Link>
            </div>
            <div className="flex items-center color-error text-xl max-sm:text-exsm">

              <motion.button transition={{ duration: 0.1 }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 4px gray"
                }}><FaDownload onClick={handlePrint} />
              </motion.button>
              <span className='text-sm mx-2  max-sm:text-exsm'>
                Téléchargez</span>

            </div>
            <div className="flex items-center mx-2  color-error text-xl max-sm:text-sm">

              <motion.button transition={{ duration: 0.1 }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 4px gray"
                }}><FaX onClick={handellDelete}></FaX>
              </motion.button>
              <span className='text-sm mx-2 max-sm:text-exsm'>Remove</span>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className="flex-1 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
              <h1 className='w-full p-4 text-xl max-sm:text-sm'>  Detail De Patient</h1>

              <img className='w-100px max-sm:w-50px mt-10 max-sm:mt-3' src={patient.image} alt={`Person ${editedConsultation.id}`} />
              <form onSubmit={(e) => handleSubmit(e, 1)} className="row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1" >
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="firstname" className='flex-1 '>
                    Nom
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={editedConsultation.firstname}
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
                    value={editedConsultation.lastname}
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
                    value={patient.age}
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
                    value={patient.gender}
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
                    value={patient.address}
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
                    value={patient.phone}
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
            <div className="flex-1 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
              <h1 className='w-full p-4 text-xl max-sm:text-sm'> Détails de Santé</h1>
              <img className='w-100px max-sm:w-50px mt-10 max-sm:mt-3' src="/img/doctor-visit.png" alt={`Person ${editedConsultation.id}`} />
              <form onSubmit={(e) => handleSubmit(e, 2)} className="row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1" >
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="weight" className='flex-1'>
                    Le poids
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={editedConsultation.weight}
                    onChange={handleInputChangeForm1}
                  />
                </div>

                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="bdc" className='flex-1'>
                    BDC
                  </label>
                  <input
                    type="text"
                    id="bdc"
                    name="bdc"
                    value={editedConsultation.bdc}
                    onChange={handleInputChangeForm1}
                  />
                </div>

                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="bloodPressure" className='flex-1'>
                    La tension artérielle
                  </label>
                  <input
                    type="text"
                    id="bloodPressure"
                    name="bloodPressure"
                    value={editedConsultation.bloodPressure || ''}
                    onChange={handleInputChangeForm1}
                  />
                </div>

                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="bloodSugar" className='flex-1'>
                    La glycémie
                  </label>
                  <input
                    type="text"
                    id="bloodSugar"
                    name="bloodSugar"
                    value={editedConsultation.bloodSugar}
                    onChange={handleInputChangeForm1}
                  />
                </div>

                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-start'>
                  <label htmlFor="lastVisitReport" className='flex-1'>
                    Rapport de la dernière visite chez le médecin
                  </label>
                  <textarea
                    id="lastVisitReport"
                    name="lastVisitReport"
                    value={editedConsultation.lastVisitReport || ''}
                    onChange={handleInputChangeForm1}
                    rows="4" // Adjust the number of rows based on your design
                  />
                </div>

                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="price" className='flex-1'>
                    Paiement
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={editedConsultation.price}
                    onChange={handleInputChangeForm1}
                  />
                </div>

                {
                  isForm1Changed&& (
                    isSubmittingForm1 ? (
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
                        disabled={isSubmittingForm1}
                      >
                        Sauvegarder
                      </motion.button>
                    )
                  )
                }
              </form>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className="flex-1 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
              <h1 className='w-full p-4 text-xl max-sm:text-sm'>Consultant's Report</h1>

              <img className='w-100px max-sm:w-50px mt-10 max-sm:mt-3' src="/img/medical-history.png" alt={`Person ${editedConsultation.id}`} />
              <form className="row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1" onSubmit={(e) =>handleSubmit(e, 3)}>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-start'>
                  <label htmlFor="observations" className='flex-1 '>
                    Constatations
                  </label>
                  <textarea
                    type="text"
                    id="observations"
                    name="observations"
                    value={editedConsultation.observations}
                    onChange={handleInputChangeForm2}
                    rows={6}
                  />
                </div>

                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-start'>
                  <label htmlFor="recommendations" className='flex-1'>
                    Recommandations
                  </label>
                  <textarea
                    type="text"
                    id="recommendations"
                    name="recommendations"
                    value={editedConsultation.recommendations}
                    onChange={handleInputChangeForm2}
                    rows={6}
                  />
                </div>

                <h1 className='w-full p-3 text-xl max-sm:text-sm my-4'>Les Analyses</h1>

                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                  <label htmlFor="analysis" className='flex-1'>
                    L'analyse
                  </label>
                  <input
                    type="text"
                    id="analysis"
                    name="analysis"
                    value={editedConsultation.analysis}
                    onChange={handleInputChangeForm2}
                  />
                </div>

                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-start'>
                  <label htmlFor="analysisReport" className='flex-1'>
                    Rapport de l'analyse
                  </label>
                  <textarea
                    type="text"
                    id="analysisReport"
                    name="analysisReport"
                    value={editedConsultation.analysisReport}
                    onChange={handleInputChangeForm2}
                    rows={6}
                  />
                </div>



                {
                  isForm2Changed&& (
                    isSubmittingForm2 ? (
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
                        disabled={isSubmittingForm2}
                      >
                        Sauvegarder
                      </motion.button>
                    )
                  )
                }
              </form>
            </div>

          </div>
        </div> :
          <div className="flex-1 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
            <h1>Il n'y a aucun consultation trouvé</h1>

          </div>
      }
    </div>
  );
}