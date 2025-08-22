import React, { useState } from 'react'
import './MobileNav.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiMenuAlt1 } from 'react-icons/hi'
import { FcAbout, FcBiotech, FcContacts, FcEngineering, FcHome, FcIdea, FcReading } from 'react-icons/fc'
import { Link } from 'react-scroll';

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handling open
  const handleOpen = () => {
    setOpen(!open)
  }

  //handling menu clicks
  const handleMenuClick = () => {
    setOpen(false)
  }

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (<HiMenuAlt1 size={30} className="mobile-nav-icon" onClick={handleOpen}></HiMenuAlt1>)
            : (<GiHamburgerMenu size={30} className="mobile-nav-icon" onClick={handleOpen}></GiHamburgerMenu>)}
          <span className="mobile-nav-title">My Portfolio</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcHome></FcHome>
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcAbout></FcAbout>
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcReading></FcReading>
                    Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcBiotech></FcBiotech>
                    Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcEngineering></FcEngineering>
                    Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcIdea></FcIdea>
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcContacts></FcContacts>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default MobileNav