import React from 'react'
import "./styles.css"
import b1 from "./b1.jpeg"
import b2 from "./b2.jpeg"
import { Link } from "react-router-dom";


export default  function boarding  ()  {
  return (
    <>
    <div>
    <div class="container" style={{display:'flex'}}>
        <div class="content" style={{marginTop:37}}>
            <button id="b1"><Link to="/Comps/details"> Fill Details</Link></button> 
            <p style={{marginTop :80,textAlign: 'center', fontSize:'large '}}>
                Yes, often leaving your pooch behind when you are going out on a vacay can be heartbreaking. But it doesn't have to be a lonely time for them; they can be ecstatic and make new memories and friends at these boarding shelters in Bangalore! These are places that are run by dog lovers for the dogs to have an absolute blast when you are away and be returned to you happy and healthy. 
                

            </p>  

        </div>
        <div class="content2">
            <img src={b1}/>
        </div>
        <div class="content3">
            <img src={b2 }style={{height:180,marginLeft:150}}/>
        </div>

    </div>
    </div>
    </>
  )
}
