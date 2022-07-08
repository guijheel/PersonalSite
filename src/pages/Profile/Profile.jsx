import React from 'react'
import useWindowDimensions from '../../functions/useWindows';
import DiamondSkill from "../../components/DiamondSkill/DiamondSkill";
import styled from "styled-components";
import "./Myfont.scss";
import Skills from '../../components/Skills/Skills';

const ProfilePageDiv = styled.div`
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
    justify-content: flex-start;
    align-items: center;
    width: 45%;
  `;


const ContainerDiv = styled.div`
  
`;
const ShapeDiv = styled.div`
  
`;
const TextDiv = styled.p`
display: flex;
font-family: system-ui;
flex-direction: column;
flex-wrap: nowrap;
align-content: center;
justify-content: center;
align-items: center;
width: 50%;
color:white;
margin-left: 15%;
margin-right: 15%;
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
    fontSize: width / 55,
  }
  return (

    <ProfilePageDiv style={style}>

      <CenterDiv>
        <ContainerDiv className='container'>
          <ShapeDiv className='shape' style={styleShape}>
            <TextDiv  style={styleP} className="text_shape">
              I'm Developper Full Stack JS Web and Mobile with two years
              of experience both front-end and back-end developpement
              and performing quality assurance.
          
            </TextDiv>
          </ShapeDiv>
        </ContainerDiv>

      </CenterDiv>

      <RightDiv className='md_div'>
          <Skills/> 
      </RightDiv>

    </ProfilePageDiv>

  )
}

export default Profile