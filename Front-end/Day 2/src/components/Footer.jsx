import { useState } from 'react';
import '../assets/css/Navbar.css';

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className={`navbar ${clicked ? 'active' : ''}`}>
        <a href="index.html" className="logo">
          {/* Your logo SVG here */}
        </a>
        <ul id="navbar" className={clicked ? 'active' : ''}>
          <li>
            <a className="active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="events.html">Events</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="profile.html">Profile</a>
          </li>
        </ul>
      </nav>
      <div className={`mobile-icon ${clicked ? 'active' : ''}`} onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </>
  );
}

export default NavBar;
