import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


interface NavbarProps {
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  return (
    <nav>
      <ul>
        <li className={activePage === 'home' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={activePage === 'about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={activePage === 'contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )};

  export default Navbar
