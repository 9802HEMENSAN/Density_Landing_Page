import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background: #229851;
display: flex;
padding: 63px 245px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
align-self: stretch;
`;

const DensityImage = styled.img`
  /* Image of density styles */
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

const List = styled.ul`
display: flex;
justify-content: space-between;
list-style-type: none;
gap: 28px;
`;

const ListItem = styled.li`
color: var(--White, #FFF);
font-family: Neurial Grotesk;
font-size: 20.998px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const Paragraph = styled.p`
color: #DDD;
text-align: center;
font-family: Neurial Grotesk;
font-size: 13.998px;
font-style: normal;
font-weight: 400;
line-height: 23.996px; /* 171.429% */
width: 786.88px;
`;

const SocialMediaIcons = styled.div`
  /* Container for social media icons styles */
`;

const SocialMediaIcon = styled.img`
  /* Individual social media icon styles */
`;

const Footer = () => {
  const socialMedia = [
    "https://example.com/facebook.png",
    "https://example.com/apple.png",
    "https://example.com/amazon.png",
    "https://example.com/google.png",   
  ];

  return (
    <FooterContainer>
      {/* <DensityImage src="" alt="Density" /> */}
      <h1>Density</h1>
      <FlexBox>
        <List>
          <ListItem>Blog</ListItem>
          <ListItem>Fees</ListItem>
          <ListItem>Leaderboard</ListItem>
          <ListItem> Careers</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Privacy Policy</ListItem>
        </List>
      </FlexBox>
        <Paragraph>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </Paragraph>
      <SocialMediaIcons>
        {socialMedia.map((icon, index) => (
          <SocialMediaIcon key={index} src={icon} alt={`Social Media ${index + 1}`} />
        ))}
      </SocialMediaIcons>
    </FooterContainer>
  );
};

export default Footer;
