import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import g70 from "../images/11.webp"
import g90 from "../images/44.webp"
import futuringGenesis from "../images/66.webp"
import gv60 from "../images/55.webp"
import gv70Elec from "../images/33.webp"
import gv70 from "../images/22.webp"
import g80 from "../images/77.webp"
import styled from "styled-components";
import {FaPlay,FaPause} from "react-icons/fa"
import { useRecoilState } from "recoil";
import { playSlide } from "../recoil/atoms";
import {FaChevronRight} from "react-icons/fa"

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
      {
        id:6,
        brand:"ELECTRIFIED",
        name:"G80",
        des:"전기차 그 이상의 시작",
        img:g80
      },
    ]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // autoplay: isAutoPlay,
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
              {/* {isAutoPlay ? 
              (<PauseIcon onClick={()=>{setIsAutoPlay((prev)=>!prev)}}/>) 
              : (<PlayIcon onClick={()=>{setIsAutoPlay((prev)=>!prev)}}/>)} */}
              
            </div>
          ),
          dotsClass: "dots_custom",
    };
   
    return(
    <Wrap>
    <SliderImg {...settings}>
        {carList.map((i,idx)=>(
            <ImgBox>
              <Img src={i.img}/>
              <DesBox>
                <span>{i.brand}</span>
                <span>{i.name}</span>
                <span>{i.des}</span>
              </DesBox>     
              <LineBox/>  
              <LineBox2/>
            </ImgBox>
        ))} 
    </SliderImg>
    <EtcBox>
      <div>
        <span>더 알아보기</span>
        <RigthIcon/>
      </div>
      <div>
        <span>영상보기</span>
        <RigthIcon/>
      </div>
    </EtcBox>
    </Wrap>
    );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  /* object-fit: cover; */
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`

const ImgBox = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* background-size: cover; */
    /* background-color: #111; */
  
`

const DesBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top:15%;
  z-index: 3;
  transition: 0.4s;
  margin-left: 1.1%;
  color: #fff;
  span{
    margin-top: 5px;
  }
  span:first-child{
    font-size: 2.2rem;
    font-weight: 200;
  }
  span:nth-child(2){
    font-size: 4rem;
  }
  span:last-child{
    font-size: 1.8rem;
    font-weight: 200;
  }
`

const Img = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    background-size: cover;
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

const EtcBox = styled.div`
  width: 20%;
  position: absolute;
  bottom:150px;
  left: 15%;
  color: #fff;
  display: flex;
  div{
    display: flex;
    font-size: 1rem;
    margin-right: 30px;
    cursor: pointer;
  }
`
const RigthIcon = styled(FaChevronRight)`
    margin-left: 5px;
`

const LineBox = styled.div`
  width: 1.2%;
  height: 3px;
  position:absolute;
  bottom: 46%;
  background-color: #fff;
`
const LineBox2 = styled.div`
  width: 1.2%;
  height: 3px;
  position:absolute;
  bottom: 40%;
  background-color: #fff;
`
export default MainSlide;