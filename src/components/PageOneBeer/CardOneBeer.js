import React, { useState } from "react";
import "../../css/styles.css";  




export const CardOneBeer = ({beer}) => { 

  const [buttonOneBeer, setbuttonOneBeer] = useState(false)

  const onlyOneBeer = () => {
    window.location = "/" + beer.id;
    console.log(beer.id)
  }

  return ( 
  /*-----------cardBeer---------------*/
    <div className="home-card">
        <div className="home-card-container">
          <div className="home-card-container-element">
                <div>
                    <img onClick={() => setbuttonOneBeer(true, document.body.style.overflow = 'hidden')} src={beer.image_url}/> 
                </div>
                <div className="two-col-info">
                   <h2>{beer.name}</h2>
                   <p> .{beer.volume.value}L</p> 
                </div>
                <p className="tagline">{beer.tagline}</p> 
          </div> 
        </div>  
    </div>
  );
}

export default CardOneBeer;