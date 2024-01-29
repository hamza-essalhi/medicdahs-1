// Nurses.js
import React from 'react';
import Nurse from '../Components/Nurse';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';

const data = [
  {
    "firstname": "Fatima",
    "lastname": "El Amrani",
    "address": "123 Rue Casablanca, Rabat",
    "phone": "+212 612345678",
    "gender": "female"
  },
  {
    "firstname": "Ahmed",
    "lastname": "Bouaziz",
    "address": "456 Avenue Marrakech, Casablanca",
    "phone": "+212 678901234",
    "gender": "male"
  },
  {
    "firstname": "Sanaa",
    "lastname": "Ouazzani",
    "address": "789 Boulevard Tangier, Marrakech",
    "phone": "+212 601234567",
    "gender": "female"
  }
];


export default function Nurses() {
  return (
    <div className='flex  mx-2 flex-col nurse'>
      <div className="flex items-center gap-1 mx-3 p-2 url my-2 max-sm:mx-0 max-sm:p-1">
        <FaLink className='icon'/>
      <Link to="/add-nurse" className=' p-3 max-sm:text-sm'>Ajouter un nouvel infirmier</Link>
      </div>
     <div className="flex flex-wrap">
     {data.map((nurse, index) => (
        <Nurse key={index} nurse={nurse} />
      ))}
     </div>
    </div>
  );
}
