import React, {useState} from "react";
import "../css/styles.css";  
import ThreadOneBeer from "../components/PageOneBeer/ThreadOneBeer";
import Navbar from "../components/Navbar"; 


function OneBeer() { 


  return (
   <div>
      <div> 
        <div className="home">  
          <Navbar/> 
            <div className="home-container">
                <ThreadOneBeer/>
          </div>
        </div>
      </div> 
      <div>
      </div>
    </div>
 
  );
}

export default OneBeer;
