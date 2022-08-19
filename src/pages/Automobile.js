import React from "react";
import styled from "styled-components";
import AutoMobileImg from "../components/AutomobileImg";
import BrandMenuSlide from "../components/BrandMenuSlide";
import CarHeader from "../components/CarHeader";
import Header from "../components/Header";
import MenuSlide from "../components/MenuSlide";

const AutoMobile = () => {
    return(
    <Wrap>
    <Header/>
    <CarHeader/>
    <BrandMenuSlide/>
    <AutoMobileImg/>
    <MenuSlide/>
    {/* <h1>This is AutoMobile</h1> */}
    </Wrap>);
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`

export default AutoMobile;