import { async } from '@firebase/util';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function Signup() {
    const {logIn,setUser,user,logOut,signUp} = useAuthContext();
    const [input, setInput] = React.useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()

    function handleChange(e){
        
        setInput(item=>{
            return {
                ...item,
                [e.target.id]: e.target.value
            }
        })
    }
    

    async function handleSubmit(e){
        e.preventDefault()

        try{
            await signUp(input.email,input.password)
            navigate('/')
        }catch(error){
            console.log(error.message)
        }
    }
  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/ac0ea14f-42d2-4403-a631-16ccc52d91b1/US-en-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />

        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={(e)=>handleSubmit(e)} className='w-full flex flex-col py-4'>
                        <input onChange={(e)=>handleChange(e)} value={input.email} id='email' className='p-3 my-2 bg-gray-700 rounded' type="text" autoComplete='email' placeholder='Email'/>
                        <input onChange={(e)=>handleChange(e)} value={input.password} id='password' className='p-3 my-2 bg-gray-700 rounded' type="password" autoComplete='current-password' placeholder='Password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type="checkbox" />Remember Me?</p>
                            <p>Need Held?</p>
                        </div>
                        <p className='py-4 '><span className='text-gray-600 mr-2'>Already subscribed to Netflix?</span><Link to='/React-Netflix-Clone/login'>Log In</Link></p>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
