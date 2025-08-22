import React from 'react'
import './Contact.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaSquareInstagram } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import cwm from "../../assets/images/cwm.png"

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "120a2bf8-2e17-42bd-a40c-c84682be3abb");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
              });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill the right deatils!",
              });
        }
      };

    return (
        <>
            <div className="container contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                        <img src={cwm} alt="contact us" className="image" />                            
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                                <div className="card2 d-flex card border-0 px-4 py-5">
                                    <div className="row">
                                        <div className="row">
                                            <h6>CONNECT WITH
                                                <a href="https://www.linkedin.com/in/nitish-mishra15"><BsLinkedin color='rgb(4, 119, 234)' size={20} className='ms-5'></BsLinkedin></a>
                                                <a href="https://github.com/Nitish060"><BsGithub color='black' size={20} className='ms-5'></BsGithub></a>
                                                <a href="https://www.instagram.com/nitish015_"><FaSquareInstagram color='#C13584' size={20} className='ms-5'></FaSquareInstagram></a>
                                            </h6>
                                        </div>
                                        <div className="row px-3 mb-4">
                                            <div className="line" />
                                            <small className="or text-center">OR</small>
                                            <div className="line" />
                                        </div>
                                        <form onSubmit={onSubmit}>
                                            <div className="row px-3">
                                                <input type="text" name="name" placeholder="Enter your name" className="mb-3" required/>
                                            </div>
                                            <div className="row px-3">
                                                <input type="text" name="email" placeholder="Enter your email id" className="mb-3" required/>
                                            </div>
                                            <div className="row px-3">
                                                <textarea type="text" name="message" placeholder="Write your message" className="mb-3" required/>
                                            </div>
                                            <div className="row px-3">
                                                <button className="button" type="Submit">SEND MESSAGE</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact