import React from "react"
import "./Home.css"
import { BsLinkedin } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter"
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdContactMail } from "react-icons/md";
import { FaReact ,FaAngular} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='main-container'>
          <div className='desc-img-section'>
            <div className="description">
            <h3>WELCOME TO MY PORTFOLIO WEBSITE</h3>
            <h1>
              Hi, I’m <span>Harshith Dharavasthu</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Frontend Developer.", " Full Stack Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I'm an enthusiastic Frontend Developer with a strong foundation in HTML, CSS, JavaScript, TypeScript, React.js, Angular, and decent knowledge in backend technologies like node js, express js and MongoDB. Currently gaining practical experience in crafting responsive and visually appealing user interfaces.</p>
            </div>
            <div className='right'>
            <div className='right_img'>
            <img
            src='https://res.cloudinary.com/di4qjlwyr/image/upload/v1680689970/1676304424865_h07d4x.jpg'
            alt="my profile"
            className="my-image"
          />
            </div>
          </div>
          </div>
            <div className='social-icons'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                  <a href="https://www.linkedin.com/in/harshithdharavasthu" target="__blank"><BsLinkedin className="icons linkedin" /></a>
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://github.com/Harshithdhara291" target="__blank"><TbBrandGithubFilled className="icons" /></a>
                  </button>
                  <button className='btn_shadow'>
                  <a href="mailto:harshithdhara291@gmail.com" target="__blank"><MdContactMail className="icons mail" /></a>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='best-in-btns'>
                  <FaReact className="react-icon" />
                </button>
                <button className='best-in-btns'>
                  <FaAngular className="angular-icon" />
                </button>
                <button className='best-in-btns'>
                  <SiJavascript className="javascript-icon" />
                </button>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
