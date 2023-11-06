import React from "react";
import styled from "styled-components";

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content : center;
  gap: 91px;
  align-self: stretch;
  background: var(--White, #fff);
  margin-top: -120px;
  padding : 0px;
  maring : 0px;
`;

const FirstSection = styled.div`
  h2 {
    color: var(--Black, #0e0e0f);
    text-align: center;
    font-family: Neurial Grotesk;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 76.882px; /* 106.78% */
    letter-spacing: -2.097px;
  }
  p {
    color: var(--neutrals-grey-8, #32333a);
    text-align: center;
    font-family: Neurial Grotesk;
    font-size: 22.366px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.849px;
    margin-top: -35px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
  gap : 20px;
  align-self: stretch;
`;

const InnerDiv= styled.div`
  padding : 0 50px;
`;

 

const Image = styled.img`
   width : 50%;
`;

const BlockTitle = styled.h1`
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-weight: 700;
`;

const Paragraph = styled.p`
   font-family: Neurial Grotesk;
   font-size: 14px;
`;

const StartSmall = () => {
  return (
    <OuterBox>
      <FirstSection>
        <h2>Start Small. Earn Big.</h2>
        <p>
          Deposity a minimum of 1000 and get a Deposit bonus + <br />
          dedicagted relationship manager
        </p>
      </FirstSection>
      <FlexBox>
        <InnerDiv>
          <Image
            src="https://framerusercontent.com/images/R4hvKhiUXqebLLVic3lE8sXqo.png"
            alt="Description 1"
          />
          <BlockTitle>
            Deposit <br /> Bonus 
          </BlockTitle>
          <Paragraph>
            Our assets liquidity is unmatched in the market , with a  <br/>
            small
            bid-ask spread and a well balanced order book
          </Paragraph>
        </InnerDiv>
        <InnerDiv>
          <Image
            src="https://framerusercontent.com/images/K2BTdQ9Ra17goKGfOTRxtAx13Y.png"
            alt="Description 2"
          />
          <BlockTitle>
            Dedicated <br /> Relationship Manager
          </BlockTitle>
          <Paragraph>
            Our assets liquidity is unmatched in the market , with a  <br/> small
            bid-ask spread and a well balanced order book
          </Paragraph>
        </InnerDiv>
      </FlexBox>
    </OuterBox>
  );
};

export default StartSmall;
