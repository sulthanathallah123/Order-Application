import React, { useEffect, useState } from 'react'
import useFetch from '../../../useFetch'
import FoodListSmall from '../Foods/FoodListSmall'
import './menu.css'

const Menu = () => {
  //=======Ambil User Dari Local Storage ==========================
  const [user,setUser] = useState({})
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUser(user)
    }
  },[])
  //=================================================================
  console.log(user)
  return (
    <div className='Main'>
      <p className='greet'>Hello {user.name}</p>
      <p className='title'>Find your Food</p>
      <FoodListSmall/>
    </div>
  )
}

export default Menu