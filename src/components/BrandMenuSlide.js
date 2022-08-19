import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { openBrandMenu } from "../recoil/atoms";
import {FaChevronRight,FaExternalLinkAlt} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";

const BrandMenuSlide = () => {
    const navigate = useNavigate();
    const [menuSlide, setMenuSlide] = useRecoilState(openBrandMenu);
    const conceptList = ["콘셉트카 소개", "Genesis X Speedium Coupe Concept", "Genesis X Concept",
    "Mint Concept", "Essentia Concept", "GV80 Concept", "New York Concept"];
    const motorList = ["모토쇼 소개", "서울 모빌리티쇼", "광저우 모터쇼", "상하이 오토쇼", "디지털 모터쇼",
    "뉴욕 국제 모터쇼", "서울 모터쇼 2019", "부산 국제 모터쇼 2018"];
    const roadList = ["로드트립 소개","부산","여주","백두대간","순천","제주 2021","구례-하동"];

    const brandClick = () => {
        setMenuSlide(false)
        navigate("/brand");
    };

    return(
    <Wrap slide={menuSlide}>
        <TopBox>
            <BrandBox>
                <p>브랜드</p>
                <span onClick={brandClick}>브랜드 소개</span>
                <span>비전</span>
                <GolfBox>
                    <p>제네시스X골프</p>
                </GolfBox>
            </BrandBox>
            <ConceptBox>
                <p>콘셉트 카</p>
                {conceptList.map((i, idx)=>(
                    <span>{i}</span>
                ))}
            </ConceptBox>
            <ConceptBox>
                <p>모터쇼</p>
                {motorList.map((i, idx)=>(
                    <span>{i}</span>
                ))}
            </ConceptBox>
            <ConceptBox>
                <p>로드트립</p>
                {roadList.map((i, idx)=>(
                    <span>{i}</span>
                ))}
            </ConceptBox>
        </TopBox>
        <BottomBox>
            <EtcBox>
                <p>PR 센터</p>
                <RigthIcon/>
            </EtcBox>
            <EtcBox>
                <p>제네시스 스튜디오</p>
                <RigthIcon/>
            </EtcBox>
            <EtcBox>
                <p>제네시스 챔피언십</p>
                <LinkIcon/>
            </EtcBox>
        </BottomBox>
    </Wrap>
    );
};

const Wrap = styled.div`
    width: 100%;
    height: 77vh;
    position: absolute;
    z-index: 2;
    transition: 0.7s;
    background-color: #151515;
    margin-top: ${(props) => (props.slide ? "90px" : "-200vh")};
    display: flex;
    flex-direction: column;

`;

const TopBox = styled.div`
    display: flex;
    height: 100%;
    display: flex;
    /* justify-content: space-between; */
`;

const BrandBox = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    color: #fff;
    p{
        font-size: 18px;
        margin-bottom: 20px; 
    }
    /* padding: 70px 100px; */
    padding: 70px 0px 100px 130px;
    span{
        margin-top: 25px;
        opacity: 0.7;
        cursor: pointer;
        :hover{
            opacity: 1;
            transition: 0.7s;;
        }
    }
`;

const GolfBox = styled.div`
    margin-top: 350px;
`;

const ConceptBox = styled.div`
    width: 25%;
    /* padding: 70px 125px; */
    padding: 70px 0px 70px 110px;
    display: flex;
    flex-direction: column;
    color: #fff;
    p{
        font-size: 18px;
        margin-bottom: 20px;
    }
    span{
        margin-top: 25px;
        opacity: 0.7;
        cursor: pointer;
        :hover{
            opacity: 1;
            transition: 0.7s;;
        }
    }
`;


const BottomBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #151515;
    padding: 20px 100px;
    display: flex;
    align-items: center;
    color: #fff;
    border-top: 0.5px solid #3b3b3b;
    border-bottom: 0.5px solid #3b3b3b;
`;
const EtcBox = styled.div`
    margin-right: 70px;
    display: flex;
    p{
        :hover{
            /* border-bottom: 1px solid white; */
            transition: 0.7s;
        };
    }
`;

const RigthIcon = styled(FaChevronRight)`
    margin-left: 5px;
`

const LinkIcon = styled(FaExternalLinkAlt)`
    margin-left: 10px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-top: 25px;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  
`;
export default BrandMenuSlide;