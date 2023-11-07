import React from "react";
import styled from "styled-components";
import iphoneleft from "../../../images/iphone_left.png";
import iphoneright from "../../../images/iphone_right.png";
import iphonecentre from "../../../images/iphone_centre.png";

const MainContainer = styled.div`
  display: flex;
  padding: 80px 0px 120px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 76px;
  align-self: stretch;
  background-color: #000;
`;

const TextContainer = styled.div`
  text-align: center;
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1;
`;

const FirstLine = styled.div`
  display: block;
  margin-top: -50px;
`;
const SecondLine = styled.div`
  display: block;
  color: var(--neutrals-grey-4, #e7e7ea);
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  margin-top: -50px;
`;

const NormalText = styled.span`
  color: var(--White, #fff);
  display: block;
`;

const GradientText = styled.span`
  background: linear-gradient(97deg, #78e65d 47.68%, #d5fa39 70.85%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`;

// Mobile Images
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CentralImage = styled.div`
  width: 329.935px;
  height: 668.698px;
  flex-shrink: 0;
  background: url(${iphonecentre}) center / cover no-repeat;
  position: relative;
  z-index: 10;
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  border-radius: 50px;
  border: 10px solid black;
 
  box-shadow: rgba(0, 160, 0, 0.56) 10px 102px 102px 0px;
  outline: 1px solid white;
`;

const SideImage = styled.div`
  width: 261.338px;
  height: 529.668px;
  flex-shrink: 0;
  background: url(${iphoneleft}) center / cover no-repeat;
  border-radius: 50px;
  margin-right: -20px;
  border: 10px solid black;
  box-shadow: rgba(0, 160, 0, 0.96) 16px 22px 100px 22px;
  outline: 1px solid white;
`;

const RightImage = styled(SideImage)`
  background: url(${iphoneright}) center / cover no-repeat;
  border-radius: 50px;
  margin-left: -20px;
  border: 10px solid black;
  box-shadow: rgba(0, 160, 0, 0.96) 16px 22px 100px 22px;
  outline: 1px solid white;
`;

const Intro = () => {
  return (
    <MainContainer>
      <TextContainer>
        <FirstLine>
          <NormalText>It’s time to trade</NormalText>
        </FirstLine>
        <NormalText>
          the, <GradientText>future</GradientText>
        </NormalText>
      </TextContainer>
      <SecondLine>
        Trade BTC, ETH Futures with 125x leverage and earn rewards.
      </SecondLine>
      <ImageContainer>
        <SideImage />
        <CentralImage />
        <RightImage />
      </ImageContainer>
    </MainContainer>
  );
};

export default Intro;
