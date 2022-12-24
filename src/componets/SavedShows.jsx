import React from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { useAuthContext } from '../context/AuthContext';
import { db } from '../firebase-config';
import {arrayUnion, doc, onSnapshot, updateDoc} from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'
import { async } from '@firebase/util';

export default function SavedShows() {
    const [movies, setMovies] = React.useState([])
    const {logIn,setUser,user,logOut,signUp} = useAuthContext();


    React.useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows)
        })
    },[user?.email])

    function slideRight(){
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
        
    }
    function slideLeft(){
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500
        
    }
    const movieRef = doc(db,'users',`${user?.email}`)
    
    async function deleteShow(id){
        try{
            const result = movies.filter(item=> item.id !== id)
            await updateDoc(movieRef,{
                savedShows: result
            })
        }catch(error){
            console.log(error.message)
        }
    }

  return (
    <>
      <h2 className='text-white font-bold md:text-x4 p-4'>My Shows</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft  onClick={slideLeft} size={40} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item,index)=>{
                return <div  key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80    opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                        <p onClick={()=>deleteShow(item.id)} className='absolute text-gray top-4 right-4'><AiOutlineClose /></p>
                        
                </div>
                </div>
            })}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'  />
    </div>
    </>
  )
}
