import React from 'react';


export default function Nurse({ nurse }) {




 

  return (
    <div className="flex-1 flex-col nurseProfile mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max max-sm:p-0">
      
      {
        nurse.gender === "female" ? <img src="/img/nurse.png" alt="" className='w-100px max-sm:w-50px mt-10' /> :<img src="/img/nurse-men.png" alt="" className='w-100px max-sm:w-50px mt-10'/>
      }
      <form className="row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1">
        {/* Display nurse information here using the 'nurse' prop */}
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm'>
          <label htmlFor="firstname" className='flex-1'>
            Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={nurse.firstname}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm'>
          <label htmlFor="lastname" className='flex-1'>
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={nurse.lastname}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm'>
          <label htmlFor="address" className='flex-1'>
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={nurse.address}
            readOnly
          />
        </div>
        <div className='w-full flex gap-3 p-3 max-sm:text-exsm'>
          <label htmlFor="phone" className='flex-1'>
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={nurse.phone}
            readOnly
          />
        </div>
        <div className='flex justify-center w-full'>
        
        
      </div>
      </form>
    </div>
  );
}
