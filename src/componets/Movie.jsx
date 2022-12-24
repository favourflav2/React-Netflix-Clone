import React from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { useAuthContext } from '../context/AuthContext';
import { db } from '../firebase-config';
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
import { async } from '@firebase/util';

export default function Movie({item}) {
  const {logIn,setUser,user,logOut,signUp} = useAuthContext();
  const [like, setLike] = React.useState(false)
  const [saved,setSaved] = React.useState(false)

  const movieId = doc(db,'users',`${user?.email}`)

  async function saveMovie(){
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieId,{
        savedShows:arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    }else{
      alert("Please Log In To Save A Movie")
    }
  }

  return (
    <div  className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                {like? 
                (<div className='absolute top-0 left-0 w-full h-full hover:bg-black/80        text-red-600'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}<br></br>Rating: {item?.vote_average}</p>
                <p onClick={saveMovie}>
                    {like? <FaHeart className='absolute top-4 left-4 text-gray-300' />: <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                </p>
        </div>)

                :
                
                (<div className='absolute top-0 left-0 w-full h-full hover:bg-black/80    opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}<br></br>Rating: {item?.vote_average}</p>
                <p onClick={saveMovie}>
                    {like? <FaHeart className='absolute top-4 left-4 text-gray-300' />: <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                </p>
        </div>)}
                </div>
  )
}


{/* <div  className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80    opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}<br></br>Rating: {item?.vote_average}</p>
                        <p onClick={saveMovie}>
                            {like? <FaHeart className='absolute top-4 left-4 text-gray-300' />: <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                        </p>
                </div>
                </div> */}