 import React from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import { Link } from 'react-router-dom';
import './css/Header.css';

class Header extends React.Component{
  state = {
    toggle: false
  }

  menuToggle = () => {
    this.setState({toggle: !this.state.toggle})
  }
  menuToggleClose = () => {
    this.setState({toggle: false})
  }

  render(){
    const {toggle} = this.state;
    return(
      <header>
        <div className="menu" onClick={this.menuToggle}>
            <img src= {Menu} alt="" width="20px"/>
        </div>

        <div className="logo">
            <h1><Link to="/"><span>HR </span>Bappy</Link></h1>
        </div>
        <nav id="navbar">
            <ul className={toggle ? "toggle" : ""}>
                <li onClick={this.menuToggleClose}><Link to="/">Home</Link></li>
                <li onClick={this.menuToggleClose}><Link to="/resume">resume</Link></li>
                <li onClick={this.menuToggleClose}><Link to="/aboutme">aboutme</Link></li>
                <li onClick={this.menuToggleClose}><Link to="/projects">projects</Link></li>
                <li onClick={this.menuToggleClose}><Link to="/achievement">achievement</Link></li>
                <li onClick={this.menuToggleClose}><Link to="/contact">Contact</Link></li>
                <li className="close" onClick={this.menuToggle}>
                    <img src= {Close} alt="" width="20px"/>
                </li>
            </ul>
        </nav>          
      </header>
    )
  }
}

export default Header;
