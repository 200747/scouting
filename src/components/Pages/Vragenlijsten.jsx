import React from 'react'
import arrow from '../../assets/arrow.png'
import arrow2 from '../../assets/arrow2.png'
import Navbar from "../Navbar"


const Vragenlijsten = () => {
  return (
    <div name='home' className=' w-full h-screen'>
          <Navbar></Navbar>
        <div>
            <div className=' text-6xl mt-2 text-center pt-5'>Vragenlijsten</div>
        </div>

      <div className=''>
      <div className=''>
        <div className='float-left mt-12 ml-8 mr-8'><a href="Totaaltaak"><img src={arrow2} alt="Arrow2" /></a></div>
        <div className='float-right mt-12 ml-8 mr-8'><a href="Vragenlijsten"><img src={arrow} alt="Arrow" /></a></div>
      </div>
    </div>
    </div>
  );
};

export default Vragenlijsten