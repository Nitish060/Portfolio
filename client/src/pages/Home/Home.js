import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/RESUME.pdf'
import './home.css'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const Home = () => {
  const [theme, setTheme] = useTheme()
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
  }
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? (<BsMoonFill size={25} />) : (<BsSunFill ize={25} />)}
        </div>
        <div className="container home-content">
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ['Software Engineer !','MERN Stack Developer !', 'Java Programmer !'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="home-buttons">
              <a className="btn btn-cv" href={Resume} download="Nitish_Resume.pdf">My Resume</a>
              <a className="btn btn-hire" href="https://api.whatsapp.com/send?phone=8707273309" rel="noreferrer" target="_blank">DM Me</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
