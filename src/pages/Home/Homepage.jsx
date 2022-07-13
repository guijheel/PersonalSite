import React from "react";
import "./Myfont.scss";
import styled from "styled-components";
import useWindows from "../../functions/useWindows";
import SocialBar from "../../components/SocialBar/SocialBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import NavRight from "../../components/NavRight/NavRight";
import Hat from "../../components/HatKing/Hat.svg";
import HatKing from "../../components/HatKing/HatKing";

const HomePageDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   
  `;

  const LeftDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
  `;

  const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 50%;
  `;

  const RightDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 25%;
  `;

  const TitleName = styled.h1`
    font-family: "Nick";
    padding: 5px;
    margin: 5px;
    perspective: 650px;
    transition-delay: 0s;
    transition-duration: 1s;
    letter-spacing: 1px;
    word-spacing: 5px;
    margin-right: -20px;
  `;

  const TextInfo = styled.p`
font-family: "system-ui";
   transition-delay: 0s;
    transition-duration: 1s;
    letter-spacing: 1px;
    word-spacing: 2px;
    margin-right: -20px;
  `;

const Homepage = () => {
  const { height, width } = useWindows();
 
  const style = {
    height: height,
  }
  const styleT = {
    fontSize: width / 20,
  }
  const styleP = {
    fontSize: width / 40,
  }
  const ScrollClick = () => {
    setTimeout(() => {
      window.scroll(0,height);
    }, 500);
  }
  
  return (
    <HomePageDiv style={style}>

      <LeftDiv>
        <SocialBar color="secondary" fontSize="large"/>
      </LeftDiv>


      <CenterDiv>
        <TitleName style={styleT} className="title">Jheelan Guillaume</TitleName>
        <TextInfo style={styleP} className="Conso">Developpeur Full Stack JS</TextInfo>
        <div className="iconScroll" onClick={ScrollClick}></div>
      </CenterDiv>

      <RightDiv>
        <NavRight/>
      </RightDiv>

    </HomePageDiv>
  );
};

export default Homepage;
