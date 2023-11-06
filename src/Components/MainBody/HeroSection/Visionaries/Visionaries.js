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

 

const Paragraph = styled.p`
  color : #a9a9a9;
`;

const FlexBox = styled.div`
  display: flex;
  width: 1040px;
  height: 191px;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  gap : 20px;
  background: rgba(16, 16, 16, 0.4);
  backdrop-filter: blur(26.25px);
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

const Flexy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #f0f0f0;
  padding :  50px;
`;

const Image = styled.img`
  width: 80%;
  margin-left: 9%;
`;

const BlockTitle = styled.h1`
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-weight: 700;
  margin-top: -40px;
  color : white;
`;

 

const Visionaries = () => {
  return (
    <OuterBox>
      <FirstSection>
        <Title>
          {" "}
         <span> Meet the</span>  Visionaries <br/> <span>behind Density. </span>  
        </Title>
      </FirstSection>
      <FlexBox>
      <Flexy>
            <div>
              <BlockTitle>
                Prakash <br />
                Jamtiya
              </BlockTitle>
              <Paragraph>Founder, Tradeshala</Paragraph>
            </div>
            <Image
              src="https://framerusercontent.com/images/rpNXycRYwOL2fZ6QsuITaxNCvPo.png?scale-down-to=512"
              alt="Description 1"
            />
       </Flexy>
      <Flexy>
            <div>
              <BlockTitle>
                Prakash <br />
                Jamtiya
              </BlockTitle>
              <Paragraph>Founder, Tradeshala</Paragraph>
            </div>
            <Image
              src="https://framerusercontent.com/images/rpNXycRYwOL2fZ6QsuITaxNCvPo.png?scale-down-to=512"
              alt="Description 1"
            />
       </Flexy>
      <Flexy>
            <div>
              <BlockTitle>
                Prakash <br />
                Jamtiya
              </BlockTitle>
              <Paragraph>Founder, Tradeshala</Paragraph>
            </div>
            <Image
              src="https://framerusercontent.com/images/rpNXycRYwOL2fZ6QsuITaxNCvPo.png?scale-down-to=512"
              alt="Description 1"
            />
       </Flexy>     
      </FlexBox>
      <Button>Join community</Button>
    </OuterBox>
  );
};

export default Visionaries;
