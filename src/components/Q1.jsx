import React from 'react'
import arrow from '../assets/arrow.png'
import Navbar from "./Navbar"


const Q1 = () => {
  return (
    <div name='home' className=' w-full h-screen'>
          <Navbar></Navbar>
        <div>
            <div className='m-0 text-4xl text-center pt-5'>Kwaliteitsbewaking team en activiteitenprogramma</div>
            <div className='m-0 text-4xl text-center pt-5 font-medium'>Belang van de kwaliteit van het activiteitenprogramma.</div>
        </div>
        
    <div className=''>
      <div className=''>
      <div className='float-left mt-12 ml-8 mr-8 rah'><a href="/"><img src={arrow} alt="Arrow" /></a></div>
      <div className='float-right mt-12 ml-8 mr-8'><a href="Q2"><img src={arrow} alt="Arrow" /></a></div>
      </div>
      <div className='aaa grid grid-cols-5 mt-8 gap-2 text-center'>
            <div className='square hehe   leading-[160px]  h-[11rem] mt-8 rounded-xl'>1</div >
            <div className='square hehe   leading-[160px]  h-[11rem] mt-8 rounded-xl'>2</div>
            <div className='square hehe   leading-[160px]  h-[11rem] mt-8 rounded-xl'>3</div>
            <div className='square hehe  leading-[160px]  h-[11rem] mt-8 rounded-xl'>4</div>
            <div className='square hehe  leading-[160px]  h-[11rem] mt-8 rounded-xl'>5</div>
        </div>
        </div>
    </div>
  );
};

export default Q1