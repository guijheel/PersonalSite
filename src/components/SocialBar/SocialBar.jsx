import React from "react";
import './Myfont.scss'
import styled from "styled-components";
import { ReactComponent as GithubIconSvg } from "./github.svg";
import { ReactComponent as FacebookIconSvg } from "./facebook.svg";
import { ReactComponent as InstagramIconSvg } from "./instagram.svg";
import { ReactComponent as TwitterIconSvg } from "./twitter.svg";
import { ReactComponent as MailIconSvg } from "./mail.svg";
import useWindows from "../../functions/useWindows";

const SocialBarDiv = styled.div`
  display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
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
const GithubIcon = styled(GithubIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;

const FacebookIcon = styled(FacebookIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;
const InstagramIcon = styled(InstagramIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;
const MailIcon = styled(MailIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;
const TwitterIcon = styled(TwitterIconSvg)`
  width: 100px;
  height: 50px;
  fill: black;
`;

const GithubTxt = styled.span`
  color: black;
`;





const SocialBar = () => {
  
const { height, width } = useWindows();
console.log(height)
console.log(width)
const styles = {
  position:"relative",
  left:height / 7 ,

}



  return (
    <SocialBarDiv className="SocialBarMobile">

    <GithubUl className="UlSocial" style={styles}>
        <GithubLi className="LiSocial">
          <GithubA  className="ASocial" href='https://instagram.com' target="_blank">
            <InstagramIcon aria-hidden="true" className="IconSocial"/>
            <GithubTxt className="TextSocial"> Instagram</GithubTxt>
          </GithubA>
        </GithubLi>
      </GithubUl>
      <br/>
      <br/>

      <GithubUl className="UlSocial" style={styles}>
        <GithubLi className="LiSocial">
          <GithubA  className="ASocial"  href='https://facebook.com' target="_blank">
            <FacebookIcon aria-hidden="true" className="IconSocial"/>
            <GithubTxt className="TextSocial"> Facebook</GithubTxt>
          </GithubA>
        </GithubLi>
      </GithubUl>
      <br/>
      <br/>

        <GithubUl className="UlSocial" style={styles}>
        <GithubLi className="LiSocial">
          <GithubA  className="ASocial"  href='https://twitter.com' target="_blank">
            <TwitterIcon aria-hidden="true" className="IconSocial"/>
            <GithubTxt className="TextSocial"> Twitter</GithubTxt>
          </GithubA>
        </GithubLi>
      </GithubUl>
      <br/>
      <br/>

      <GithubUl className="UlSocial" style={styles}>
        <GithubLi className="LiSocial">
          <GithubA  className="ASocial"  href='https://github.com/guijheel' target="_blank">
            <GithubIcon aria-hidden="true" className="IconSocial"/>
            <GithubTxt className="TextSocial"> Github</GithubTxt>
          </GithubA>
        </GithubLi>
      </GithubUl>
     
      <br/>
      <br/>
      <GithubUl className="UlSocial" style={styles}>
        <GithubLi className="LiSocial">
          <GithubA  className="ASocial"  href="mailto:contact@guillaumejheelan.com" target="_blank">
            <MailIcon aria-hidden="true" className="IconSocial"/>
            <GithubTxt className="TextSocial"> Mail</GithubTxt>
          </GithubA>
        </GithubLi>
      </GithubUl>
    </SocialBarDiv>
  );
};

export default SocialBar;
