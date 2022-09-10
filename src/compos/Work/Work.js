import React from 'react'
import img1 from '../../imags/image 1.png'
import img2 from '../../imags/image 2.jpg'
import img3 from '../../imags/image 3.png'
import './Work.css'

const Work = () => {
  return (
    <div className="work">
     <div className="heading">
        <h1 className="aglahek"> My work </h1>
        <h4> For more go to my <a href="https://github.com/Vish7-77" > Github-page</a></h4>
     </div>
 <div className="cardrs" >
 <div className="card">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Text-Manipulation</h5>
    <h5 className="card-text">This will manipulate your text. user has to enter the text in the textarea and click on the button which they want to.</h5>
    <button  className="btn btn-primary">Go somewhere</button>
  </div>
</div>


<div className="card">
  <img src={img2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Wakanda</h5>
    <h5 className="card-text">It's a Frontend project just made in 1Hour, pure HTML CSS & JS was used in this project .</h5>
    <button  className="btn btn-primary lungi">Go somewhere</button>
  </div>
</div>

<div className=" cra card " >
  <img src={img3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Cart-Model</h5>
    <h5 className="card-text">It's a React-js project made to Show the use of Redux Toolkit, in the two components  </h5>
    <button  className="btn btn-primary lungi">Go somewhere</button>
  </div>
</div>

 </div>

   
    </div>
  )
}

export default Work
