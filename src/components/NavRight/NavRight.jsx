import React from 'react';
import styled from "styled-components";
import './Myfont.scss'

import useWindowDimensions from '../../functions/useWindows';

const NavigationBarDiv = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-content: center;
align-items: center;
`;

const NavRight = () => {
  const { height, width } = useWindowDimensions();

  const styleText = {
    fontSize: width / 75,
  }
  const style = { fontSize: styleText,transition: 'font-size 0.5s'  };


  return (
  <NavigationBarDiv>
      
  </NavigationBarDiv>
  )
  
};

export default NavRight;
