import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = ({total}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/checkout')
  }
  return (
    <div className="cart-cont">
      <button className='cart-btn' onClick={() => handleClick()}>Place Order - Rp.{total}</button>
    </div>
  )
}

export default Cart