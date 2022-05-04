import React from 'react'
import useWindowDimensions from '../../functions/useWindows';
import styled from "styled-components";
import CssIcon from '@mui/icons-material/Css';
import { ReactComponent as SassIconSvg } from "./sass.svg";
import { ReactComponent as StarIconSvg } from "./star.svg";
import { ReactComponent as StarHalfIconSvg } from "./half_star.svg";
import "./Myfont.scss";

const DiamondPage = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     border: solid 1px black ;
  `;

  const SectionDiamon = styled.section`

`;
const WallDiamon = styled.div`

`;
const VBoxDiamon = styled.div`

`;
const BoxDiamon = styled.div`

`;
const SassIcon = styled(SassIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;
const StarIcon = styled(StarIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;
const StarHalfIcon = styled(StarHalfIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;
{
  // media queries pour le shape
  // texte aussi 
}
const DiamondSkill = () => {
  const { height, width } = useWindowDimensions();

  return (

    <DiamondPage >

        <SectionDiamon className='section'>
        <WallDiamon className='wall'>
            <VBoxDiamon className='v-boxes'>
                <BoxDiamon className='box'>
                <span className="tooltip">SASS</span>
        <div className="box-face">
          <div className="box-text">
            <SassIcon/>
        </div>
        </div>
        <div className="box-back">
          <div className="box-text">
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
          </div>
        </div>
                </BoxDiamon>
            </VBoxDiamon>
        </WallDiamon>

        </SectionDiamon>

    </DiamondPage>

  )
}

export default DiamondSkill