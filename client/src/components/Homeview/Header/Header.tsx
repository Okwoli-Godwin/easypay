import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        {/* <LogoDiv src="/image/ttlogo.png" alt="" /> */}

        <LogoHold>Dev-Bucket.</LogoHold>
        <SignDiv>
          <NavLink to="signin">
            <SignBtn>Get Started</SignBtn>
          </NavLink>
        </SignDiv>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: ${(props) => props.theme.pageBackground};
  padding-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */

  @media (max-width: 500px) {
    width: 90%;
  }
`;
// const LogoDiv = styled.img`
//   width: 50px;
//   margin: 10px;
// `;

const LogoHold = styled.div`
  font-weight: 900;
  font-size: 18px;
`;

const SignDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SignBtn = styled.button`
  height: 34px;
  width: 120px;
  /* margin: 12px; */
  margin-left: 10px;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.94);
  }
`;

const ToggleHold = styled.div``;
