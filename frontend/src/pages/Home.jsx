import React from 'react';
import heroImg01 from '../assets/images/hero-img011.png';
import heroImg02 from '../assets/images/hero-img022.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import featureImg from '../assets/images/feature-img.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import videoIcon from '../assets/images/video-icon.png';
import faqImg from '../assets/images/faq-img.png'

import About from '../components/about/About.jsx';
import ServiceList from '../components/services/ServiceList.jsx';
import DoctorList from '../components/doctors/DoctorList.jsx';
import FaqList from '../components/faq/FaqList.jsx';
import Testimonial from '../components/testimonial/Testimonial.jsx';

const Home = () => {
  return (
    <>
      <section className='hero__section pt-[10px] 2xl:h-[700px] '>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leadig-[46px] text-stone-900 font-[800] md:text-[60px] md:leading-[70px]'> Empowering Patients to Lives, Longer Lives</h1>
                <p className='text__para'>
                We are dedicated to helping patients live healthier, longer lives by providing expert medical guidance, advanced healthcare solutions, and personalized support. Our platform connects you with trusted professionals, innovative treatments, and reliable health resources to ensure your well-being at every stage of life

                </p>
                <button className='btn' >
                  Request an Appointment
                </button>

              </div>
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] '>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para '> Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para '> Clinic Locations</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para '> Patient Satisfaction</p>
                </div>
              </div>
            </div>
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-max h-[550px] mb-5 rounded-lg' src={heroImg01} alt="" />
              </div>
              <div>
                <img className='w-full mb-[30px]' src={heroImg03} alt="" />
                <img className='w-[250px] h-[250px]  rounded-lg' src={heroImg02} alt="" />
              </div>
            </div>

          </div>
        </div>

      </section>

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the best medical services </h2>
            <p className='text__para text-center'> World- class care for
              everyone. Our Healt Sysytem Offers unMAtched, expert health care.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-0 text-headingColor font-[700] text-center'>
                  Find A doctor
                </h2>
                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center'>
                  World-center care for evryone.Our Healt System Offers
                  unmatched, expert health care. From the lab to the clinic
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                   mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>



            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-0 text-headingColor font-[700] text-center'>
                  Find a Location
                </h2>
                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center'>
                  World-center care for evryone.Our Healt System Offers
                  unmatched, expert health care. From the lab to the clinic
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                   mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>



            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-0 text-headingColor font-[700] text-center'>
                  Book an Appointment
                </h2>
                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center'>
                  World-center care for evryone.Our Healt System Offers
                  unmatched, expert health care. From the lab to the clinic
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                   mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>



            </div>
          </div>


        </div>



      </section>
      <About />

      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto' >
            <h2 className='heading  text-center'> Our medical services </h2>
            <p className='text__para text-center'>
              World-class care for Everyone. Our health system offers unmatched,
              expert health care.

            </p>

          </div>
          <ServiceList />
        </div>

      </section>


      <section>
        <div className="container p-4">
          <div className='flex items-center justify-between flex-col lg:flex-row '>
            {/*  feature content*/}
            <div className='xl:w-[670px]'>
              <h2 className='heading  leading-8'> Get virtual treatment <br /> anytime.</h2>
              <ul className='pl-4 leading-10 '>
                <li className="text__Para pt-5 ">1. Scedule the appointment directly </li>
                <li className="text__Para">2. Search for your physcian here, and contact their office. </li>
                <li className="text__Para">3. View our Physicians who are accepting new patients, use the online scheduling tool to select an appointment time. </li>


              </ul>
              <Link to="/"> <div className="btn w-max">Learn more</div></Link>
            </div>
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w-3/4' alt="" />
              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] '>

                <div className='flex items-center justify-between '>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'> Tue,24</p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'> 10.00Am</p>

                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex  items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                  consultation
                </div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]' >
                  <img src={avatarIcon} alt="" />
                  <h2 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'> Adam Smith</h2>

                </div>



              </div>

            </div>
          </div>

        </div>
      </section>


      { /*   doctors*/}

      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto' >
            <h2 className=' heading  text-center'> Our Doctors </h2>
            <p className='text__para text-center'>
              World-class care for Everyone. Our health system offers unmatched,
              expert health care.

            </p>


          </div>
          <DoctorList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
                 <img src={faqImg} alt="" />
            </div>

            <div className='w-full md:w-1/2'>
              <h2 className='heading'> Most questions by our beloved patients </h2>
              <FaqList/>     
            </div>

          </div>
        </div>
      </section>

      {/* testimonial */ }
      <section>
      <div className="container">
          <div className='xl:w-[470px] mx-auto' >
            <h2 className=' heading  text-center'> what our Paitents Say</h2>
            <p className='text__para text-center'>
              World-class care for Everyone. Our health system offers unmatched,
              expert health care.

            </p>


          </div>
          <Testimonial/>
          
        </div>
      </section>
      



    </>
  )
}

export default Home;
