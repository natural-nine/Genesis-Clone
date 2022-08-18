import React from "react";
import { Route, Routes } from "react-router-dom";
import AutoMobile from "./Automobile";
import Brand from "./Brand";
import Home from "./Home";

const Router = () => {
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gv80" element={<AutoMobile/>}/>
        <Route path="/brand" element={<Brand/>}/>
      </Routes>
    );
};

export default Router;