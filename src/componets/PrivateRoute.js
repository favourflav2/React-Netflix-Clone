import React from 'react'
import { useAuthContext } from '../context/AuthContext';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
    const {logIn,setUser,user,logOut,signUp} = useAuthContext();
  return (
    user ? <Outlet /> : <Navigate to='/signup' />
  )
}
