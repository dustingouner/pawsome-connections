import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const logo: JSX.Element = <img src={require('../../assets/pawsome.png')} alt='Pawsome Connections logo'/>
  
  return (
    <header className='header-section'>
      <Link to='/'>{logo}</Link>
    </header>
  )
}

export default Header;