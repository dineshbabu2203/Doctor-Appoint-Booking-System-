import React from 'react'
import convertTime from '../../utils/convertTime'
import { BASE_URL } from '../../config'
import { toast } from 'react-toastify'
import { token } from '../../config'

const SidePanel = ({doctorId , ticketPrice , timeSlots}) => {

    const bookingHandler = async()=>{
        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
                method:"POST",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            const data = await res.json()

            if(!res.ok){
                throw new Error(data.message + 'please try again')

            }

            if(data.session.url){
                window.location.href = data.session.url
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className="flex items-center justify-between"> 
            <p className='text__para mt-0 font-semibold '>
                Ticket Price
            </p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor '>{ticketPrice} USD</span>
        </div>
            
        <div className="mt-[30px]">
            <p className='text__para mt-0 '>
                Available Time Slots:
            </p>

            <ul className='mt-3'>
                {timeSlots?.map((item,index)=>(
                     <li key={index} className='flex items-center justify-between mb-2'>
                     <p className='text-[15px] leading-6 text-textColor font-semibold'>
                           {/* {item.day.chartAt(0).toUpperCase() + item.day.slice(1)} */}
                           {item.day && typeof item.day === 'string' ? item.day.charAt(0).toUpperCase() + item.day.slice(1) : 'N/A'}
                     </p>
                     <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        {convertTime(item.startingTime)} - {" "}
                        {convertTime(item.endingTime)}
                     </p>
                 </li>

                ))}
               
               
            </ul>
            <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'> Book Appointment</button>
        </div>


    </div>
  )
}

export default SidePanel
