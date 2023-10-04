import React from 'react';
import './NavBar.css';
import Login from './Login';
import HeroSection from './HeroSection';

const NavBar = () => {
  return (
    <div className='header'>
        <nav>
        <label class="logo">ID Evolve</label>
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><Login /></li>
        </ul>
        <label id="icon">
            <i class="fa-solid fa-bars"></i>
        </label>
    </nav>
    <HeroSection />
    </div>
  )
}

export default NavBar