import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import g70 from "../images/g70-shooting.webp"
import g90 from "../images/g90.webp"
import futuringGenesis from "../images/futuring-genesis.webp"
import gv60 from "../images/gv60.webp"
import gv70Elec from "../images/gv70-elec.webp"
import gv70 from "../images/gv70.webp"
import styled from "styled-components";
import {FaPlay,FaPause} from "react-icons/fa"
import { useRecoilState } from "recoil";
import { playSlide } from "../recoil/atoms";

const MainSlide = () => {
    const [isAutoPlay, setIsAutoPlay] = useRecoilState(playSlide)
    const carList = [
      {
        id:0,
        brand:"GENESIS",
        name:"G70 SHOOTING BRAKE",
        des:"온전히 나답게",
        img:g70
      },
      {
        id:1,
        brand:"GENESIS",
        name:"GV70",
        des:"2022년형 출시",
        img:gv70
      },
      {
        id:2,
        brand:"ELECTRIFIED",
        name:"GV70",
        des:"또 다른 감동을 충전하는 시간",
        img:gv70Elec
      },
      {
        id:3,
        brand:"GENESIS",
        name:"G90",
        des:"한국자동차기자협회 2022 올해의 차 수상",
        img:g90
      },
      {
        id:4,
        brand:"GENESIS",
        name:"GV60",
        des:"당신과의 교감을 위해",
        img:gv60
      },
      {
        id:5,
        brand:"미래를 향한 대담한 비전",
        name:"FUTURING GENESIS",
        des:"",
        img:futuringGenesis
      },
    ]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: isAutoPlay,
        appendDots: (dots) => (
            <div
              style={{
                width: "100%",
                position: "absolute",
                bottom: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul> {dots} </ul>
              {isAutoPlay ? 
              (<PauseIcon onClick={()=>{setIsAutoPlay((prev)=>!prev)}}/>) 
              : (<PlayIcon onClick={()=>{setIsAutoPlay((prev)=>!prev)}}/>)}
              
            </div>
          ),
          dotsClass: "dots_custom",
    };
   
    return(
    <>
    <SliderImg {...settings}>
        {carList.map((i,idx)=>(
            <ImgBox>
              <Img src={i.img}/>
              <DesBox>
                <span>{i.brand}</span>
                <span>{i.name}</span>
                <span>{i.des}</span>
              </DesBox>       
            </ImgBox>
        ))} 
    </SliderImg>
    </>
    );
};

const ImgBox = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    border: 3px solid red;
    font-size: 0;
`

const DesBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 100px;
  transition: 0.4s;
  color: blue;
`

const Img = styled.img`
    width: 100%;
    height: 100vh;
    background-size: cover;
    font-size: 0;
    position: relative;
    /* box-shadow: 5px 5px 10px black; */
    /* position: ""; */
`



const PlayIcon = styled(FaPlay)`
    cursor: pointer;
    color: #fff;
    opacity: 0.7;
    font-size: 10px;
`
const PauseIcon = styled(FaPause)`
    cursor: pointer;
    color: #fff;
    opacity: 0.5;
    font-size: 10px;
`

const SliderImg = styled(Slider)`
  width: 100%;
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    margin: auto 0;
    padding: 0;
  }
  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 100px 10px;
    padding: 0;
  }
  .dots_custom li button {
    border: none;
    background: gray;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 6px;
    width: 6px;
    border-radius: 100%;
    padding: 0;
    display: hidden;
  }
  .dots_custom li.slick-active button {
    background-color: #fff;
  }
`;
export default MainSlide;