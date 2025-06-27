import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children , allowedRoles}) => {

    const {token , role} = useContext(AuthContext)
    console.log(token , role)

    const isAllowed = allowedRoles.includes(role)

    const accessibleRoute = token && isAllowed ? children :<Navigate to='/login' replace={true}/>


  return accessibleRoute
}

export default ProtectedRoute
