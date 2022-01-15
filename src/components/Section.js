import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgroundImg}>
          <Fade bottom>
            <ItemsText>
              <h1>{ title }</h1>
              <p>{ description }</p>
            </ItemsText>
          </Fade>
            <Buttons>
            <Fade bottom>
              <ButtonGroup>
                <LeftButton>
                  {leftBtnText}
                </LeftButton>
                { rightBtnText &&
                  <RightButton>
                    {rightBtnText}
                  </RightButton>
                }
              </ButtonGroup>
            </Fade>
            <DownArrow src={"/images/down-arrow.svg"} />
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-image: ${props => `url("/images/${props.bgImage}")`};
 display: flex;
 flex-direction: column;
 justify-content: space-between; // vertial
 align-items: center; // horizontal
`

const ItemsText = styled.div`
 padding-top: 15vh;
 text-align: center;
 font-size: larger;
 z-index: -1;
 p {
  font-size: 14px;
 }
 span {
  text-decoration: underline;
  cursor: pointer;
 }
 span:hover {
  color: black;
  text-decoration-color: black;
 }
`

const ButtonGroup = styled.div`
 display: flex;
 margin-bottom: 30px;
 @media (max-width: 768px) {
  flex-direction: column;
 }
`

const LeftButton = styled.div`
 background-color: rgba(23, 26, 32, 0.8);
 height: 40px;
 width: 256px;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 100px;
 opacity: 0.85;
 font-size: 15px;
 cursor: pointer;
 margin: 8px;
`

const RightButton = styled(LeftButton)`
 background-color: white;
 color: black;
 opacity: 0.65;
`
const DownArrow = styled.img`
 height: 40px;
 user-select: none;
 overflow-x: hidden;
 animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
 
`