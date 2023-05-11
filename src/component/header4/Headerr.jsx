import React, { useState, useEffect } from 'react'
import Axios from 'axios'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import './headerrcss.css'
import { useSelector, useDispatch } from 'react-redux'





export default function Circle_carousel() {
    const [BigMassiv, setBigMassiv] = useState([])
    const Dispach = useDispatch()
    // const responsive = {
    //     superLargeDesktop: {
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 6
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 3
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 2
    //     }
    // };

    useEffect(() => {
        Axios.get('https://api.npoint.io/98792f12dbae96b6a9ff')
            .then(ress => {
                setBigMassiv(ress.data.concat(ress.data))
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    function Добавлять(props) {
        Dispach({type:"nimadir",payload:props})
        console.log(props);
    }

    return (
        <div className="container">
            <div className="row g-0 ">
                {/* <Carousel responsive={responsive} autoPlaySpeed={1000} swipeable={true} draggable={true} showDots={false} infinite={true} > */}
                {
                    (BigMassiv.length > 0) ? BigMassiv.map((item, index) => {
                        return (
                            <div className=' col-2 mx-3'>
                                <div key={index} className='card mx-4 aa'>
                                    <img src={item.url} alt="Carousel_photo" className='w-100' />
                                    <h5>{item.narxi}</h5>
                                    <h5>{item.name}</h5>
                                </div>
                                <button className='w-75 my-3 btn btn-success' onClick={() => Добавлять(item) }>Добавлять</button>
                            </div>
                        )
                    })
                        :
                        <>
                            Loading......
                        </>
                }
                {/* </Carousel> */}
            </div>
        </div>

    )
}