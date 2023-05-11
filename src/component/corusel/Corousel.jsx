// import React, { useState, useEffect } from 'react'
// import Axios from 'axios'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// export default function Corousel() {

//     const [massiv, setMassiv] = useState('')

//     const responsive = {
//         superLargeDesktop: {
//             breakpoint: { max: 4000, min: 3000 },
//             items: 5
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         }
//     };

//     useEffect(() => {
//         Axios.get('https://api.npoint.io/1f822fe5bc64d29bf01e')
//             .then(ress => {
//                 console.log(ress.data);
//                 setMassiv(ress.data)
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }, []);
//     // useEffect(() => {
//     //     Axios.get('https://api.npoint.io/f9fe43fa3c86e6215083')
//     //         .then(ress => {
//     //             console.log(ress.data);
//     //             setMassiv(ress.data)
//     //         })
//     //         .catch(err => {
//     //             console.log(err);
//     //         })
//     // }, []);


//     return (

//        {
       
//        }
//     )
// }

import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Corousel() {
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
        Axios.get('https://api.npoint.io/1f822fe5bc64d29bf01e')
            .then(ress => {
                console.log(ress.data);
                setBigMassiv(ress.data.concat(ress.data))
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    // console.log(BigMassiv, 'bu massiv');
    return (
        <div className="container">
            <Carousel responsive={responsive} autoPlaySpeed={1000} swipeable={true} draggable={true} showDots={false} infinite={true} >
                {
                    (BigMassiv.length > 0) ? BigMassiv.map((item, index) => {
                        return (
                            <div key={index} className='my-4'>
                                <img width={150} src={item.nav_image1} alt="Carousel_photo" />
                            </div>
                        )
                    })
                        :
                        <>
                            Loading......
                        </>
                }
            </Carousel>
        </div>
    )
}
 