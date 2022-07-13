import React from 'react'
import "./Myfont.scss";
import styled from "styled-components";
import wavebottom from './wavebottom.svg';
import { Box, Typography } from '@mui/material';
import KingHat from './hat.svg';
import Merry from './Merry.svg';
import useWindowDimensions from '../../functions/useWindows';
import SocialFooter from '../SocialFooter/SocialFooter';
const FooterFooter = styled.div`
     background-image: url(${wavebottom});
     background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100%;
    widht:100%;
    height: 450px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-end;
    justify-content: center;
    align-items: flex-end;
    cursor:pointer;
  `;
  const LeftDiv = styled.div`
  display: block;
  position: relative;
  bottom: 35%;
width: 35%;
left:2%;
`;

const CenterDiv = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: flex-start;
justify-content: center;
align-items: flex-start;
width: 65%;
justify-content: center;
align-content: flex-start;
flex-wrap: nowrap;
flex-direction: column;
`;
const Footer = () => {
  const { height, width } = useWindowDimensions();
  const styleImg = {
    width: width / 5,
  }
  return (
    <FooterFooter>
      <LeftDiv>
      <img src={Merry} className="KingHat" style={styleImg}>
        </img>
      </LeftDiv>
      <CenterDiv>
     
      <Typography className='white entertainement'>JHEELAN GUILLAUME 
      
       2022</Typography>
       <Box >
        <SocialFooter/>
       </Box>
      </CenterDiv>
      
    </FooterFooter>
  )
}

export default Footer