import React from "react";
import styled from "styled-components";
import BrandHeader from "../components/BrandHeader";
import BrandMenuSlide from "../components/BrandMenuSlide";
import Header from "../components/Header";
import MenuSlide from "../components/MenuSlide";
import NightStar from "../components/NightStar";

const Brand = () => {
    return(
    <Wrap>
        <Header/>
        <BrandHeader/>
        <MenuSlide/>
        <BrandMenuSlide/>
        <NightStar/>
    </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`

export default Brand;