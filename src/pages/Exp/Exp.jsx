import React from 'react'
import useWindowDimensions from '../../functions/useWindows';
import styled from "styled-components";

const ExpPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     border: solid 1px black ;
  `;

const Exp = () => {
  const { height, width } = useWindowDimensions();
 
  const style = {
    height: height,
  }
  return (
    <div>
      <ExpPageDiv style={style}>
        Exp
      </ExpPageDiv>
    </div>
  )
}

export default Exp