import React from 'react'
import useWindowDimensions from '../../functions/useWindows';
import styled from "styled-components";

const ContactPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     border: solid 1px black ;
  `;

const Contact = () => {
  const { height, width } = useWindowDimensions();
 
  const style = {
    height: height,
  }
  return (
    <div>
      <ContactPageDiv style={style}>
      Contact
      </ContactPageDiv>
    </div>
  )
}

export default Contact