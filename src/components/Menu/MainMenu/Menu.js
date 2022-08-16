import React from 'react'
import useFetch from '../../../useFetch'
import FoodListSmall from '../Foods/FoodListSmall'
import Carousel from '../Carousel/Carousel'
import './menu.css'

const Menu = () => {
  const url = 'http://localhost:8000/foods'
  const {data:foods,isPending,error} = useFetch(url)
  return (
    <div className='Main'>
      <p className='greet'>Hello Johnny</p>
      <p className='title'>Find your Food</p>
      <input type="text" className='search' placeholder='Search..' />
      <Carousel foods={foods}/>
      <FoodListSmall foods={foods}/>
    </div>
  )
}

export default Menu