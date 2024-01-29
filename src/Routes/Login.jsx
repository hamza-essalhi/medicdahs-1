import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic for handling login (authentication)
    console.log('Login Data:', formData);
    // Reset the form after submission
    setFormData({
      email: '',
      password: '',
      remember: false,
    });
  };

  return (
    <div className=" auth  flex items-center justify-center max-sm:min-w-full max-sm:m-0  min-w-max bg-img max-sm:justify-normal ">
      
      <form className="row flex flex-col p-4 backdrop-blur-md items-center justify-center md:w-60% lg:w-40% max-sm:w-full mt-1 max-sm:my-32 mx-2 max-sm:rounded-lg drop-shadow-sm" onSubmit={handleFormSubmit}>
        <h1 className='text-3xl max-sm:text-sm p-4 m-3'>Connexion</h1>
        <div className='w-full flex gap-3 p-3  max-sm:text-exsm items-center '>
          <label htmlFor="email" className='w-30%'>
            Email
          </label>
          <input
            type="email"  // Use type="email" for better validation
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='exemple@mail.com'
            required  // Add "required" for HTML5 validation
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
            required
          />
        </div>
        <div className='w-full flex gap-3 p-3 items-center max-sm:text-exsm'>
          <label htmlFor="remember" className='w-30%'>
            Se souvenir de moi
          </label>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            checked={formData.remember}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex justify-center w-full my-6'>
          <button type="submit" className='btn max-sm:text-exsm text-md bg-green-400'>
            Se connecter
          </button>
        </div>
      </form>
    </div>
  )}
