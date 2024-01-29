import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function CusCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
    console.log(newDate)
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} prev2Label={<FaAngleDoubleLeft/>}  prevLabel={<FaChevronLeft />}  next2Label={<FaAngleDoubleRight /> } nextLabel={<FaChevronRight />} />
    </div>
  );
}

export default CusCalendar;
