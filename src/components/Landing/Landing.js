import React from 'react'
import { useNavigate } from 'react-router-dom'
import './landing.css'
import logo from '../../assets/icongreen.png'
import background from '../../assets/bglanding.png'


const Landing = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/login')
    }
  return (
    <div className='landing-cont'>
        <img src={logo} alt="logo" className='landing-logo' />
        <p className='landing-title'>FIRST GELATO IN CIMAHI</p>
        <button className='landing-btn' onClick={handleNavigate}>Order Now!</button>
        <img src={background} alt="background" className='landing-bg' />

    </div>
  )
}

export default Landing