import React, { useState } from 'react'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import Tabs from './Tabs'
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from '../../pages/doctor/DoctorAbout'
import Profile from './Profile'
import Appointments from './Appointments'

const Dashboard = () => {

  const profile = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  ) || {};

  console.log(profile)

  const {data={} ,loading,error} = profile
  console.log(data)

  const [tab, setTab] = useState('overview')

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto ">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}

        {!loading && !error && (
          <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
            <Tabs tab={tab} setTab={setTab} />
            <div className='lg:col-span-2'>
              {data.isApproved == 'approved' && (<div className='flex p-2 mb-4 text-yellow-500 bg-orange-50 rounded-lg'>
                <svg
                  aria-hidden="true"
                  className='flex-shrink-0 w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                > <path fillRule="evenodd"
                        d='M18 10a8 8 11-16 0 8 8 0 0116 0zm-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                ></path>

                </svg>
                <span className='sr-only'>Info </span>
                {/* <div className='ml-3 text-sm font-medium'>To get approval please complete your profile we&apos;ll review manually and approve within 3days</div> */}

              </div>)}

              <div className='mt-8'>
                {tab=='overview' && <div>
                  <div className='flex items-center gap-4 mb-10'>
                    <figure className=''>
                         <img src={data?.photo} alt="" className='w-full max-w-[200px] max-h-[200px]'/>
                    </figure>

                    <div>
                      <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'>{data.specialization} </span>
                      <h3 className='trxt-[22px] leading-9 font-bold text-headingColor'>{data.name} </h3>

                      <div className="flex items-center gap-[6px]">
                        <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] font-semibold'>
                          <img src={starIcon} alt="" />
                          {data.averageRating}
                        </span>
                        <span className='  gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] font-semibold'>
                         ({data.totalRating})
                          
                        </span>
                      </div>
                      <p className='text__para font-[15px] lg:max-w-[390px] leading-6' > {data?.bio}  </p>
                    </div>
                  </div>
                  <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences} />
                  
                  </div>}
                {tab=='appointments' && (<Appointments appointments={data.appointments}/>)}
                {tab=='settings' &&<Profile doctorData={data}/>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Dashboard
