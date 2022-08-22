import React from "react";
import styled, { keyframes } from "styled-components";
import nightStar from "../images/별이있는밤하늘.mp4";


const NightStar = () => {
    return(
    <Wrap>
        <Video autoPlay loop muted>
            <source src={nightStar} type="video/mp4"/>
        </Video>
        <DesBox>
            <TestBox>
                <h2>GENESIS</h2>
            </TestBox>
            <TestBox2>
                <p>제네시스라는 이름에는 열망의 창조,</p>
                <p>새로운 시작과 긍정적인 변화를 향한 우리의</p>
                <p>염원이 담겨 있습니다.</p>
            </TestBox2>
        </DesBox>
    </Wrap>);
};

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 150px;
    display: flex;
    background-color: #111;
    position: relative;
    
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
`
const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 200%, 0);
        }
        to {
        opacity: 1;
        transform: translateZ(0);
        }
`
const DesBox = styled.div`
    position: absolute;
    width: 40%;
    height: 20vh;
    top: 70px;
    left: 17%;
`
const TestBox = styled.div`
    animation: ${fadeInUp} 0.9s;
    color: #fff;
    position: relative;
    h2{
        font-size: 70px;
        letter-spacing: 2px;
        font-weight: 400;
    }
`

const TestBox2 = styled.div`
    animation: ${fadeInUp} 2s;
    color: #fff;
    position: relative;
    margin-top: 20px;
    p{
        font-size: 30px;
        font-weight: 300;
    }
`
export default NightStar;