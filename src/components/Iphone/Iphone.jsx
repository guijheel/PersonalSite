import React from 'react'
import styled from "styled-components";
import "./Myfont.scss";

const IphoneDiv = styled.div`
    padding:5px;
    cursor:pointer;
  `;


const Iphone = () => {
  return (
    <IphoneDiv>
     
        <figure className='iphone'></figure>

    </IphoneDiv>
  )
}

export default Iphone