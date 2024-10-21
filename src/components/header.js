import React from 'react'
import Logo from "./images/logo.png"
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <header>
        <div> 
              <Link to="/"><img src={Logo} className="logo_img"/></Link>         
              <Link to="/items"><ul className='nav'>
                <li>Список товаров</li>
              </ul>
              </Link>
        </div>
        <div className='presentation'></div>
    </header>
  )
}