import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainSlide from "../components/MainSlide";
import MenuSlide from "../components/MenuSlide";
import ModelDialog from "../components/ModelDialog";

const Home = () => {

    return(
    <Wrap>
    <Header/>
    <MenuSlide/>
    {/* <MainSlide/> */}
    
    {/* <ModelDialog/> */}
    {/* <MenuSlide/> */}
    </Wrap>
    );
};


const Wrap = styled.div`
    width: 100%;
    height: auto;
    /* display: flex; */

`



export default Home;
