import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-start gradient">
      <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse gradient shadow-black' : 'justify-start gradient shadow-black'} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Rentals" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>Rentals</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/map" className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>Map of Area </Link>
          </li>
          <li className="nav-item">
            <Link to="/Rules" className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>Rules </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
