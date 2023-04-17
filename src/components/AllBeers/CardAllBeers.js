import React, { useState } from "react";
import "../../css/styles.css";  
import PopupOneBeer from "./PopupOneBeer";




export const CardAllBeers = ({beer}) => { 

  const [buttonOneBeer, setbuttonOneBeer] = useState(false)

   

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
                {/*<p className="firstbreweddate">first brewed - {beer.first_brewed}</p>*/ }
                <div onClick={() => setbuttonOneBeer(true, document.body.style.overflow = 'hidden')} className="button-type-container button-type-element"> 
                </div>
          </div>  
          <div className="button-type-hover-container"> 
               <button onClick={() => setbuttonOneBeer(true, document.body.style.overflow = 'hidden')} className="button-type-hover-element">MORE ABOUT THIS BEER</button>
          </div>
        </div>  

        {/*----------popup to show one beer onclick-------------*/}

        <PopupOneBeer trigger={buttonOneBeer} setTrigger={setbuttonOneBeer}>
            <div className="popup-card-container-element">
                  <div className="popup-card-info">
                      <img alt="image-beer" src={beer.image_url}/> 
                      <div className="popup-card-info-line">
                          <div className="popup-card-info-top-line">
                              <h2>{beer.name}</h2> 
                              <p className="tagline">{beer.tagline}</p>
                          </div>
                          <div className="popup-card-info-two-line">
                              <div className="popup-card-info-mid-line">
                                <h3>About this beer</h3>
                                <p><strong>Ingredients</strong> :</p>
                                <p><strong>volume : </strong>{beer.volume.value}{beer.volume.unit}</p>
                                <p><strong>malt : </strong>{beer.ingredients.malt[0].name}</p>
                                <p><strong>hops : </strong>{beer.ingredients.hops[0].name}</p>
                                <p><strong>yeast : </strong>{beer.ingredients.hops[0].name}</p> 
                              </div>
                              <div className="popup-card-info-bottom-line">
                                <h3>Brewers Tips : </h3>
                                <p>{beer.brewers_tips}</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="foodPairing-container">
                            <h3 className="foodPairing">Food Pairing</h3>
                            <p>{beer.food_pairing}</p> 
                  </div> 
            </div> 
        </PopupOneBeer>
    </div>
  );
}

export default CardAllBeers;