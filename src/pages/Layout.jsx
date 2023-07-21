import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../styles/Layout.css';
import About from './About';
import Articles from './Articles';
import Contact from './Contact';
import Home from './Home';
import Offers from './Offers';
import Realizations from './Realizations';
import Work from './Work';

function Layout() {
  const [activeLink, setActiveLink] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (showMenu == true) {
      setShowMenu(false);
    }
  };
  const handleHamburger = (show) => {
    setShowMenu(show);
  };
  return (
    <>
      <nav className="nav-bar">
        <img className="logo" src="./images/smarthydro.png" alt="LOGO"></img>
        <ul className={`list-nav-bar ${showMenu == true ? 'active' : ''}`}>
          <li
            className={`link-li ${activeLink === 'home' ? 'show' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            <Link to="/michaelWeb/">Strona główna</Link>
          </li>
          <li
            className={`link-li ${activeLink === 'offers' ? 'show' : ''}`}
            onClick={() => handleLinkClick('offers')}
          >
            <Link to="/michaelWeb/offers">Oferta</Link>
          </li>
          <li
            className={`link-li ${activeLink === 'about' ? 'show' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            <Link to="/michaelWeb/about">O nas</Link>
          </li>
          <li
            className={`link-li ${activeLink === 'realizations' ? 'show' : ''}`}
            onClick={() => handleLinkClick('realizations')}
          >
            <Link to="/michaelWeb/realizations">Realizacje</Link>
          </li>
          <li
            className={`link-li ${activeLink === 'work' ? 'show' : ''}`}
            onClick={() => handleLinkClick('work')}
          >
            <Link to="/michaelWeb/work">Prace badawcze</Link>
          </li>
          <li
            className={`link-li ${activeLink === 'articles' ? 'show' : ''}`}
            onClick={() => handleLinkClick('articles')}
          >
            <Link to="/michaelWeb/articles">Artykuły naukowe</Link>
          </li>
          <li
            className={`link-li ${activeLink === 'contact' ? 'show' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            <Link to="/michaelWeb/contact">Kontakt</Link>
          </li>
        </ul>
        <div
          className={`hamburger ${showMenu == true ? 'active' : ''}`}
          onClick={() => handleHamburger(!showMenu)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <div className="content"></div>

      <Routes>
        <Route path="/michaelWeb/" element={<Home />} />
        <Route path="/michaelWeb/about" element={<About />} />
        <Route path="/michaelWeb/offers" element={<Offers />} />
        <Route path="/michaelWeb/articles" element={<Articles />} />
        <Route path="/michaelWeb/realizations" element={<Realizations />} />
        <Route path="/michaelWeb/work" element={<Work />} />
        <Route path="/michaelWeb/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Layout;
