import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../../useFetch'
import './fooddetails.css'
import { useState } from 'react'

const FoodDetails = () => {
    const {id} = useParams();
    const [amount,setAmount] = useState('0')
    const onClickHandler= () =>{
    }
    const {data:food,error,isPending} = useFetch('http://localhost:8000/foods/' + id)
    return (
        <div className='food-detail-cont'>
            <div className='detail-header'>
                <img src={food.image} alt="" className='food-detail-img' />
                <div className="detail-title">
                    <p className="detail-name">{food.name}</p>
                    <p className="detail-price">{`Rp.${food.price}`}</p>
                </div>
                <p className="detail-desc">{food.description}</p>
            </div>
            <div className="notes">
                <p className="notes-label">Notes</p>
                <textarea name="notes" id="" cols="30" rows="10" placeholder='Add your Request' className='txt-area'></textarea>
            </div>
            <div className="set-amount">
                <button className='min-btn'>-</button>
                1
                <button className='plus-btn'>+</button>
            </div>
            <div className="btn-cont">
                <button className='add-btn'>Add to Basket</button>
            </div>
        </div>
    )
}

export default FoodDetails