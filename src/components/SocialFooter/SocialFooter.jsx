import React from 'react'
import './Myfont.scss'
import styled from "styled-components";
import { ReactComponent as GithubIconSvg } from "./github.svg";
import { ReactComponent as FacebookIconSvg } from "./facebook.svg";
import { ReactComponent as InstagramIconSvg } from "./instagram.svg";
import { ReactComponent as TwitterIconSvg } from "./twitter.svg";
import { ReactComponent as MailIconSvg } from "./mail.svg";
import useWindows from "../../functions/useWindows";


const GithubIcon = styled(GithubIconSvg)`
  width: 50px;
  height: 50px;
  fill: #00000047;
`;

const FacebookIcon = styled(FacebookIconSvg)`
  width: 50px;
  height: 50px;
  fill: #00000047;
`;
const InstagramIcon = styled(InstagramIconSvg)`
  width: 50px;
  height: 50px;
  fill: #00000047;
`;
const MailIcon = styled(MailIconSvg)`
  width: 50px;
  height: 50px;
  fill: #00000047;
`;
const TwitterIcon = styled(TwitterIconSvg)`
  width: 50px;
  height: 50px;
  fill: #00000047;
`;


const SocialBarDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
align-items: stretch;
position: relative;
bottom: -50%;
justify-content: space-around; 
`;

const GithubUl = styled.ul`
 display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
`;

const GithubLi = styled.li``;

const GithubA = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;
const GithubTxt = styled.span`
  color: black;
`;


const SocialFooter = () => {
    const { height, width } = useWindows();



  return (
    
        <div className='SocialDisplay'>
                <FacebookIcon/>
                <GithubIcon/>
                <MailIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
        </div>
  )
}

export default SocialFooter