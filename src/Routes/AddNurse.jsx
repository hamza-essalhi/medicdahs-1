import React, { useState } from 'react';

export default function AddNurse() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic for posting the new nurse data and handle password-related logic
    console.log('New Nurse Data:', formData);
    // Reset the form after submission
    setFormData({
      firstname: '',
      lastname: '',
      address: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="flex-col addNurseProfile mx-3 my-1 flex p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max">

      <form className="row flex flex-col p-4 backdrop-blur-md items-center justify-center w-60% max-sm:w-full mt-1" onSubmit={handleFormSubmit}>
      <h1 className='text-3xl max-sm:text-sm p-4 m-3'>Ajouter un nouvel infirmier</h1>
        <div className='w-full flex gap-3 p-3  max-sm:text-exsm items-center '>
          
          <label htmlFor="firstname" className='w-30%'>
            Nom
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            placeholder='Ahmed ...'
          />
        </div>
        <div className='w-full flex gap-3 p-3 items-center max-sm:text-exsm'>
          <label htmlFor="lastname" className='w-30%'>
            Nom de famille
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            placeholder='Ghani...'
          />
        </div>
        <div className='w-full flex gap-3 p-3 items-center max-sm:text-exsm'>
          <label htmlFor="address" className='w-30%'>
            Adresse
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder='Anfa Rue 21 ...'
          />
        </div>
        <div className='w-full flex gap-3 p-3 items-center max-sm:text-exsm'>
          <label htmlFor="phone" className='w-30%'>
            Téléphone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='0600000000...'
          />
        </div>
        <div className='w-full flex gap-3 p-3 items-center max-sm:text-exsm'>
          <label htmlFor="password" className='w-30%'>
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Mot de passe...'
          />
        </div>
        <div className='w-full flex gap-3 p-3 items-center max-sm:text-exsm'>
          <label htmlFor="confirmPassword" className='w-30%'>
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder='Mot de passe...'
          />
        </div>
        <div className='flex justify-center w-full my-6'>
          <button type="submit" className='btn max-sm:text-exsm text-md bg-green-400'>
            Ajouter l'infirmière
          </button>
        </div>

      </form>
    </div>
  );
}
