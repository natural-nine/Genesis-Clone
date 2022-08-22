import React from "react";
import styled from "styled-components";
import { FaChevronCircleDown } from "react-icons/fa";

const CarHeader = () => {
  const highlightList = [
    "디자인",
    "안전",
    "테크놀로지",
    "퍼포먼스",
    "갤러리",
    "Genesis Genuine Parts",
    "스펙",
  ];
  return (
    <Wrap>
      <FirstBox>
        <NameBox>GV80</NameBox>
        <DesBox>
          <div>하이라이트</div>
          {highlightList.map((i, idx) => (
            <div>
              <span key={idx}>{i}</span>
            </div>
          ))}
        </DesBox>
      </FirstBox>
      <SecondBox>
        <ShoopingBox>
          <p>쇼핑도구</p>
          <DownIcon />
        </ShoopingBox>
      </SecondBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 6vh;
  top: 90px;
  background-color: #151515;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;
  position: fixed;
  z-index: 2;
  border-top: 0.5px solid #3b3b3b;
  border-bottom: 0.5px solid #3b3b3b;
`;
const FirstBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
`;

const NameBox = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 15%;
  font-size: 20px;
`;

const DesBox = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  justify-content: start;
  div:first-child{
    margin-right: 30px;
    border-bottom:4px solid #fff;
  }
 div{
  height: 153%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    margin-right: 30px;
    opacity: 0.7;
    font-size: 1em;
    :hover {
      transition: 0.4s;
      opacity: 1;
    }
  }
 }
  
`;

const SecondBox = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const ShoopingBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  color: #fff;
  opacity: 0.7;
`;

const DownIcon = styled(FaChevronCircleDown)`
  font-size: 25px;
  margin-left: 15px;
`;

export default CarHeader;
