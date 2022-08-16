import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FoodListSmall = (props) => {
    const [data,setData] = useState({...props.foods})
    useEffect(() => {
        setData(props.foods)
    },[props.foods])
    console.log(data)
    return (
        <div className='food-list'>
            {/* {data.map((value)=>(
            <Link to={`/foods/${data.id}`}>
            <div className="food-item" key={data.id}>
            <img src={data.image } alt="" className='food-img'/>
            <div className="food-info">
                <p className="food-name">{data.name}</p>
                <p className="food-desc">{data.description}</p>
                <p className='food-price'>{`Rp.${data.price}`}</p>
            </div>
            </div>
            </Link>
        ))} */}
        </div>
  )
}

export default FoodListSmall