import React from 'react'
import arrow from '../../assets/arrow.png'
import arrow2 from '../../assets/arrow2.png'
import Navbar from "../Navbar"


const Q3 = () => {
  return (
    <div name='home' className=' w-full h-screen'>
          <Navbar></Navbar>
        <div>
            <div className='m-0 text-4xl text-center pt-5'>Vertegenwoordiging team binnen en buiten groep</div>
            <div className='m-0 text-4xl text-center pt-5 font-medium'>Actief participeren in overleg met eigen inbreng en afstemmig.</div>
        </div>
        
    <div className=''>
      <div className=''>
      <div className='float-left mt-12 ml-8 mr-8'><a href="Q2"><img src={arrow2} alt="Arrow2" /></a></div>
      <div className='float-right mt-12 ml-8 mr-8'><a href="Scoreoverzicht"><img src={arrow} alt="Arrow" /></a></div>
      </div>
      <div className='aaa grid grid-cols-5 mt-8 text-center'>
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

export default Q3