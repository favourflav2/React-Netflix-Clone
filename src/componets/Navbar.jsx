import { async } from '@firebase/util';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';

export default function Navbar() {
  const {logIn,setUser,user,logOut,signUp} = useAuthContext();
  const navigate = useNavigate()
  //console.log(user)

  async function handleLogOut(){
    try{
      await logOut()
      navigate('/login')
    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute' >
        <Link to='/React-Netflix-Clone/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-auto'>NETFLIX</h1> 
        </Link>

      {user?.email ? 
      <div>
      <Link to='/React-Netflix-Clone/account'><button className='text-white pr-4'>Account</button></Link>
      <button onClick={handleLogOut} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Out</button>
      
    </div>
      : 
      <div>
        <Link to='/React-Netflix-Clone/login'><button className='text-white pr-4'>Sign In</button></Link>
        <Link to='/React-Netflix-Clone/signup'><button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button></Link>
        
      </div>
      }
    </div>
  )
}
