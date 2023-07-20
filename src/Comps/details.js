import React from 'react'
import "./details.css"

export default function details() {
  return (
    
    <>
    <div>
    <div class="container">
       <div class="form-box">
            <h1 id="title">Details</h1>
            <form>
                <div class="input-group">
                    <div class="input-field" id="namefield">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-phone "></i>
                        <input type="text" placeholder="Mobile"/>
                    </div> 
                    <div class="input-field">
                        <i class="fa fa-dog"></i>
                        <input type="text" placeholder="Pet category and Breed"/>
                    </div>     
                    <div class="input-field">
                        <i class="fa fa-gear"></i>
                        <input type="text" placeholder="Services required"/>
                    </div>    
                </div>
                <div class="btn-field">
                    <button type="button" id="signin">
                        Submit Details
                    </button>
                </div>
            </form>
       </div> 
    </div>
   
    
      
    </div>
    </>
  )
}


