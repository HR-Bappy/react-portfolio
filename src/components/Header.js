import React from 'react';
import logo from './images/Halcyon-Web-Logo.webp'
import { Link } from 'react-router-dom';
import './css/Header.css';

class Header extends React.Component{
  
  render(){
    return(
      <header>
        <div className="logo">
            <Link to="/"><img src={logo} alt="halcyon-logo"  loading="lazy" /></Link>
        </div>
        <nav>
            <ul >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/services">services</Link></li>
                <li><Link to="/our-work">our work</Link></li>
                <li><Link to="/career">career</Link></li>
                <li><Link to="/blog">blog</Link></li>
                <li><Link to="/contact">contact</Link></li>
                
            </ul>
            </ul>
        </nav>          
      </header>
    )
  }
}

export default Header;
