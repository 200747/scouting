import React from 'react'
import arrow from '../../assets/arrow.png'
import Navbar from "../Navbar"


const Q1 = () => {
  return (
    <div name='home' className=' w-full h-screen'>
          <Navbar></Navbar>
        <div>
            <div className='m-0 text-4xl text-center pt-5'>Kwaliteitsbewaking team en activiteitenprogramma</div>
            <div className='m-0 text-4xl text-center pt-5 font-medium'>Belang van de kwaliteit van het activiteitenprogramma.</div>
        </div>

        <div className=' flex gap-8 mt-8 ml-[100px] items-center justify-center text-center'>
            <div className='square leading-[110px] w-[8rem] h-[8rem] rounded-xl'>1</div>
            <div className='square leading-[110px] w-[8rem] h-[8rem] rounded-xl'>2</div>
            <div className='square leading-[110px] w-[8rem] h-[8rem] rounded-xl'>3</div>
            <div className='square leading-[110px] w-[8rem] h-[8rem] rounded-xl'>4</div>
            <div className='square leading-[110px] w-[8rem] h-[8rem] rounded-xl'>5</div>
            <div className='w-32 mr-4'><img src={arrow} alt="Logo" /></div> 
        </div>
      </div>
  );
};

export default Q1