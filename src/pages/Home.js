import React from "react";
import "../css/styles.css";  
import ThreadBeer from "../components/AllBeers/ThreadBeer";
import Navbar from "../components/Navbar"; 


function Home() { 

  return (
        <div className="home">  
          <Navbar/> 
            <div className="home-container"> 
                <ThreadBeer />
          </div>
        </div>
  );
}

export default Home;
