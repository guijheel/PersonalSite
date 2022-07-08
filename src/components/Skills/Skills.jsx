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
    <section class="skills-section my-skills" id="skills">

  <img src="https://raw.githubusercontent.com/guijheel/PersonalSite/8e5bc14cc3973b9b53c0d425f6bb04701bcb2f1c/skills%20(1).svg" alt="Skills" data-aos="zoom-out"/>
</section>
    </div>
  )
}

export default Skills