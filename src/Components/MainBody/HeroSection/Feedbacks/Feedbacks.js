import React from "react";
import styled from "styled-components";
import prakash from "../../../../images/prakash_jamatia.png"
import arjun_naik from "../../../../images/arjun_naik.png"
import Shambhavi_Nayak from "../../../../images/Shambhavi_Nayak.png"

 
const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  align-self: stretch;
  background: var(--White, #fff);
  margin-top: -120px;
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
  justify-content: space-evenly;
  gap: 20px;
  align-self: stretch;
 
`;
const Flexy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const InnerDiv = styled.div`
  height: 450px;
  flex: 1 0 0;
`;

const Image = styled.img`
  width: 50%;
`;

const BlockTitle = styled.h1`
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-weight: 700;
  margin-top: -40px;
`;

const Paragraph = styled.p`
  font-family: Neurial Grotesk;
  font-size: 20px;
  margin-top: -10px;
`;

 

const Feedbacks = () => {
  return (
    <OuterBox>
      <FirstSection>
        <h2>Don’t take our word for it.</h2>
        <p>
          Hear it from our expert community of traders who have made <br />{" "}
          insane amounts in a short amount of time
        </p>
      </FirstSection>

      <FlexBox>
        <InnerDiv>
          <Paragraph>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density's crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </Paragraph>
          <Flexy>
            <div>
              <BlockTitle>
                Prakash <br />
                Jamtiya
              </BlockTitle>
              <Paragraph>Founder, Tradeshala</Paragraph>
            </div>
            <Image
              src={prakash}
              alt="Description 1"
            />
          </Flexy>
        </InnerDiv>
        <InnerDiv>
          <Paragraph>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density's crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </Paragraph>
          <FlexBox>
            <div>
              <BlockTitle>
                 Shambhavi <br />
                Nayak
              </BlockTitle>
              <Paragraph>Commodity Trader</Paragraph>
            </div>
            <Image
              src={Shambhavi_Nayak }
              alt="Description 1"
            />
          </FlexBox>
        </InnerDiv>
        <InnerDiv>
          <Paragraph>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density's crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </Paragraph>
          <FlexBox>
            <div>
              <BlockTitle>
                 Arjun <br />
                 Naik
              </BlockTitle>
              <Paragraph>Equity Trader</Paragraph>
            </div>
            <Image
              src={arjun_naik}
              alt="Description 1"
            />
          </FlexBox>
        </InnerDiv>
      </FlexBox>
   
    </OuterBox>
  );
};

export default Feedbacks;
