import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../config'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext.jsx'
import { HashLoader } from 'react-spinners'

const Loginn = () => {


  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      

      if (!res.ok) {
        throw new Error(data.message);
      }


      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: data.data,
          token: data.token,
          role: data.role,
        },
      })

      console.log(data, 'login data')

      setLoading(false);
      toast.success(data.message);
      navigate('/Home');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };


  return (
    <section className='px-5 lg:px-0 '>
      <div className="w-full max-w-[470px] mx-auto rounded-lg shadow-md md:p-10 sm:p-6  ">
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10' >
          Hello! <span className='text-primaryColor'>Welcome</span>Back
        </h3>
        <form action="" className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className="mb-5">
            <input type="email"
              placeholder='Enter your Email'
              name="email" value={formData.email}
              onChange={handleInputChange} required
              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61]
             focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
             placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
          <div className="mb-5">
            <input type="password"
              placeholder='Enter your pasword'
              name="password" value={formData.password}
              onChange={handleInputChange} required
              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61]
             focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
             placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
          <div className='mt-7'>
            <button type="submit"
              className='w-full bg-primaryColor text-white text-[16px] leading-[30px] rounded-lg px-4 py-3'>
              {/* {loading ? <HashLoader size={25} color='#ffffff'/> :"Login"} */}
              {loading ? (
              
                  <HashLoader size={25} color="#ffffff" />
                
              ) : (
                'Login'
              )}

            </button>

            <p className='mt-5 text-headingColor text-center'>
              Don&apos;t have an account? <Link to="/register" className='text-primaryColor font-medium ml-1'>Register</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Loginn;
