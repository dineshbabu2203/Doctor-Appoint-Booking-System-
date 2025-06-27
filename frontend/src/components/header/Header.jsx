import React, { useEffect, useRef, useContext } from 'react'

import { NavLink, Link } from 'react-router-dom';

import { BiMenu } from 'react-icons/bi';
import { AuthContext } from '../../context/AuthContext';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const { user, role, token } = useContext(AuthContext)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current?.classList.add('sticky__header')
      } else {
        headerRef.current?.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()
    toggleMenu()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  });

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('show__menu');
    } else {
      console.error('menuRef.current is undefined!');
    }
  };
  return (
    <header className='header flex items-center' ref={headerRef} onClick={toggleMenu}>
      <div className="container">
        <div className='flex items-center justify-between'>
          <div>
            {/* <img src={logo} alt="logo" /> */}
            <h1 className='font-bold text-3xl'><span className=' text-primaryColor text-5xl'>+</span>HealthSync</h1>
          </div>

          <div className="navigation">
            <ul ref={menuRef} className='menu flex items-center gap-[2.7rem]' >
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path} className={navClass => navClass.isActive
                      ? "text-primaryColor text-[16px] leading-7 font-[600]"
                      : "text-textColor text-[16px] leading-7 font-[500] hover:text-blue-600"
                    }>
                      {link.display}
                    </NavLink>
                  </li>
                ))
              }

            </ul>
          </div>
          <div className='flex items-center gap-4'>

            {
              token && user ? <div>
                <Link to={`${role==='doctor'? '/doctors/profile/me' : './users/profile/me' }`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={user?.photo || 'path/to/default/photo'} className='w-full rounded-full' alt="" />
                  </figure>
                
                </Link>
              </div> : <Link to="/login">
                <button className='bg-blue-600 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
              </Link>
            }




            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />

            </span>


          </div>
        </div>
      </div>

    </header>
  )
}



export default Header;

