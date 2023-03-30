import React from 'react'
import arrow from '../../assets/arrow.png'
import arrow2 from '../../assets/arrow2.png'
import Navbar from "../Navbar"


const Scoreoverzicht = () => {
  return (
    <div name='home' className=' w-full h-screen'>
          <Navbar></Navbar>
        <div>
            <div className=' text-6xl mt-1 text-center pt-5'>Score overzicht</div>
        </div>

      <div className=''>
      <div className=''>
        <div className='float-left mt-12 ml-8 mr-8'><a href="Q3"><img src={arrow2} alt="Arrow2" /></a></div>
        <div className='float-right mt-12 ml-8 mr-8'><a href="Totaal"><img src={arrow} alt="Arrow" /></a></div>
      </div>
      <table className='w-[40%] mt-8'>
        <tr>
          <th className='w-24'>Max #</th>
          <th className='w-24'>Jouw #</th>
          <th className='w-24'>%</th>
          <th className='invisible'></th>
          <th className='haha2'>Hoofdtaken</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th className='haha'>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr><br></br>
        <tr>
        <th className='w-24'>Max #</th>
          <th className='w-24'>Jouw #</th>
          <th className='w-24'>%</th>
          <th className='invisible'></th>
          <th className='haha2'>Modulen</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
      </table>
    </div>
    </div>
  );
};

export default Scoreoverzicht