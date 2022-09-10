import React from "react"
import  "./Cont.css"
import maki from "../../imags/maki.png"


const Cont=()=>{

    return(
  
     <div   id="cont" >

        <div>
  <h1 className="h1cont"> Have any Idea?</h1>
  <p className="pek">lets Make it Happpen</p>
  
       </div>
       <div className="cont-last">
        <div className="faram">
        <div class="form">
      <div class="title">Welcome</div>
      <div class="input-container ic1">
      <span style={{color:"white"}}>Name</span>
        <input id="firstname" class="input" type="text" placeholder=" " />
      
      </div>
      <div class="input-container ic2">
      <span style={{color:"white"}}>E-mail</span>
        <input id="email" class="input" type="email" placeholder=" " />
 
    
      </div>
      <div class="input-container ic2">
      <span style={{color:"white"}}>What's ypur idea about</span>
        <input id="text" class="input" type="text" placeholder=" " />
  
      </div>
      <button type="text" class="submit">submit</button>
    </div>
        </div>
        <div className="imge"><img src={maki} alt="kk"/></div>
       </div>
     </div>

    )
}

export default Cont;