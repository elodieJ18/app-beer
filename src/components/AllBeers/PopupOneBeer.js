import React from "react";
import "../../css/styles.css"; 


export const PopupOneBeer = (props) => {   
    
  return (
    (props.trigger) ? (
    <div className="popup-one-beer">
       <div className="popup-one-beer-container">
          <button className="popup-cross" onClick={() => props.setTrigger(false, document.body.style.overflow = 'visible')}>x</button>
          {props.children}
       </div>
    </div>) : ""
  );
}

export default PopupOneBeer;