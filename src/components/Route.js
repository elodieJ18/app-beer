import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'; 
import OneBeer from "../pages/OneBeer";


const index = () => {
  return (
    <BrowserRouter> 
      <Routes>      
        <Route path="/punk-api-frontend" element={<Home />}></Route>
        <Route path={"/punk-api-frontend/:id"} element={<OneBeer />}></Route> 
      </Routes>
    </BrowserRouter>
  );
};

export default index;
