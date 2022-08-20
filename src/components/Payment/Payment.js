import React, { useState } from 'react'
import BackIcon from '../../assets/bx-arrow-back.svg'
import arrow from '../../assets/arrow-right.png'
import './payment.css'
import bca from '../../assets/BCA.png'
import gopay from '../../assets/gopay.png'
import qris from '../../assets/qris.png'
import cash from '../../assets/cash.png'
import { useNavigate } from 'react-router-dom'
import Popup from './PopUp/Popup'


const Payment = () => {
  const navigate = useNavigate()
  const [selectedValue,setSelectedValue] = useState(0)
  const backButton = () => {
    navigate(-1)
  }

  const handleSelected = (val) => {
    setSelectedValue(val)
  }

  
  return (
    <div className='payment-cont'>
    <Popup value={selectedValue} handlecancel={value => setSelectedValue(value)}/>
        <div className="payment-head">
            <img src={BackIcon} alt="back" className='back-btn' onClick={()=> backButton()}/>
            <p className="payment-title">Checkout</p>
        </div>
        <div className="method-cont">
          <div className="method-list">
            <div className='bank-btn' onClick={()=> handleSelected(1)}>
              <img src={bca} alt="" className='method-img' />
              <p className="method-name">Bank Transfer </p>
              <img src={arrow} alt="" className='arrow' />
            </div>
          </div>
          <div className="method-list">
            <div className='gopay-btn' onClick={()=> handleSelected(2)}>
              <img src={gopay} alt="" className='method-img' />
              <p className="method-name">GOPAY </p>
              <img src={arrow} alt="" className='arrow'/>
            </div>
          </div>
          <div className="method-list">
            <div className='qris-btn' onClick={()=> handleSelected(3)}>
              <img src={qris} alt="" className='method-img' />
              <p className="method-name">BCA QRIS </p>
              <img src={arrow} alt="" className='arrow'/>
            </div>
          </div>
          <div className="method-list" onClick={()=> handleSelected(4)}>
            <div className='cash-btn'>
              <img src={cash} alt="" className='method-img' />
              <p className="method-name">Cash Payment </p>
              <img src={arrow} alt="" className='arrow'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Payment