import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid lightgrey;
  background-color: #fff;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
`;

const HeaderH1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-family: Didot, serif;
  font-size: 60px;
  color: #000;
`;

const Temp = styled.span`
  font-size: 11px;
  align-self: flex-end;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Date = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Date>SMARCH 32, 2018</Date>
      <HeaderH1>Lambda Times</HeaderH1>
      <Temp>98°</Temp>
    </StyledHeader>
  );
};

export default Header;
