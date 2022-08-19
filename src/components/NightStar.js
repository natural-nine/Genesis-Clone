import React from "react";
import styled from "styled-components";
import nightStar from "../images/별이있는밤하늘.mp4";


const NightStar = () => {
    return(
    <Wrap>
        <Video autoPlay loop muted>
            <source src={nightStar} type="video/mp4"/>
        </Video>
        <DesBox>

        </DesBox>
    </Wrap>);
};

const Wrap = styled.div`
    width: 100%;
    height: 85vh;
    margin-top: 150px;
    display: flex;
    background-color: #111;
    
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
`

const DesBox = styled.div`
    position: absolute;
    width: 20%;
    height: 20vh;
    border: 2px solid blue;
    /* margin-top: 20px; */
    /* top:20px; */
`

export default NightStar;