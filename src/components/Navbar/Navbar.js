import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link active">
            Rooms
          </a>
        </li>
      </ul>
    </nav>
  );
}
