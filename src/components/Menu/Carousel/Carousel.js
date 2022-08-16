import React from 'react'
import { motion } from 'framer-motion'
import { useRef,useEffect,useState } from 'react'
import useFetch from '../../../useFetch'
import './carousel.css'

const Carousel = ({foods}) => {
    const url = 'http://localhost:8000/carousel'
    const {data:images,isPending} = useFetch(url)
    const [width,setWidth] = useState(0);
    const carousel = useRef();
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    })
    return (
        <div className='carousel-cont'>
            <p className="carousel-title">Promo Just For You!</p>
            <motion.div ref={carousel} className='carousel'>
                <motion.div 
                drag="x" 
                className='inner-carousel'
                dragConstraints={{right:0,left: -width}}
                >
                    {!isPending && images.map(image => {
                        return(
                            <motion.div className='item' key={image}>
                                <img src={image} alt=""/>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
    }

export default Carousel