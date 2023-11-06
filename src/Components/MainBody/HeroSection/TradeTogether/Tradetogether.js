import React from "react";
import styled from "styled-components";

// OuterBox component
const OuterBox = styled.div`
  display: flex;
  padding: 140px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 82px;
  align-self: stretch;
  background: #000;
`;

const Heading1 = styled.h1`
  /* h1 tag styles */
`;

const Paragraph = styled.p`
  /* p tag styles */
`;

const FlexBox = styled.div`
  display: flex;
  width: 1140px;
  height: 171px;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(16, 16, 16, 0.4);
  backdrop-filter: blur(26.25px);
`;

const DuoBox = styled.div`
  /* Styling for the duo boxes */
`;

const Heading3 = styled.h1`
  color: var(--White, #fff);
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SubParagraph = styled.p`
  color: #a9a9a9;
  font-family: Neurial Grotesk;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;
const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const Title = styled.h2`
  color: var(--electric-green-primary, #ebff25);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px; /* 106.78% */
  letter-spacing: -2.097px;

  span {
    color: var(--White, #fff);
  }
`;
const Description = styled.p`
  color: var(--neutrals-grey-4, #e7e7ea);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 22.366px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.849px;
  margin-top: -50px;
`;

const Button = styled.button`
  display: flex;
  height: 48px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);
  color: #000;
  font-family: Neurial Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

const TradeTogether = () => {
  return (
    <OuterBox>
      <FirstSection>
        <Title>
          {" "}
          Earn Money. <span> The Easy Way.</span>
        </Title>
        <Description>
          No Complexity of Trading Fee, generate volume and win
        </Description>
      </FirstSection>
      <FlexBox>
        <DuoBox>
          <Heading3>10,000+</Heading3>
          <SubParagraph>Traders</SubParagraph>
        </DuoBox>
        <DuoBox>
          <Heading3>100Mn</Heading3>
          <SubParagraph>Daily Volume Traded</SubParagraph>
        </DuoBox>
        <DuoBox>
          <Heading3>Daily</Heading3>
          <SubParagraph>Trade Analysis</SubParagraph>
        </DuoBox>
        <DuoBox>
          <Heading3>Live</Heading3>
          <SubParagraph>Signals</SubParagraph>
        </DuoBox>
      </FlexBox>
      <Button>Join community</Button>
    </OuterBox>
  );
};

export default TradeTogether;
