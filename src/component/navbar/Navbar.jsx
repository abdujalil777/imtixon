import React, { useEffect } from 'react'
import Axios from 'axios'
import { ResetTvSharp } from '@mui/icons-material'
import '../navbar/navbarcss.css'
import { BsCart2 } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const select = useSelector(state => state.counter)

  return (
    <div>
      <div className='container '>
        <div className='kattainput'>
        <input type="text" placeholder='Search' className='form-control' />
          <Link to='/salom'><BsCart2 className='bs' /></Link>
          <div className='p m-0 position-relative '>
            <span className= "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {select.length}
              </span>
          </div>
        </div>

      </div>
      
    </div>
  )
}
