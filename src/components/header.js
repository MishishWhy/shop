import React from 'react'
import Logo from "./images/logo.png"
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <header>
        <div> 
              <Link to="/"><img src={Logo} className="logo_img"/></Link>         
             <ul className='nav'>
             <Link to="/items"><li>Список товаров</li></Link>
              </ul>
              
        </div>
        <div className='presentation'></div>
    </header>
  )
}