import React from 'react'
import useWindowDimensions from '../../functions/useWindows';
import styled from "styled-components";
import { ReactComponent as SassIconSvg } from "./sass.svg";
import { ReactComponent as StarIconSvg } from "./star.svg";
import { ReactComponent as StarHalfIconSvg } from "./half_star.svg";
import { ReactComponent as CssIconSvg } from "./css.svg";
import { ReactComponent as JavascriptIconSvg } from "./javascript.svg";
import { ReactComponent as HtmlIconSvg } from "./html.svg";
import { ReactComponent as IonicIconSvg } from "./ionic.svg";
import { ReactComponent as NodeIconSvg } from "./node.svg";
import { ReactComponent as ReactIconSvg } from "./react.svg";
import { ReactComponent as TypescriptIconSvg } from "./typescript.svg";

import "./Myfont.scss";

const DiamondPage = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     
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
const CssIcon = styled(CssIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;
const NodeIcon = styled(NodeIconSvg)`
width: 100px;
height: 50px;
fill: black;
`;
const IonicIcon = styled(IonicIconSvg)`
width: 100px;
height: 50px;
fill: black;
`;
const ReactIcon = styled(ReactIconSvg)`
width: 100px;
height: 50px;
fill: black;
`;
const TypescriptIcon = styled(TypescriptIconSvg)`
width: 100px;
height: 50px;
fill: black;
`;
const HtmlIcon = styled(HtmlIconSvg)`
width: 100px;
height: 50px;
fill: black;
`;
const JavascriptIcon = styled(JavascriptIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;
const StarIcon = styled(StarIconSvg)`
  width: 15px;
  height: 15px;
  fill: black;
`;
const StarHalfIcon = styled(StarHalfIconSvg)`
  width: 15px;
  height: 15px;
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
                  <SassIcon />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </div>
              </div>
            </BoxDiamon>

           
          </VBoxDiamon>

          <VBoxDiamon className='v-boxes second'>
            
            <BoxDiamon className='box'>
              <span className="tooltip">JAVASCRIPT</span>
              <div className="box-face">
                <div className="box-text">
                  <JavascriptIcon />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </div>
              </div>
            </BoxDiamon>

            <BoxDiamon className='box'>
              <span className="tooltip">CSS</span>
              <div className="box-face">
                <div className="box-text">
                  <CssIcon />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </div>
              </div>
            </BoxDiamon>

            <BoxDiamon className='box'>
              <span className="tooltip">JAVASCRIPT</span>
              <div className="box-face">
                <div className="box-text">
                  <JavascriptIcon />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
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