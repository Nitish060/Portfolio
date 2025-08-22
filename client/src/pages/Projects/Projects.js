import React from 'react'
import './Projects.css'
import pr1 from "../../assets/images/pr1.png"
import pr2 from "../../assets/images/pr2.png"
import pr3 from "../../assets/images/pr3.png"

const Projects = () => {
    return (
        <>
            <div className="project" id="projects">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h2>
                <hr />
                <p className="pb-3 text-center">Showcasing my recent projects: a MERN-based Blood Bank app for managing donors and 
                    inventory, a MERN Blog app with dynamic content and user auth, and a Java-MySQL console Railway Reservation system 
                    for efficient bookings.
                </p>
                <div className="row" id="ads">
                        <div className="col-md-4">
                            <div className="card rounded c1">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full Stack</span>
                                    <img src={pr1} alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Blood Bank Application</h5>
                                    </div>
                                    <a className="ad-btn" href="https://blood-bank-application-myqn.onrender.com/">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded c1">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full Stack</span>
                                    <img src={pr2} alt="project2" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Blog Application</h5>
                                    </div>
                                    <a className="ad-btn" href="https://blog-application-jkx1.onrender.com/">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded c1">
                                <div className="card-image">
                                    <span className="card-notify-badge">Console-Based</span>
                                    <img src={pr3} alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Java</span>
                                    <span className="card-detail-badge">MySql</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Railway Reservation System</h5>
                                    </div>
                                    <a className="ad-btn" href="https://github.com/Nitish060/oibsip_task1-Railway_Resevation_System">View</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Projects