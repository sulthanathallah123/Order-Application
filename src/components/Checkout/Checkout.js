import React from 'react'
import BackIcon from '../../assets/bx-arrow-back.svg'
import './checkout.css'
import img1 from '../../assets/1.png'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/payment')
    }
    const backButton = () => {
        navigate('/menu')
    }
    return (
        <div className='checkout-cont'>
            <div className="cont-head">
                <img src={BackIcon} alt="back" className='back-btn' onClick={()=> backButton()}/>
                <p className="checkout-title">Checkout</p>
            </div>
            <div className="summ-cont">
                <p className="summ-ttl">Order Summary</p>
                <div className="order-list">
                    <img src={img1} alt="" className='order-pic'/>
                    <div className="order-detail">
                        <p className="prod-name">Vanilla Waffle</p>
                        <p className="prod-price">24.000</p>
                    </div>
                    <div className="quantity">
                        <button className='quant-btn'>+</button>
                        <p className='order-quant'>1</p>
                        <button className='quant-btn'>-</button>
                    </div>
                </div>
            </div>
            <div className="price-detail">
                <div className="subtotal-cont">
                    <p className='sub-title'>Subtotal</p>
                    <p className='sub-price'>Rp.100000</p>
                </div>
                <div className="tax-cont">
                    <p className="tax-title">Order Fee</p>
                    <p className="tax-price">Rp.1000</p>
                </div>
            </div>
            <div className="total-cont">
                <div className="total">
                    <p className="total-title">Total</p>
                    <p className="total-price">Rp.1000000</p>
                </div>
                <button className='proceed-btn' onClick={()=> {handleClick()}}>Proceed to Payment</button>
            </div>
            
        </div>
    )
    }

export default Checkout