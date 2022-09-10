import React from 'react'
import "./Main.css"
import {TiSocialInstagramCircular} from "react-icons/ti";
import {FaFacebook} from "react-icons/fa";
import {DiGithubBadge} from "react-icons/di";
import {ImMail4} from "react-icons/im";
import { IconContext } from "react-icons";


const Main = () => {
  return (
<div className="main">
  <div className="main-1">
  <div> {''}</div>
  <div className="Name-1"> <h1>Vishal</h1></div>
  <div className="Name"> <p>Take Your Brand On The Web</p></div>

  </div>
  <div className="logos"> 
  <IconContext.Provider value={{ className: "boom" }}>
  <TiSocialInstagramCircular size={'40px'}/>
  <DiGithubBadge size={'42px'}/>
  <ImMail4  size={'33px'}/>
  <FaFacebook size={'32px'}/>
  </IconContext.Provider>
   </div>
</div>
  )
}

export default Main