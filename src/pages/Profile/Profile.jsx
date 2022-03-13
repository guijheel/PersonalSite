import React from 'react'
import useWindowDimensions from '../../functions/useWindows';
import styled from "styled-components";

const ProfilePageDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     border: solid 1px black ;
  `;

const Profile = () => {
  const { height, width } = useWindowDimensions();
 
  const style = {
    height: height,
  }
  return (
    <div>
      <ProfilePageDiv style={style}>
        Profile
      </ProfilePageDiv>
    </div>
  )
}

export default Profile