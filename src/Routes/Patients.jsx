import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import Patient from '../Components/Patient';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Loading from '../Components/Loading';
import data from '../data.json';
import NotFoundUserPage from './NotFoundUserPage';

export default function Patients() {
  const [patientData, setPatientData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const observer = useRef();

  const lastPatientRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchMoreData();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const fetchMoreData = () => {
    // Simulate fetching more data (you can replace this with your actual data fetching logic)
    setLoading(true);
    setTimeout(() => {
      const newData = data.slice(page * 10, (page + 1) * 10);
      setPatientData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
      setHasMore(newData.length > 0);
    }, 300); // Simulated delay for demo purposes
  };

  const handleSearch = () => {
    const filtered = data.filter((patient) =>
      patient.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
    );

    setFilteredData(filtered);
  };

  useEffect(() => {
    // Set the initial data from the imported JSON file
    const initialData = data.slice(0, 10);
    setPatientData(initialData);
  }, []);

  useEffect(() => {
    // Update filtered data when the search term changes
    handleSearch();
  }, [searchTerm]);

  return (
    <div className={`flex mx-2 flex-col patients`}>
      <div className={`flex items-center justify-between gap-1 mx-3 p-2 url my-2 max-sm:mx-0 max-sm:p-1 max-sm:flex-col`}>
        <div className={`max-sm:order-1 flex items-center gap-1 mx-3 p-2 my-2 max-sm:mx-0 max-sm:p-1`}>
          <FaLink className={`icon`} />
          <Link to="/add-patient" className={`p-3 max-sm:text-sm`}>Ajouter un nouvel Patient</Link>
        </div>
        <div className='max-sm:order-3 bg-white counter max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center my-2 '>
          {filteredData.length > 1 ? <span className=' w-40% max-sm:text-exsm active-color'>{filteredData.length} Patients Trouvés
          </span> : <span className=' w-40% max-sm:text-exsm active-color'>{filteredData.length} Patient Trouvé
          </span>}
        </div>
        <div className={`w-60% flex items-center gap-2 max-sm:w-full max-sm:my-2 max-sm:order-2`}>

          <input
            type="text"
            placeholder={`Chercher...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=' max-sm:text-exsm'
          />
          <select name={``} id={``}>
            <option value={``}></option>
          </select>
        </div>
        <div>

        </div>
      </div>
      {
        filteredData.length > 0 ? <div className={`flex flex-wrap`}>
          {(searchTerm ? filteredData : patientData).map((patient, index) => (
            <Patient key={index} patient={patient} forwardedRef={index === (searchTerm ? filteredData.length - 1 : patientData.length - 1) ? lastPatientRef : null} />
          ))}
          <div>
            {loading && <Loading />}
          </div>
        </div> : <NotFoundUserPage message="Aucun Patient Trouvé"/>
      }


    </div>
  );
}
