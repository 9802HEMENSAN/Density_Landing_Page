import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  padding: 80px 0px 120px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 76px;
  align-self: stretch;
  background-color: black;
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
`;
const SecondLine = styled.div`
  display: block;
  color: var(--neutrals-grey-4, #E7E7EA);
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
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
    </MainContainer>
  );
};
export default Intro;
