import React from "react";
import styled from "styled-components";

const BrandHeader = () => {
    return(
    <Wrap>
        <BrandFirst>
            <p>브랜드</p>
        </BrandFirst>
        <BrandSecond>
            <div style={{"borderBottom":"3px solid white", "opacity":"1"}} >
                브랜드 소개
            </div>
            <div>
                비전
            </div>
        </BrandSecond>
    </Wrap>
    );
};


const Wrap = styled.div`
  width: 100%;
  height: 75px;
  top: 90px;
  background-color: #151515;
  display: flex;
  align-items: center;
  padding: 10px 120px;
  position: fixed;
  z-index: 2;
  border-top: 0.5px solid #3b3b3b;
  border-bottom: 0.5px solid #3b3b3b;
`;

const BrandFirst = styled.div`
    width: 11%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    p{
        font-size: 22px;
    }
    
`

const BrandSecond = styled.div`
    width: 30%;
    height: 130%;
    display: flex;
    align-items: center;
    div{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        color: #fff;
        margin-right: 50px;
        opacity: 0.7;
        :hover{
            opacity: 1;
            transition: 0.7s;
        }
        cursor: pointer;
    }
`

export default BrandHeader;