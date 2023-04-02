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
        <div className='float-left  mt-12  ml-8 mr-8 ger'><a href="Totaaltaak"><img src={arrow2} alt="Arrow2" /></a></div>
        <div className='float-right  mt-12  ml-8 mr-8 gor rah'><a href="Vragenlijsten"><img src={arrow} alt="Arrow" /></a></div>
      </div>
      <table className='gah relative mt-12 border-spacing-x-8'>
        <tr className=''>
          <td className='vragen w-64 h-72 align-top text-center text-2xl'>Q-TL BWS competentieroos<br></br> <br></br>ingevuld</td>
          <td className='vragen w-64 h-72 align-top text-center text-2xl'>Q-TL BWS competentieroos<br></br> <br></br>ingevuld</td>
        </tr>
      </table>
    </div>
  </div>
  );
};

export default Vragenlijsten