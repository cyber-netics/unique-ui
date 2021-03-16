import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const StyledNav = styled.nav`
  height: ${(props) => props.theme.variables.navHeight};
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xl};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    align-items: center;
    justify-content: space-between;
  }
`;

const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    display: none;
  }
`;

const NavListItem = styled.div`
  white-space: nowrap;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const LeftItems = styled.ul`
  padding: 0.5rem;
  margin: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
  list-style-image: none;
`;

const NavLink = styled.a`
  text-decoration: none;
  display: block;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  svg {
    fill: ${(props) => props.theme.colors.text200};
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;

const RightItems = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThemeToggle = styled.span`
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

const NavIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.text};
`;

const Navigation = () => {
  const handleThemeChange = () => {};

  return (
    <NavContainer>
      <StyledNav>
        <NavContent>
          <InnerContent>
            <LeftItems>
              {["itemOne", "ItemTwo"].map((section, idx) => {
                return (
                  <NavListItem key={idx}>
                    <NavListItem>
                      <NavLink>
                        <span>{section}</span>
                      </NavLink>
                    </NavListItem>
                  </NavListItem>
                );
              })}
            </LeftItems>
            <RightItems>
              <ThemeToggle onClick={handleThemeChange}>
                <NavIcon name={"darkTheme"} />
              </ThemeToggle>
            </RightItems>
          </InnerContent>
        </NavContent>
      </StyledNav>
    </NavContainer>
  );
};

export default Navigation;
