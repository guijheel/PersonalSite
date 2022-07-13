import React from 'react'
import HatKing from '../HatKing/HatKing'
import useWindowDimensions from '../../functions/useWindows';
import styled from "styled-components";

const Screen = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-end;
    justify-content: center;
    align-items: center;
    cursor:pointer;
  `;
const LoadingScreen = () => {
    const { height, width } = useWindowDimensions();
    const style = {
        height: height,
      }
  return (
    <Screen style={style} id="Expage">
        <HatKing/>
    </Screen>
  )
}

export default LoadingScreen