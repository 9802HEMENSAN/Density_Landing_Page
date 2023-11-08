import React from "react";

import styled from "styled-components";
import Density_Logo from "../../images/density-logo.png";
import { Link } from "gatsby";

// Created styled components for the Navbar elements
const NavbarContainer = styled.nav`
  display: flex;
  padding: 24px 216px;
  justify-content: center;
  align-items: center;
  gap: 387px;
  align-self: stretch;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  background: rgba(42, 93, 50, 0.2);
  backdrop-filter: blur(20px);
  background-color: #000000;

  @media (min-width: 641px) and (max-width: 1007px) {
    padding: 24px 10px;
    gap: 10px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    padding: 24px 50px;
    gap: 30px;
    flex-direction: column;
  }
`;

const Logo = styled.img`
width: 99.953px;
height: 24px;

@media (min-width: 700px) and (max-width: 1200px) {
  width: 150px;
}
`;

const Navbody = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 56px;
  color: #fcfcfc;

  @media (min-width: 641px) and (max-width: 1007px) {
    gap: 25px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    gap: 15px;
    flex-direction: column;
  }
`;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const NavLink = styled.li`
  margin-right: 20px;
  color: #FCFCFC;
  font-family: Neurial Grotesk;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  display: flex;
  height: 48px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Neurial Grotesk;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 8px;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 16px;
    padding: 0 25px;
    height: 54px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={Density_Logo} alt="Logo" />

      <Navbody>
        <NavLinks>
          <Link>
            <NavLink>Career</NavLink>
          </Link>
          <Link>
            <NavLink>Blogs</NavLink>
          </Link>
          <Link>
            {" "}
            <NavLink>Leaderboard</NavLink>
          </Link>
          <Link>
            {" "}
            <NavLink>Fees</NavLink>
          </Link>
        </NavLinks>

        <Button>Trade Now</Button>
      </Navbody>
    </NavbarContainer>
  );
};

export default Navbar;


