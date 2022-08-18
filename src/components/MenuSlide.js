import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { openMenu } from "../recoil/atoms";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import g70Sho from "../images/menu-g70-shooting.webp";
import g70 from "../images/menu-g70.webp";
import g80Elec from "../images/menu-g80-elec.webp";
import g80 from "../images/menu-g80.webp";
import g90 from "../images/menu-g90.webp";
import gv60 from "../images/menu-gv60.webp";
import gv70Elec from "../images/menu-gv70-elec.webp";
import gv70 from "../images/menu-gv70.webp";
import gv80 from "../images/menu-gv80.webp";
import ev from "../images/menu-ev.webp";
import { useNavigate } from "react-router-dom";

const MenuSlide = () => {


  const navigate = useNavigate();  
//   const menuSlide = useRecoilValue(openMenu);

  const [menuSlide, setMenuSlide] = useRecoilState(openMenu);
  const [isNext, setIsNext] = useState(false);

  const [isAll, setIsAll] = useState(true);
  const [isSedan, setIsSedan] = useState(false);
  const [isSuv, setIsSuv] = useState(false);

  const allCar = [
    {
      id: 0,
      name: "G70",
      img: g70,
      elec: "",
      des: "",
      ev: "",
    },
    {
      id: 1,
      name: "G70",
      img: g70Sho,
      elec: "",
      des: "SHTOOING BRAKE",
      ev: "",
    },
    {
      id: 2,
      name: "G80",
      img: g80Elec,
      elec: "ELECTRIFIED",
      des: "",
      ev: ev,
    },
    {
      id: 3,
      name: "G80",
      img: g80,
      elec: "",
      des: "",
      ev: "",
    },
    {
      id: 4,
      name: "G90",
      img: g90,
      elec: "",
      des: "",
      ev: "",
    },
    {
      id: 5,
      name: "GV60",
      img: gv60,
      elec: "",
      des: "",
      ev: ev,
    },
    {
        id: 6,
        name: "GV70",
        img: gv70Elec,
        elec: "",
        des: "",
        ev: "ev",
    },
    {
        id: 7,
      name: "GV70",
      img: gv70,
      elec: "",
      des: "",
      ev: "",
    },
    {
        id: 8,
      name: "GV80",
      img: gv80,
      elec: "",
      des: "",
      ev: "",
    },
  ];
  

  const handleClick = (e) => {
    if (e.target.innerHTML === "ALL") {
      setIsAll(true);
      setIsSedan(false);
      setIsSuv(false);
    } else if (e.target.innerHTML === "SEDAN") {
      setIsAll(false);
      setIsSedan(true);
      setIsSuv(false);
    } else if (e.target.innerHTML === "SUV") {
      setIsAll(false);
      setIsSedan(false);
      setIsSuv(true);
    }
  };
  const handleCarClick = (e) => {
    // console.log(e);
    // console.log(e.target.parentElement.firstChild.children[0].innerHTML === "GV80");
    if(e.target.parentElement.firstChild.children[0].innerHTML === "GV80"){
        // setMenuSlide(false);
        navigate("/gv80");
    }
    // navigate("/gv80")
  }
  console.log("its all", isAll, isSedan, isSuv);
  console.log(menuSlide);
  return (
    <Wrap slide={menuSlide} next={isNext}>
      <ModelBox>
        <h4>모델</h4>
        <ModelSelecBox>
          <span onClick={handleClick}>ALL</span>
          <span onClick={handleClick}>SEDAN</span>
          <span onClick={handleClick}>SUV</span>
        </ModelSelecBox>
      </ModelBox>
      <MoblieBox>
            {isAll && isNext && (<IconBox>
            <LeftIcon
              onClick={() => {
                setIsNext((prev) => !prev);
              }}
            />
          </IconBox>)}
        <MobileWrapBox>
            
            {isAll && !isNext &&  (<> {allCar.slice(0,6).map((i, idx) => (
            <MobileSelectBox key={i.id}>
              <CarNameBox>
                <span>{i.name}</span>
                <span></span>
              </CarNameBox>
              <CarImg src={i.img} />
              <CarDetail onClick={handleCarClick}>자세히보기</CarDetail>
              <h3>견적 내기</h3>
              <h3>시승 신청</h3>
            </MobileSelectBox>
          ))}</>)}
          {isAll && isNext && (<> {allCar.slice(6).map((i, idx) => (
            <MobileSelectBox key={i.id}>
              <CarNameBox>
                <span>{i.name}</span>
                <span></span>
              </CarNameBox>
              <CarImg src={i.img} />
              <CarDetail onClick={handleCarClick}>자세히보기</CarDetail>
              <h3>견적 내기</h3>
              <h3>시승 신청</h3>
            </MobileSelectBox>
          ))}</>)}
         {isSedan && (<>
            {allCar.slice(0,5).map((i, idx) => (
            <MobileSelectBox key={i.id}>
              <CarNameBox>
                <span>{i.name}</span>
                <span></span>
              </CarNameBox>
              <CarImg src={i.img} />
              <CarDetail onClick={handleCarClick}>자세히보기</CarDetail>
              <h3>견적 내기</h3>
              <h3>시승 신청</h3>
            </MobileSelectBox>
          ))}
         </>)}
         {isSuv && (
         <>
            {allCar.slice(5).map((i, idx) => (
            <MobileSelectBox key={i.id}>
              <CarNameBox>
                <span>{i.name}</span>
                <span></span>
              </CarNameBox>
              <CarImg src={i.img} />
              <CarDetail onClick={handleCarClick}>자세히보기</CarDetail>
              <h3>견적 내기</h3>
              <h3>시승 신청</h3>
            </MobileSelectBox>
          ))}
         </>)}
        </MobileWrapBox>
        {isAll && !isNext && (<IconBox>
            <RigthIcon
              onClick={() => {
                setIsNext((prev) => !prev);
              }}
            />
          </IconBox>)}
    
      </MoblieBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  /* height: 93vh; */
  /* height: 70vh; */
  height:${(props) => (props.next ? "70vh" : "93vh")};;
  /* margin-top: -200vh; */
  /* margin-top: 70px; */
  margin-top: ${(props) => (props.slide ? "70px" : "-200vh")};
  background-color: #151515;
  /* background-color: blue; */
  position: absolute;
  z-index: 2;
  transition: 0.7s;
  display: flex;
`;
const ModelBox = styled.div`
  width: 16.5%;
  height: 90vh;
  border: 1px solid red;
  padding: 70px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  color: #fff;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 500;
  h4 {
    margin-right: 20px;
  }
`;

const ModelSelecBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  margin-top: 20px;
  span {
    margin-top: 15px;
    cursor: pointer;
  }
`;

const MoblieBox = styled.div`
  width: 90%;
  height: 90vh;
  border: 3px solid yellow;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  padding: 40px 120px;
  justify-content: space-between;
`;

const MobileWrapBox = styled.div`
  width: 100%;
  height: 85vh;
  border: 3px solid red;
  display: flex;
  flex-wrap: wrap;
`;

const MobileSelectBox = styled.div`
  width: 22.8%;
  /* height: 392px; */
  height: 40vh;
  border: 1px solid red;
  margin: 10px 50px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  h3 {
    color: #fff;
  }
`;
const CarNameBox = styled.div`
  width: 81.1%;
  display: flex;
  justify-content: space-between;
  span {
    color: #fff;
  }
`;

const CarDetail = styled.div`
  width: 81.1%;
  height: 50px;
  border: 1px solid #fff;
  background-color: #151515;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #fff;
    transition: 0.3s;
    color: #111;
  }
`;

const CarImg = styled.img`
  width: 80%;
  height: 91px;
`;
const IconBox = styled.div`
  color: #fff;
  font-size: 50px;
`;
const RigthIcon = styled(FaChevronRight)`
  cursor: pointer;
`;

const LeftIcon = styled(FaChevronLeft)`
  cursor: pointer;
`;

export default MenuSlide;
