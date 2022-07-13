import React from 'react'
import useWindowDimensions from '../../functions/useWindows';
import styled from "styled-components";
import Iphone from '../../components/Iphone/Iphone';
import "./Myfont.scss";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Iphone2 from '../../components/IphoneII/Iphone2';
import Iphone3 from '../../components/IphoneIII/Iphone3';
import Iphone4 from '../../components/IphoneIV/Iphone4';
import Heart from '../../components/Heart/Heart';
import { Box } from '@mui/material';
import { useHistory } from "react-router-dom";

const ExpPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
 
  `;
  const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 55%;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content:flex-end;
  align-items: center;
  width: 45%;
`;
const BlockDiv = styled.div`
 display:flex;
 justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    align-content: center;
    flex-direction: row;
`;
const TextInfo = styled.p`
font-family: "system-ui";
   transition-delay: 0s;
    transition-duration: 1s;
    letter-spacing: 1px;
    word-spacing: 2px;
    margin-right: -20px;
    cursor:pointer;

  `;
const Exp = () => {
  const { height, width } = useWindowDimensions();
  const style = {
    height: height + height / 2,
  }
  const styleP = {
    fontSize: width / 40,
  }
  const styleT = {
    fontSize: width / 20,
  }


  const GooglePush = () => {
  
  }

  const ApplePush = () => {
   
  }

  return (
    <div>
      <ExpPageDiv style={style} id="Expage">
        <CenterDiv>

        <ParallaxProvider>

        <Parallax 
        easing={"easeIn"}
        translateX={['-120px', '200px']} translateY={['-140px', '200px']} >

        <TextInfo style={styleT} className="Conso">
         IFCM hybrid app
          </TextInfo>
          <TextInfo style={styleP} className="Conso">
          avaible on iOs and Android 
          </TextInfo>
          <TextInfo style={styleP} className="Conso">
          made with react ionic.
          </TextInfo>
        </Parallax>

        </ParallaxProvider>

        <ParallaxProvider>
<br/>
<br/>
    <Parallax 
    easing={"easeOut"}
    translateX={['-180px', '100px']} translateY={['-70px', '200px']} >
  <BlockDiv>
  <Box
        component="img"
        sx={{
          height: 57,
          padding:"5px",
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Android"
        src="https://i.ibb.co/HT2L61j/google.png"
        className='pointer'
        onClick={GooglePush()}
      >
        
      </Box>
        <Box 
        component="img"
        sx={{
          height: 60,
          padding:"5px",
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          
        }}
        alt="iOS"
        src="https://i.ibb.co/3MSkCXT/swync-download-android-ios-split.png"
        href=""
        className='pointer'  
      >
      </Box>
  </BlockDiv>
</Parallax>

</ParallaxProvider>
        </CenterDiv>
        <RightDiv>

        <ParallaxProvider>

    <div>
    <Parallax speed={10} translateY={[-30, -70]}>
            <Iphone/>
        </Parallax>
        <Parallax speed={10} translateY={[-30, -50]}>
            <Iphone3/>
        </Parallax>
    </div>
        

      <div>
      <Parallax speed={10} translateY={[50, -70]}>
            <Iphone2/>
        </Parallax>
        <Parallax speed={10} translateY={[70, -50]}>
            <Iphone4/>
        </Parallax>
      </div>
       


        </ParallaxProvider>
          
        </RightDiv>

      </ExpPageDiv>
    </div>
  )
}

export default Exp