import React from 'react'
import useWindowDimensions from '../../functions/useWindows';
import styled, { keyframes } from "styled-components";
import "./Myfont.scss";

const MagicBtn = styled.button`
  
  `;


{
  // media queries pour le shape
  // texte aussi 
}
const Profile = () => {
  const { height, width } = useWindowDimensions();

  const style = {
    height: height,
  }
  const styleShape = {
    height: height / 1.5,
    width: width / 2,
    maxWidth: "1280px",
    maxHeight: "824px",
  }
  const styleP = {
    fontSize: width / 80,
  }
  return (

    <MagicBtn className='bubble'>
        Learn More
    </MagicBtn>

  )
}

export default Profile