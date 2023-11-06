import React from "react";
import styled from "styled-components";

const Companies = [
  {
    image:
      "https://framerusercontent.com/images/gdlQdW3N8eoDMSSre2YDBWlb0k.png?scale-down-to=512",
  },
  {
    image:
      "https://framerusercontent.com/images/nGrdP5qcSxm5D1dyznCdkBdzIOg.png",
  },
  {
    image:
      "https://framerusercontent.com/images/JOYn0YM4rICx1E6hEDjwkcrMvE.png",
  },
  {
    image:
      "https://framerusercontent.com/images/GMRDilBf7HwOCLQf2DZ9Sto2Odw.png?scale-down-to=512",
  },
  {
    image:
      "https://framerusercontent.com/images/D5tHrcjvRYsqPnKQXfnI5OGhuqg.png",
  },
  {
    image:
      "https://framerusercontent.com/images/R1yd7FnjlGT4CXTnOwsrjuB2FIg.png?scale-down-to=512",
  },
  {
    image:
      "https://framerusercontent.com/images/BbH8fkqxc8qzbaxXPGS41JL6aM.png?scale-down-to=512",
  },
];

const Investors = [
  {
    name: "Utsav Somani",
    designation: "Ex-partner, AngelList India",
    images:
      "https://framerusercontent.com/images/S7gnqIa5oO1wJjpwWYQqFJ9uSk.png?scale-down-to=512",
  },
  {
    name: "Aditya Nagarsheth",
    designation: "Partner, Perpetual Value Partners",
    images:
      "https://framerusercontent.com/images/cnwgdmpSC4igd5roNpnIxEjHVc.png?scale-down-to=512",
  },
  {
    name: "Gokul Rajaram",
    designation: "Ex-board director, Coinbase | Ex-Google",
    images:
      "https://framerusercontent.com/images/QuYqjHWGeAou3q2hUEQgwc4SrI8.png?scale-down-to=512",
  },
  {
    name: "Sajid Rehman",
    designation: "Managing Partner, My Asia VC",
    images:
      "https://framerusercontent.com/images/jp0bxVAav0WU12Nb3W6DmlerX0.png?scale-down-to=512",
  },
  {
    name: "Arjun Sethi",
    designation: "Cofounder, Tribe Capital",
    images:
      "https://framerusercontent.com/images/okGvdVlM57X1Fxp3ww1dU8CQ.png?scale-down-to=512",
  },
  {
    name: "Kunal Shah",
    designation: "Founder, Cred",
    images:
      "https://framerusercontent.com/images/29OS9pGoo6swnRGUemIZb4gBU.png?scale-down-to=512",
  },
  {
    name: "Sandeep Nailawal",
    designation: "Cofounder, Polygon Labs",
    images:
      "https://framerusercontent.com/images/Q9di6CxfLs3k8dj4oZxFA8k3s.png?scale-down-to=512",
  },
  {
    name: "Karn Vivek Nagpal",
    designation: "Investor at CoinDCX, Dealshare, Oye Rickshaw!",
    images:
      "https://framerusercontent.com/images/66Wk0yqKpU6iBv6LQqEYZugTrM.png?scale-down-to=512",
  },
];

const OuterBox = styled.div`
  display: flex;
  padding: 140px 0px;
  flex-direction: column;
  align-items: center;
  gap: 82px;
  align-self: stretch;
  background-color: #000;
`;

const Title = styled.h1`
  color: var(--White, #fff);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px; /* 106.78% */
  letter-spacing: -2.097px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const FlexBoxCompanies = styled.div`
  display: flex;
  width: 1000px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 80px;
  flex-wrap: wrap;
`;

const FlexBoxInvestors = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  gap: 40px;
  align-self: stretch;
  flex-wrap: wrap;
  margin : auto;
  width : 1200px;
`;

const CompanyImage = styled.img`
  width: 185px;
  height: 50px;
`;

const InvestorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-left : 50px;
`;

const InvestorImage = styled.img`
  width: 120px;
  height: 138px;
`;

const InvestorName = styled.h1`
  color: var(--White, #fff);
  font-family: Neurial Grotesk;
  font-size: 20.48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InvestorDesignation = styled.p`
  color: var(--neutrals-grey-7, #808090);
  font-family: Neurial Grotesk;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;

const BackedBytheBest = () => {
  return (
    <OuterBox>
      <Title>Backed by the Best.</Title>

      <FlexBoxCompanies>
        {Companies.map((company, index) => (
          <CompanyImage
            key={index}
            src={company.image}
            alt={`Company ${index}`}
          />
        ))}
      </FlexBoxCompanies>

      <FlexBoxInvestors>
        {Investors.map((investor, index) => (
          <InvestorCard key={index}>
            <InvestorImage src={investor.images} alt={`Investor ${index}`} />
            <InvestorName>{investor.name}</InvestorName>
            <InvestorDesignation>{investor.designation}</InvestorDesignation>
          </InvestorCard>
        ))}
      </FlexBoxInvestors>
    </OuterBox>
  );
};

export default BackedBytheBest;
