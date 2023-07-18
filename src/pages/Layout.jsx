import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import '../styles/Layout.css'
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Offers from "./Offers"
import Projects from "./Projects"

function Layout() {
  const [activeLink, setActiveLink] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if(showMenu==true){
      setShowMenu(false);
    }
  };
  const handleHamburger = (show) =>{
    setShowMenu(show);
  }
  return (
    <>
      <nav className="nav-bar">
        <img className="logo" src="src\images\smarthydro.png" alt="LOGO"></img>
        <ul className={`list-nav-bar ${showMenu == true ? 'active' : ''}`}>
          <li className={`link-li ${activeLink === 'home' ? 'show' : ''}`} onClick={()=>handleLinkClick('home')}><Link to="/">Home</Link></li>
          <li className={`link-li ${activeLink === 'about' ? 'show' : ''}`} onClick={()=>handleLinkClick('about')}><Link to="/about">About</Link></li>
          <li className={`link-li ${activeLink === 'offers' ? 'show' : ''}`} onClick={()=>handleLinkClick('offers')}><Link to="/offers">Offers</Link></li>
          <li className={`link-li ${activeLink === 'projects' ? 'show' : ''}`} onClick={()=>handleLinkClick('projects')}><Link to="/projects">Projects</Link></li>
          <li className={`link-li ${activeLink === 'contact' ? 'show' : ''}`} onClick={()=>handleLinkClick('contact')}><Link to="/contact">Contact</Link></li>
        </ul>
        <div className={`hamburger ${showMenu == true ? 'active' : ''}`} onClick={()=>handleHamburger(!showMenu)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
      <div className="content">

      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default Layout