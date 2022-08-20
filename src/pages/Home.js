import React from "react";
import styled from "styled-components";
import BrandMenuSlide from "../components/BrandMenuSlide";
import Header from "../components/Header";
import MainSlide from "../components/MainSlide";
import MenuSlide from "../components/MenuSlide";


const Home = () => {

    return(
    <Wrap>
        <Header/>
        <MenuSlide/>
        <BrandMenuSlide/>
        <MainSlide/>
    </Wrap>
    );
};


const Wrap = styled.div`
    width: 100%;
    height: auto;
    /* display: flex; */

`



export default Home;
