import React from 'react'
import './About.css'
import me from '../../imags/me.png'

const About = () => {
  return (
    <div className="about">
      <div className="main-about">
        <div className="about-left">
          <img className="me" src={me} alt="he" />
        </div>
        <div className="about-right">
          <div className="right-1">
            <div>
              <h2 className="hdo">About Me</h2>
            </div>
            <div className="ispa-div">
              <span className="ispa">
                hello there ! i am vishal gehlot, i am a web-developer, i am
                from mysore currently living in bangalore, i like to build
                web-pages, I use a creative approach to problem solve, I am
                always energetic and eager to learn new skills. I am a
                dependable person who is great at time management.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
