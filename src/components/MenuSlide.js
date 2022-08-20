import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { openModelMenu } from "../recoil/atoms";
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

  const [menuSlide, setMenuSlide] = useRecoilState(openModelMenu);
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
        ev: ev,
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
    };
  };
  const handleCarClick = (e) => {
    if(e.target.parentElement.firstChild.children[0].innerText === "GV80"){
        setMenuSlide(false);
        navigate("/gv80");
    };
    // console.log(e)
  };
  return (
    <Wrap slide={menuSlide} next={isNext} style={{"height" : isSedan || isSuv ? "100vh" : ""}}>
      <ModelBox>
        <h4>모델</h4>
        <ModelSelecBox>
          <Span1 all={isAll} onClick={handleClick}>ALL</Span1>
          <Span2 sedan={isSedan} onClick={handleClick}>SEDAN</Span2>
          <Span3 suv={isSuv} onClick={handleClick}>SUV</Span3>
        </ModelSelecBox>
      </ModelBox>
      <MoblieBox>
            {isAll && isNext && (
            <LeftIconBox>
            <LeftIcon
              onClick={() => {
                setIsNext((prev) => !prev);
              }}
            />
          </LeftIconBox>)}
        <MobileWrapBox>
            
            {isAll && !isNext &&  (<> {allCar.slice(0,6).map((i, idx) => (
            <MobileSelectBox key={i.id}>
              <CarNameBox>
                <div>
                  <DesSpan2>{i.elec}</DesSpan2>
                  <p>{i.name}</p>
                  <DesSpan1>{i.des}</DesSpan1>
                </div>
                
                {i.ev &&(<img src={i.ev}/>)}
              </CarNameBox>
              <CarImg src={i.img} />
              <CarDetail onClick={handleCarClick}>자세히보기</CarDetail>
              <EtcBox>
                <span>견적 내기</span>
                <span>시승 신청</span>
              </EtcBox>
            </MobileSelectBox>
          ))}</>)}
          {isAll && isNext && (<> {allCar.slice(6).map((i, idx) => (
            <MobileSelectBox key={i.id}>
              <CarNameBox>
                <div>
                  <DesSpan2>{i.elec}</DesSpan2>
                  <p>{i.name}</p>
                  <DesSpan1>{i.des}</DesSpan1>
                </div>
                {i.ev &&(<img src={i.ev}/>)}
              </CarNameBox>
              <CarImg src={i.img} />
              <CarDetail onClick={handleCarClick}>자세히보기</CarDetail>
              <EtcBox>
                <span>견적 내기</span>
                <span>시승 신청</span>
              </EtcBox>
            </MobileSelectBox>
          ))}</>)}
         {isSedan && (<>
            {allCar.slice(0,5).map((i, idx) => (
            <MobileSelectBox key={i.id}>
              <CarNameBox>
                <div>
                <DesSpan2>{i.elec}</DesSpan2>
                  <p>{i.name}</p>
                  <DesSpan1>{i.des}</DesSpan1>
                </div>
                {i.ev &&(<img src={i.ev}/>)}
              </CarNameBox>
              <CarImg src={i.img} />
              <CarDetail onClick={handleCarClick}>자세히보기</CarDetail>
              <EtcBox>
                <span>견적 내기</span>
                <span>시승 신청</span>
              </EtcBox>
            </MobileSelectBox>
          ))}
            
         </>)}
         {isSuv && (
         <>
            {allCar.slice(5).map((i, idx) => (
            <MobileSelectBox key={i.id}>
              <CarNameBox>
                <div>
                <DesSpan2>{i.elec}</DesSpan2>
                  <p>{i.name}</p>
                  <DesSpan1>{i.des}</DesSpan1>
                </div>
                {i.ev &&(<img src={i.ev}/>)}
                
              </CarNameBox>
              <CarImg src={i.img} />
              <CarDetail onClick={handleCarClick}>자세히보기</CarDetail>
              <EtcBox>
                <span>견적 내기</span>
                <span>시승 신청</span>
              </EtcBox>
              
            </MobileSelectBox>
          ))}
         </>)}
        </MobileWrapBox>
        {isAll && !isNext && (
        <RigthIconBox>
            <RigthIcon
              onClick={() => {
                setIsNext((prev) => !prev);
              }}
            />
          </RigthIconBox>)}
    
      </MoblieBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height:${(props) => (props.next ? "70vh" : "100vh")};;
  margin-top: ${(props) => (props.slide ? "90px" : "-200vh")};
  background-color: #151515;
  position: absolute;
  z-index: 2;
  transition: 0.6s;
  display: flex;
  border-top: 0.5px solid #3b3b3b;
  border-bottom: 0.5px solid #3b3b3b;
  
`;
const ModelBox = styled.div`
  width: 16.5%;
  height: 90vh;
  padding: 70px 0px 100px 120px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: #fff;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 500;
`;

const ModelSelecBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  span {
    margin-top: 25px;
    cursor: pointer;
    font-size: 22px;
    :hover{
      opacity: 1;
    }
  }
`;

const Span1 = styled.span`
  opacity: ${(props) => (props.all ? "1" : "0.7")};
`
const Span2 = styled.span`
  opacity: ${(props) => (props.sedan ? "1" : "0.7")};

`
const Span3 = styled.span`
  opacity: ${(props) => (props.suv ? "1" : "0.7")};
`

const MoblieBox = styled.div`
  width: 90%;
  height: 90vh;
  display: flex;
  align-items: center;
  padding: 40px 120px;
  justify-content: space-between;
  position: relative;
`;

const MobileWrapBox = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  
`;

const MobileSelectBox = styled.div`
  width: 20.5%;
  height: 35vh;
  margin: 10px 50px;
  display: flex;
  flex-direction: column;
  padding: 0px 14px;
  h3 {
    color: #fff;
  }
`;
const CarNameBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin-top: 15px;
  position: relative;
  /* span{
    position: absolute;
    top: 100%;
  } */
  div{
    display: flex;
    flex-direction: column;
    opacity: 0.7;
    P{
      font-size: 25px;
    }
  }
  img{
    width: 7.8%;
    height: 2.22vh;
  }
`;

const DesSpan1 = styled.span`
  position: absolute;
  top: 100%;
`

const DesSpan2 = styled.span`
  position: absolute;
  top: -50%;
`
const CarDetail = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #fff;
  background-color: #151515;
  color: #fff;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 50px;
  ::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #fff;
    right: 100%;
    bottom: 0;
    transition: 0.4s;
    z-index: -1;
  }
  :hover::before{
    transform: translateX(100%);

  }
  :hover{
    color: black;
    z-index: 2;
  }
`;

const CarImg = styled.img`
  width: 100%;
  height: 91px;
  margin-top: 30px;
`;
const RigthIconBox = styled.div`
  color: #fff;
  font-size: 45px;
  position: absolute;
  right: 90px;
  font-weight: lighter;
`

const LeftIconBox = styled.div`
  color: #fff;
  font-size: 45px;
  position: absolute;
  left: 90px;
  font-weight: lighter;
`

const RigthIcon = styled(FaChevronRight)`
  cursor: pointer;
  opacity: 0.5;
`;

const LeftIcon = styled(FaChevronLeft)`
  cursor: pointer;
  opacity:0.5;
`;

const EtcBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  letter-spacing: 1px; 
  font-size: 14px;
  /* font-weight: lighter; */
  color: #fff;
  span{
    margin-top: 5px;
  }
`

export default MenuSlide;
