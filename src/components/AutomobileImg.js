import React from "react";
import styled from "styled-components";
import gv80 from "../images/gv80-2.webp";
const AutoMobileImg = () => {
    return(
    <Wrap>
        <Img src={gv80}/>
        <DesBox></DesBox>
    </Wrap>
    );
};

const Wrap = styled.div`
    width: 100%;
    height: 85vh;
    margin-top: 150px;
    /* background-color: red; */
    display: flex;
    /* background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%); */
    background: linear-gradient(to right,
            rgba(20, 20, 20, 0) 10%,
            rgba(20, 20, 20, 0.25) 25%,
            rgba(20, 20, 20, 0.5) 50%,
            rgba(20, 20, 20, 0.75) 75%,
            rgba(20, 20, 20, 1) 100%);
            
`

const DesBox = styled.div`
    position: absolute;
    width: 30%;
    height: 25vh;
    border: 1px solid red;
    margin-top: 10px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    /* background: linear-gradient(to right, #333, #333 50%, #eee 75%, #333 75%); */
    background: linear-gradient(to right,
            rgba(20, 20, 20, 0) 10%,
            rgba(20, 20, 20, 0.25) 25%,
            rgba(20, 20, 20, 0.5) 50%,
            rgba(20, 20, 20, 0.75) 75%,
            rgba(20, 20, 20, 1) 100%);
`


export default AutoMobileImg;