import React from "react";
import styled, { keyframes } from "styled-components";
import gv80 from "../images/gv80-2.webp";
import {FaChevronRight,FaExternalLinkAlt} from "react-icons/fa"

const AutoMobileImg = () => {
    return(
    <Wrap>
       <Img src={gv80}/>
        <DesBox>
            <BrandNameBox>GENESIS</BrandNameBox>
            <CarNameBox>GV80</CarNameBox>
            <DesignBox>당신과 모두를 위한 디자인</DesignBox>
            <EtcBox>
                <div>
                    <p>견적내기</p>
                    <RigthIcon/>
                </div>
                <div>
                    <p>시승신청</p>
                    <RigthIcon/>
                </div>
            </EtcBox>
        </DesBox>
    </Wrap>
    );
};

const Wrap = styled.div`
    width: 100%;
    height: 86vh;
    overflow-y: hidden;
    margin-top: 130px;
    /* background-color: red; */
    display: flex;
    /* background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%); */
    /* background-color: black; */
    background: linear-gradient(to left,
            rgba(20, 20, 20, 0) 10%,
            rgba(20, 20, 20, 0.25) 25%,
            rgba(20, 20, 20, 0.5) 50%,
            rgba(20, 20, 20, 0.75) 75%,
            rgba(20, 20, 20, 20) 100%);
    background-color: #111;
    position: relative;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    /* background: linear-gradient(to right, #333, #333 50%, #eee 75%, #333 75%); */
    opacity: 0.7;
`
const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
        }
        to {
        opacity: 1;
        transform: translateZ(0);
        }
`

const DesBox = styled.div`
    position: absolute;
    width: 40%;
    height: 70vh;
    top: 70px;
    left: 17%;
    display: flex;
    flex-direction: column;
    
    
`
const NameBox = styled.div`
    color: #fff;
    margin-top: 10px;
    p{
        animation: ${fadeInUp} 1s;
        font-size: 25px;
    }
    h3{
        animation: ${fadeInUp} 1s;
        font-size: 60px;
        letter-spacing: 3px;
        font-weight: 500;
    }
    div{
        animation: ${fadeInUp} 2s;
        font-size: 25px;
    }
`
const EtcBox = styled.div`
    width: 45%;
    height: 50px;
    position: absolute;
    bottom:70px;
    display: flex;
    div{
        animation: ${fadeInUp} 1.7s;
        display: flex;
        color: #fff;
        margin-right: 40px;
    }
`
const RigthIcon = styled(FaChevronRight)`
    margin-left: 5px;
`

const BrandNameBox = styled.div`
     color: #fff;
    margin-top: 10px;
    animation: ${fadeInUp} 0.5s;
    font-size: 35px;
    position: relative;
`
const CarNameBox = styled.div`
    color: #fff;
    margin-top: 5px;
    animation: ${fadeInUp} 1s;
    font-size: 80px;
 
`
const DesignBox = styled.div`
    color: #fff;
    margin-top: 5px;
    animation: ${fadeInUp} 1.7s;
    font-size: 25px;
    position: relative;
`

export default AutoMobileImg;