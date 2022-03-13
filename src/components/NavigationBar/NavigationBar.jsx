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

const NavigationTextDiv = styled.h3`
 display: flex;
text-decoration: none;
text-align: left;
`;

const NavigationArrow = styled.div`
display:flex;
`;
const NavigationTextSpan = styled.span`
display:flex;
`;

const NavigationArrowImg = styled.img`
display: flex;
    width: 30%;
    transform: rotateZ(269deg);
`;
const NavigationBar = () => {
  const { height, width } = useWindowDimensions();

  const styleText = {
    fontSize: width / 75,
  }
  const style = { fontSize: styleText,transition: 'font-size 0.5s'  };


  return (
    <NavigationBarDiv>

      <NavigationTextDiv id="title">
        <NavigationTextSpan style={styleText} onMouseEnter={({target})=>target.style.fontSize= "200%"} 
  onMouseLeave={({target})=>target.style.fontSize= "140%"}>
          HOME
        </NavigationTextSpan>
       
      </NavigationTextDiv>
       <br/>
       <br/>
     
        <NavigationArrowImg src="../../../assets/img/fleche.png"/>
          
        
     

       <br/>
       <br/>

       <NavigationTextDiv id="title">
       <NavigationTextSpan style={styleText} onMouseEnter={({target})=>target.style.fontSize= "200%"} 
  onMouseLeave={({target})=>target.style.fontSize= "140%"}>
          PROFILE
        </NavigationTextSpan>
      </NavigationTextDiv>
       <br/>
       <br/>

       <NavigationArrowImg src="../../../assets/img/fleche.png"/>

       <br/>
       <br/>

       <NavigationTextDiv id="title">
       <NavigationTextSpan style={styleText} onMouseEnter={({target})=>target.style.fontSize= "200%"} 
  onMouseLeave={({target})=>target.style.fontSize= "140%"}>
          EXP
        </NavigationTextSpan>
      </NavigationTextDiv>
       <br/>
       <br/>
      
       <NavigationArrowImg src="../../../assets/img/fleche.png"/>

      <br/>
       <br/>

       <NavigationTextDiv id="title">
       <NavigationTextSpan style={styleText} onMouseEnter={({target})=>target.style.fontSize= "200%"} 
  onMouseLeave={({target})=>target.style.fontSize= "140%"}>
          CONTACT
        </NavigationTextSpan>
      </NavigationTextDiv>
       <br/>
       <br/>

    

    </NavigationBarDiv>
  )
  
};

export default NavigationBar;
