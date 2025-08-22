import React from 'react'
import "./Menus.css"
import { Link } from 'react-scroll';
import Pic from "../../assets/images/ProfilePic.jpg"
import { FcAbout, FcBiotech, FcContacts, FcEngineering, FcHome, FcIdea, FcReading } from 'react-icons/fc'

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                        <div className="navbar-profile-pic">
                            <img src={Pic} alt="profile pic" />
                        </div>

                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcHome></FcHome>
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcAbout></FcAbout>
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcReading></FcReading>
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcBiotech></FcBiotech>
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcEngineering></FcEngineering>
                                        Work Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcIdea></FcIdea>
                                        Projects
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcContacts></FcContacts>
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                </>
            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcHome></FcHome>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcAbout></FcAbout>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcReading></FcReading>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBiotech></FcBiotech>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcEngineering></FcEngineering>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcIdea></FcIdea>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcContacts></FcContacts>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Menus