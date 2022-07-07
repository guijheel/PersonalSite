import React from 'react'
import useWindowDimensions from '../../functions/useWindows';
import styled from "styled-components";
import Form from '../../components/Form/Form';
import "./Myfont.scss";

const ContactPageDiv = styled.div`
    display: flex;
  
    
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
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
width: 80%;
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

const Contact = () => {
  const { height, width } = useWindowDimensions();
 
  const style = {
    height: height,
  }
  return (
    <div >
      <ContactPageDiv>
  

      <CenterDiv>
        <Form/>
      </CenterDiv>

     
    
      </ContactPageDiv>

      
    </div>
  )
}

export default Contact