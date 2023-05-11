import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './mian.css'



export default function Circle_carousel() {
    const [BigMassiv, setBigMassiv] = useState([])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    useEffect(() => {
        Axios.get('https://api.npoint.io/08c250cfc20366fa1b1f')
            .then(ress => {
                console.log(ress.data);
                setBigMassiv(ress.data.concat(ress.data))
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    console.log(BigMassiv, 'bu massivbbhbhb');
    return (

        <div className="container">
            <div className='row'>
                {
                    (BigMassiv.length > 0) ? BigMassiv.map((item, index) => {    
                        return (
                            <div key={index} className=" col-4 my-2" >
                                    <div className="card flex" style={{display:"flex",justifyContent:"center"}}>
                                        <img className='img' src={item.img} alt="Carousel_photo" />
                                        <h5>{item.name}</h5>
                                    </div>
                            </div>
                        )
                    })
                        :
                        <>
                            Loading......
                        </>
                }
            </div>
        </div>
    )
}