import React from 'react'
import arrow from '../../assets/arrow.png'
import arrow2 from '../../assets/arrow2.png'
import Navbar from "../Navbar"


const Q2 = () => {
  return (
    <div name='home' className=' w-full h-screen'>
          <Navbar></Navbar>
        <div>
            <div className='m-0 text-4xl text-center pt-5'>Kwaliteitsbewaking team en activiteitenprogramma</div>
            <div className='m-0 text-4xl text-center pt-5 font-medium'>Belang van de kwaliteit van het activiteitenprogramma.</div>
        </div>

    <div className='relative'>
      <div className='float-left mt-16 pr-12 ml-8 mr-8'><a href="/"><img src={arrow2} alt="Arrow2" /></a></div>
      <div className='float-right mt-16 ml-8 mr-8'><a href="Q3"><img src={arrow} alt="Arrow" /></a></div>
      <section className='aaa grid grid-cols-5 mt-8 text-center'>
            <div className='square leading-[160px] w-[11rem] h-[11rem] mt-8 rounded-xl'>1</div>
            <div className='square leading-[160px] w-[11rem] h-[11rem] mt-8 rounded-xl'>2</div>
            <div className='square leading-[160px] w-[11rem] h-[11rem] mt-8 rounded-xl'>3</div>
            <div className='square leading-[160px] w-[11rem] h-[11rem] mt-8 rounded-xl'>4</div>
            <div className='square leading-[160px] w-[11rem] h-[11rem] mt-8 rounded-xl'>5</div>
        </section>
        </div>
    </div>
  );
};

export default Q2