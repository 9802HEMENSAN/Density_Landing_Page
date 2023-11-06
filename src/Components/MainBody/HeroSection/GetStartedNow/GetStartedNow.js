import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  padding: 160px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: #000;
`;

const GetStartedContainer = styled.div`
  position: relative;
  background-color: #000;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Heading1 = styled.h2`
  text-align: center;
  z-index: 1;
  font-family: Neurial Grotesk;
  font-size: 132.195px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.783px;
  background: linear-gradient(
    177deg,
    #fff 2.77%,
    rgba(255, 255, 255, 0) 139.85%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  width: 866.226px;
  height: 134.978px;
  padding: 11.132px 33.397px;
  justify-content: center;
  align-items: center;
  gap: 6.958px;
  flex-shrink: 0;
  background: linear-gradient(
    269deg,
    #d4f938 38.89%,
    rgba(50, 216, 117, 0.96) 103.19%
  );
  color: #000;
  font-family: Neurial Grotesk;
  font-size: 38.267px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const GetStartedNow = () => {
  return (
    <OuterContainer>
      <GetStartedContainer>
      <Heading1>Get Started Now</Heading1>
        <Image
        src="https://framerusercontent.com/images/KkMEfdjlb56H5xZcSNAomLfYtOc.png?scale-down-to=512"
        alt="image1"
        />
        <Button>Start Trading!</Button>
      </GetStartedContainer>
    </OuterContainer>
  );
};

export default GetStartedNow;
