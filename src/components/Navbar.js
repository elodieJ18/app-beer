import React from "react";
import "../css/styles.css"; 


export const Navbar = () => {     
    
  return (
  
    <div>
        <div className="navbar">
            <div className="navbar-container">
              <div className="navbar-element">
                        <h1 className="title"><span className="title-capital-size">L</span>oving<span className="color-title"><span className="title-capital-size">B</span>eers</span></h1>
                        <p>and food</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;