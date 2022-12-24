import axios from 'axios'
import React from 'react'
import { useMainContext } from '../context/MainContext'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

export default function Row({title, fetchURL,rowId}) {
    // const {value:{movies,setMovies}} = useMainContext()
    const [mapper, setMapper] = React.useState([])
    const [like, setLike ]= React.useState(false)
    
    React.useEffect(()=>{
        axios.get(fetchURL).then(res=>{
            setMapper(res.data.results)
        })
    },[fetchURL])

    function slideRight(){
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500
        
    }
    function slideLeft(){
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500
        
    }
  return (
    <>
    <h2 className='text-white font-bold md:text-x4 p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft  onClick={slideLeft} size={40} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        <div id={'slider'+ rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {mapper.map((item,index)=>{
                return <Movie item={item}  key={index}/>
            })}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'  />
    </div>
      
    </>
  )
}
