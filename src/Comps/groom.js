import React from 'react'
import "./styles.css"
import G1 from "./groompage.jpg"
import G2 from "./groom.jpg"
import { Link } from 'react-router-dom'



export default function Groom()  {
  return (
    <>
   
       <div class="container" >
        <div class="content" style={{marginTop:95}}>
        <button id="b1"><Link to="/Comps/details"> Fill Details</Link></button> 
            <p  style={{fontSize:18,marginTop:10}}>
                Pet Paradise is the leading pet grooming home service provider in Bangalore, we provide convenient, flexible and cost-effective pet grooming home services. Pet Paradise's pet grooming packages include a bath with shampoo and conditioner, full body hair trimming, nail cutting, ear cleaning, tick and flea treatment, and much more. Whether you are looking for a basic dog bath or a stylish dog hair cut, Pet Paradise’s dog groomers have got you covered. For cats, we have specialized teams of professional cat groomers that can make your cat fall in love with their grooming sessions.

                

            </p>  

        </div>
        <div class="content2">
            <img src={G1} style={{height:180}}/>
        </div>
        <div class="content3">
            <img src={G2} />
        </div>

    </div>
    
    
    </>
  )

}


