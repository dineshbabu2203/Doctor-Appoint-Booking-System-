import React, { useEffect, useState } from 'react'

import DoctorCard from '../../components/doctors/DoctorCard'
import Testimonial from '../../components/testimonial/Testimonial'
import { BASE_URL } from './../../config'
import useFetchData from './../../hooks/useFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'


const Doctors = () => {

  const [query,setQuery] = useState('')
  const [debounceQuery , setDebounceQuery] = useState("");
 
  const handleSearch=()=>{
    setQuery(query.trim())

    console.log('handle search') 
  }

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDebounceQuery(query)

    },700)

    return ()=>clearTimeout(timeout)
  },[query])

  // const {data:doctors , loading , error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery  ? `?query=${debounceQuery}`: ''}`)
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors${debounceQuery ? `?query=${debounceQuery}` : ''}`);

  
  console.log(debounceQuery)
  console.log(doctors)
  

  return (<>
    <section className='bg-[#ebe7e0]'>
      <div className="container text-center">
        <h2 className="heading">Find a Doctor</h2>  
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input type="search" className='py-3 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Doctor by name or specifications' value={query} onChange={e=> setQuery(e.target.value)}/>
           <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>Search</button> 
        </div>
      </div>
    </section>

    <section>
      <div className="container">
      {loading && <Loader/>}
      {error && <Error/>}
      {!loading &&!error && (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>
            {doctors.map(doctor=>(
                <DoctorCard key={doctor._id} doctor={doctor}/>
            ))}

        </div>)}
      </div>
    </section>

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

export default Doctors
