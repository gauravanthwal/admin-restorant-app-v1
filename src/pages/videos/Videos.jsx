import React, { useEffect } from 'react'
import AllCourses from '../../components/video/AllCourses'
import AddVideo from '../../components/video/AddVideo'
import { useDispatch } from 'react-redux'
import { getAllCourses } from '../../store/actions/courseAction'

const Videos = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCourses());
  },[])
  return (
    <div className='pt-4 flex flex-col md:flex-row justify-around gap-12'>
      <div className='w-full flex justify-center'> 
        <AllCourses/>
      </div>
      <div className='w-full flex justify-center'>
        <AddVideo/>
      </div>
    </div>
  )
}

export default Videos
