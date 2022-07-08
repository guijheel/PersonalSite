import React from 'react'
import "./Myfont.scss";
import styled from "styled-components";
import Triangle from './Triangle';
import HatKing from '../HatKing/HatKing';
import Hat from "../HatKing/Hat.svg";

const TextInfo = styled.p`
font-family: "system-ui";
   transition-delay: 0s;
    transition-duration: 1s;
    letter-spacing: 1px;
    word-spacing: 2px;
    margin-right: -20px;
  `;

const Skills = () => {
  return (
    <div>
    <section className="skills-section my-skills" id="skills">
  <img src="https://raw.githubusercontent.com/guijheel/PersonalSite/ec7df9f66cf12e7644bb91a427c202e7b7f1d846/skills%20(2).svg" alt="Skills" data-aos="zoom-out"/>
</section>
    </div>
  )
}

export default Skills