import useFetchData from "../../hooks/useFetchData"
import DoctorCard from './../../components/doctors/DoctorCard'
import Loading from "../../components/Loader/Loading"
import Error from "../../components/Error/Error"
import { BASE_URL } from "../../config"
const MyBookings = () => {

  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (<div>
        {
          appointments.map(doctor => <DoctorCard doctor={doctor} key={doctor._id} />)
        }

      </div>)}


      {!loading && !error && appointments.length==0 && <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor"> You did not book yet </h2>}
    </div>
  )
}

export default MyBookings
