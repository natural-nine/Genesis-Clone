import React from "react";
import styled from "styled-components";
import { FaChevronCircleDown } from "react-icons/fa";

const CarHeader = () => {
  const highlightList = [
    "하이라이트",
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
          {highlightList.map((i, idx) => (
            <span key={idx}>{i}</span>
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
  height: 75px;
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
  border: 2px solid red;
  width: 60%;
  height: 100%;
  display: flex;
`;

const NameBox = styled.div`
  border: 1px solid green;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 15%;
  font-size: 20px;
`;

const DesBox = styled.div`
  border: 1px solid yellow;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 100%;
  /* justify-content: end; */
  /* font-size: 1.3rem; */
  span:first-child {
    opacity: 1;
    /* border: 1px solid yellow; */
  }
  span {
    cursor: pointer;
    margin-left: 30px;
    opacity: 0.7;
    font-size: 15px;
    :hover {
      transition: 0.4s;
      opacity: 1;
    }
  }
`;

const SecondBox = styled.div`
  border: 2px solid blue;
  width: 40%;
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
