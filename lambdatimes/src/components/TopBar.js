import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-conent: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TopBarContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const TopBarContainerLeftText = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const TopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const TopBarContainerCenterText = styled.div`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const TopBarContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const TopBarContainerRightText = styled.div`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <TopBarContainer>
        <TopBarContainerLeft>
          <TopBarContainerLeftText>TOPICS</TopBarContainerLeftText>
          <TopBarContainerLeftText>SEARCH</TopBarContainerLeftText>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <TopBarContainerCenterText>GENERAL</TopBarContainerCenterText>
          <TopBarContainerCenterText>BROWNBAG</TopBarContainerCenterText>
          <TopBarContainerCenterText>RANDOM</TopBarContainerCenterText>
          <TopBarContainerCenterText>MUSIC</TopBarContainerCenterText>
          <TopBarContainerCenterText>ANNOUNCEMENTS</TopBarContainerCenterText>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <TopBarContainerRightText>LOG IN</TopBarContainerRightText>
        </TopBarContainerRight>
      </TopBarContainer>
    </StyledTopBar>
  );
};

export default TopBar;
