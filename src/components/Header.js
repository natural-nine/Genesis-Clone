import React from "react";
import styled from "styled-components";
import genesisLogo from "../images/genesis-logo.webp"
import {FaSearch, FaBars} from "react-icons/fa"
import { useSetRecoilState } from "recoil";
import { openMenu } from "../recoil/atoms";
import { Link } from "react-router-dom";

const Header = () => {
    const mainList = ["모델", "구매", "체험", "멤버스", "제네시스"];
    const userList = ["고객센터", "마이 페이지"];
    const isSetMenuOpen = useSetRecoilState(openMenu);
    const menuClick = (e) => {
        if(e.target.innerHTML === "모델"){
            isSetMenuOpen((prev)=>!prev)
        };
    };
    
    return(
    <Wrap>
        <ModelMainBox>
            <Link to="/">
            <ModelBox style={{"opacity":"1"}}>
                <img src={genesisLogo}/>
            </ModelBox>
            </Link>
            {mainList.map((i,idx)=>(<ModelBox key={idx} onClick={menuClick}>{i}</ModelBox>))}
        </ModelMainBox>
        <ModelMainBox>
            {userList.map((i,idx)=>(<UserBox key={idx}>{i}</UserBox>))}
            <UserBox>
                <SearchIcon/>
            </UserBox>
            <UserBox>
                <MoreIcon/>
            </UserBox>
        </ModelMainBox>
     </Wrap>
    );
};


const Wrap = styled.div`
    width: 100%;
    height: 70px;
    background-color: #111111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 110px;
    position: fixed;
    z-index: 3;
`

const ModelMainBox = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 99%;
        height: 25.9px;
    }
`
const ModelBox = styled.div`
    color: #fff;
    margin: 0px 24px;
    font-size: 18px;
    opacity: 0.7;
    :hover{
        opacity: 1;
        transition: 0.3s;
    }
    cursor: pointer;
`

const UserBox = styled.div`
    color: #fff;
    margin: 0px 27px;
    font-size: 18px;
    opacity: 0.7;
    :hover{
        opacity: 1;
        transition: 0.3s;
    }
    cursor: pointer;
`
const SearchIcon = styled(FaSearch)`
    font-size: 20px;

`
const MoreIcon = styled(FaBars)`
    font-size: 20px;

`
export default Header;