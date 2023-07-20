import React from "react";
import './styles.css';
import p1 from './p1.jpg';
import { Link } from "react-router-dom";
import p2 from './p2.jpg';
export default function Pool (){
return(
    
    <div class="container" >
    <div class="content" style={{marginTop:34}}>
        <button id="b1" ><Link to="/Comps/details"> Fill Details</Link>
        </button> 
        <p >
            This summer, your pool party has gone to the dogs—but we think that’s a good thing!

            Our four-legged friends could use a good pool party,
            because they get the same amount of enjoyment from splashing around with friends,
            soaking up the sun and enjoying sweet treats poolside.
            (As a plus, they don’t have to clean up after themselves when the party is over!)
            

        </p>  

    </div>
    <div class="content2">
        <img src={p1} />
    </div>
    <div class="content3">
        <img src={p2}/>
    </div>
    </div>
     
);
}   
