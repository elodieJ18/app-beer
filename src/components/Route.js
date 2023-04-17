import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'; 


const index = () => {
  return (
    <BrowserRouter> 
      <Routes>      
        <Route path="/" element={<Home />}></Route> 
      </Routes>
    </BrowserRouter>
  );
};

export default index;
