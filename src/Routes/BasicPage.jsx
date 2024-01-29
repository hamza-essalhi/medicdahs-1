import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import conts from '../const.json';
import {Link} from "react-router-dom"
export default function BasicPage() {
    const { id } = useParams();
    const [consultation, setConsultation] = useState(null);
    const [formattedDate, setFormattedDate] = useState('');

   
    useEffect(() => {
        // Find the consultation with the specified id from data.json
        const foundConsultation = conts.find((p) => p.id === parseInt(id));

        // Update the state with the found consultation and patient
        setConsultation(foundConsultation);
        const currentDate = new Date();
  
        // Format the date in the desired format (MM/DD/YYYY)
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Note: Month is zero-based
        const year = currentDate.getFullYear();
    
        // Create the formatted date string
        const formattedDateString = `${month}/${day}/${year}`;
    
        // Set the formatted date in the state
        setFormattedDate(formattedDateString);
    }, [id, data, conts]);

    const downloadAsPDF = async () => {
        window.print()
      };

    return (
       <>
       
        <div className='flex flex-col  p-1 basicPage'>
           <nav className='hide-on-print flex gap-4 p-4'>
           
           <Link to={"/consultation/"+id}>Retourner</Link>
           <Link to={"/"}>Home</Link>
           <Link to={"/consultations"}>Consultations</Link>
           <Link to={"/patient"}>Patients</Link>
           </nav>
           
            <h1 className='p-4 border-2 border-black w-full max-sm:text-exsm flex justify-center'>FORMULAIRE DE CONSULTATION</h1>
            <div className='header w-30% px-2 py-4 border-2 border-black my-2 max-sm:w-full max-sm:text-exsm' >
                <h1>Dr.Houda Tazi</h1>
                <h1><span>Date d'admission</span> <span>{consultation?.date}</span></h1>
            </div>
            <div div className='w-full max-sm:text-exsm py-4'>
                <h1 className='w-full max-sm:text-exsm'>OBJET DE CONSULTATION ET NOTES CLINIQUES (y compris les enquêtes et les résultats): </h1>
                <span className='report '></span>
            </div>
            <div div className=' border-black border-b-2  py-10'>
                <div className='flex w-full max-sm:text-exsm items-center gap-2 justify-start'>
                    <h1 className=''>Diagnostic/problèmes provisoires: </h1>
                    <span className=' '></span>
                </div>

            </div>
            <h1 className='py-4 w-full max-sm:text-exsm flex justify-center'>RAPPORT DU CONSULTANT</h1>
            <div div className='w-full max-sm:text-exsm py-4 '>
                <div className=' flex'>
                    <h1>RÉSULTATS :</h1>
                    <span>{consultation?.recommendations}</span>
                </div>

            </div>
            <div div className='w-full max-sm:text-exsm py-4 '>

                <div className=' flex'>
                    <h1>RECOMMENDATIONS :</h1>
                    <span>{consultation?.observations}</span>
                </div>


            </div>
            <div div className='w-full max-sm:text-exsm py-4 flex justify-between '>
                <div className='report flex'>
                    <h1>Nom du consultant :</h1>
                    <span>{consultation?.firstname} {consultation?.lastname}</span>
                </div>
                <div className='report flex'>
                    <h1>Signature :</h1>
                    <span></span>
                </div>
                <div className='report flex'>
                    
                    <span>{formattedDate}</span>
                </div>


            </div>
          <div className='hide-on-print w-full flex justify-end p-4'>
          <button className='mx-6 p-4 bg-green-700 rounded-lg text-white' onClick={downloadAsPDF}>telecharger</button>
          </div>
        </div></>
    );
}
