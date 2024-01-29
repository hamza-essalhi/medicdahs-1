import React from 'react'
import { FaBedPulse } from "react-icons/fa6";
import { FaCommentMedical, FaFileMedicalAlt } from "react-icons/fa";
import Chart from '../Components/Chart';
import Table from '../Components/Table';
import ActualPatient from '../Components/ActualPatient';
import NextPatient from '../Components/NextPatient';
import data from '../data.json';
import conts from '../const.json';
const generateRandomData = () => {
  const data = [];
  for (let i = 0; i < 12; i++) {
    data.push(Math.floor(Math.random() * 301)); // Generate random value between 0 and 300
  }
  return data;
};




export default function Home({ setShowBackDRropAlertMessage, showBackDRropAlertMessage, setValueOfBackdrop }) {
  document.title = '🏠 Home';
 
  return (
    <div className='home mt-4'>
      <div className="mx-2 flex flex-wrap">
        <div className="h-full w-full max-sm:w-1/2 p-1 lg:w-1/3 md:w-2/4 sm:w-2/4 rounded-3xl bg-transparent row  ">
          <div className=" bg-red-500 bg-opacity-20  px-6 py-4 relative backdrop-blur-md rounded-xl ">
            <FaBedPulse className='home-icon text-exl text-md max-sm:text-sm' />

            <div className="title-group flex flex-col justify-around items-center ml-7 ">
              <h1 className=" title-font sm:text-2xl font-extrabold text-black  text-3xl  mb-3 max-sm:text-sm">Les Patients</h1>
              <p className="mb-3 text-black max-sm:text-exsm">890 Patients</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full max-sm:w-1/2 p-1 lg:w-1/3 md:w-2/4 sm:w-2/4 rounded-3xl bg-transparent row">
          <div className=" px-6 py-4 relative backdrop-blur-md bg-opacity-20 bg-green-500 rounded-xl">
            <FaFileMedicalAlt className='home-icon text-exl max-sm:text-sm' />
            <div className="title-group flex flex-col justify-around items-center ml-7">
              <h1 className="title-font sm:text-2xl font-bold text-black  text-3xl mb-3 max-sm:text-sm">Les Analyses</h1>
              <p className="mb-3 text-black max-sm:text-exsm">100 Analyses</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full  p-1 lg:w-1/3 md:w-full rounded-3xl bg-transparent row">
          <div className="px-6 py-4 relative backdrop-blur-md bg-opacity-20 bg-blue-500 rounded-xl">

            <FaCommentMedical className='home-icon text-exl max-sm:text-sm' />
            <div className="title-group flex flex-col justify-around items-center ml-7">
              <h1 className="title-font sm:text-2xl font-bold text-black  text-3xl  mb-3 max-sm:text-sm">Les Consultations</h1>
              <p className="mb-3 text-black max-sm:text-exsm">890 Consultations</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className='flex mt-10 grow flex-nowrap md:flex-wrap max-sm:flex-wrap sm:flex-wrap max-sm:m-1 '>
      <ActualPatient setShowBackDRropAlertMessage={setShowBackDRropAlertMessage} setValueOfBackdrop={setValueOfBackdrop} />
      <NextPatient/>
      </div>
      
      <Table action={true} url="/consultation/"title='Les Consultations' counterName="consultation" data={conts} setShowBackDRropAlertMessage={setShowBackDRropAlertMessage} setValueOfBackdrop={setValueOfBackdrop} />
      <Table action={true} url="/patient-profile/"   title='Les Patients' counterName="patient" data={data} setShowBackDRropAlertMessage={setShowBackDRropAlertMessage} setValueOfBackdrop={setValueOfBackdrop} />
      <Table action={true} title='Les Rendez-Vous' counterName="Rendez-Vous" data={data} setShowBackDRropAlertMessage={setShowBackDRropAlertMessage} setValueOfBackdrop={setValueOfBackdrop} />
      <Chart data={generateRandomData} title='Les Patients' />
      <Chart data={generateRandomData} title='Les Consultations' />
    </div>


  )
}
