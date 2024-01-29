import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import consultation from '../Components/Consultation';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Loading from '../Components/Loading';
import data from '../const.json';
import NotFoundUserPage from './NotFoundUserPage';
import Consultation from '../Components/Consultation';

export default function Consultations() {
  const [consultationData, setConsultationData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const observer = useRef();

  const lastConsultationRef = useCallback(
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
      setConsultationData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
      setHasMore(newData.length > 0);
    }, 300); // Simulated delay for demo purposes
  };

  const handleSearch = () => {
    const filteredData = data.filter((consultation) =>
    consultation.price.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultation.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultation.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultation.date.toLowerCase().includes(searchTerm.toLowerCase())
  );


    setFilteredData(filteredData);
  };

  useEffect(() => {
    // Set the initial data from the imported JSON file
    const initialData = data.slice(0, 10);
    setConsultationData(initialData);
  }, []);

  useEffect(() => {
    // Update filtered data when the search term changes
    handleSearch();
  }, [searchTerm]);

 // ...

return (
  <div className={`flex mx-2 flex-col consultations`}>
    <div className={`flex items-center justify-between gap-1 mx-3 p-2 url my-2 max-sm:mx-0 max-sm:p-1 max-sm:flex-col`}>
      <div className={`max-sm:order-1 flex items-center gap-1 mx-3 p-2 my-2 max-sm:mx-0 max-sm:p-1`}>
        <FaLink className={`icon`} />
        <Link to="/add-consultation" className={`p-3 max-sm:text-sm`}>Ajouter un nouvel consultation</Link>
      </div>
      <div className='max-sm:order-3 bg-white counter max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center my-2 '>
        {filteredData.length > 1 ? <span className=' w-40% max-sm:text-exsm active-color'>{filteredData.length} consultations Trouvés
        </span> : <span className=' w-40% max-sm:text-exsm active-color'>{filteredData.length} consultation Trouvé
        </span>}
      </div>
      <div className={`w-50% flex items-center gap-2 max-sm:w-full max-sm:my-2 max-sm:order-2`}>

        <input
          type="text"
          placeholder={`Chercher...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=' max-sm:text-exsm'
        />
        <select name={``} id={``} className=' max-sm:text-exsm'>
          <option value={``}></option>
        </select>
      </div>
      <div></div>
    </div>
    {
      filteredData.length > 0 ? (
        <div className={`flex flex-wrap`}>
          {(searchTerm ? filteredData : consultationData).map((consultation, index) => (
            <Consultation key={index} consultation={consultation} forwardedRef={index === (searchTerm ? filteredData.length - 1 : consultationData.length - 1) ? lastConsultationRef : null} />
          ))}
          <div>
            {loading && consultationData.length > 4 && <Loading />}
          </div>
        </div>
      ) : (
        <NotFoundUserPage message="Aucun consultation Trouvé"/>
      )
    }
  </div>
);

}
