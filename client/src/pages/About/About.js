import React from 'react'
import './About.css'
import Pic from "../../assets/images/ProfilePic.jpg"

const About = () => {
    return (
        <>
                <div className="about" id="about">
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src={Pic} alt="profile_pic" />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About Me</h1>
                            <p> 
                                Hello I'm  <b>Nitish Kumar Mishra</b> a recent graduate with a Bachelor's in Technology (B.Tech) 
                                in Information Technology from <b>Dr. A.P.J Abdul Kalam Technical University, Lucknow.</b> My journey 
                                into software engineering has been fueled by a strong curiosity for how technology works and a desire 
                                to build solutions that make a difference.</p><p>I have a solid foundation in Data Structures & Algorithms, Object-Oriented Programming (OOP), and 
                                Web Development. My technical toolkit includes Java, React, Node.js, and database management with 
                                MySQL. I'm constantly seeking new challenges and opportunities to learn and grow as a developer. 
                                Let's connect and build something amazing!
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default About