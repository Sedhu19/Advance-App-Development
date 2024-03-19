import { useState } from 'react';
import '../assets/css/Navbar.css';
import { RiMenu3Line, RiCloseLine, RiSearchLine } from 'react-icons/ri'; 

const Navbar = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
    setIsOpenNav(false); 
  };

  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
    setIsOpenSearch(false); 
  };

  return (
    <nav className={`nav ${isOpenNav ? 'openNav' : ''}`}>
      <RiMenu3Line className="navOpenBtn" onClick={toggleNav} />
      <a href="#" className="logo">TVK</a>

      <ul className="nav-links">
        <RiCloseLine className="navCloseBtn" onClick={toggleNav} />
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Your Events</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <RiSearchLine className={`search-icon ${isOpenSearch ? 'search-icon-active' : ''}`} onClick={toggleSearch} />
      <div className={`search-box ${isOpenSearch ? 'openSearch' : ''}`}>
        <RiSearchLine className="search-icon" />
        <input type="text" placeholder="Search here..." />
      </div>
    </nav>
  );
};

export default Navbar;
