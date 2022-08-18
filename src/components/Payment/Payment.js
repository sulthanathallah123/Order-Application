import React from 'react'
import BackIcon from '../../assets/bx-arrow-back.svg'
import arrow from '../../assets/arrow-right.png'
import './payment.css'
import bca from '../../assets/BCA.png'
import gopay from '../../assets/gopay.png'
import qris from '../../assets/qris.png'
import cash from '../../assets/cash.png'

const Payment = () => {
  return (
    <div className='payment-cont'>
        <div className="payment-head">
            <img src={BackIcon} alt="back" className='back-btn'/>
            <p className="payment-title">Checkout</p>
        </div>
        <div className="method-cont">
          <div className="method-list">
            <img src={bca} alt="" className='method-img' />
            <p className="method-name">Bank Transfer </p>
            <img src={arrow} alt="" className='arrow'/>
          </div>
          <div className="method-list">
            <img src={gopay} alt="" className='method-img' />
            <p className="method-name">GOPAY </p>
            <img src={arrow} alt="" className='arrow'/>
          </div>
          <div className="method-list">
            <img src={qris} alt="" className='method-img' />
            <p className="method-name">BCA QRIS </p>
            <img src={arrow} alt="" className='arrow'/>
          </div>
          <div className="method-list">
            <img src={cash} alt="" className='method-img' />
            <p className="method-name">Cash Payment </p>
            <img src={arrow} alt="" className='arrow'/>
          </div>
        </div>
    </div>
  )
}

export default Payment