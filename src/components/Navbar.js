import React from "react";

const NavBar = () => {
  return (
    <NavBarStyles>
      <li>
        <a href="jsx-a11y/anchor-is-valid">Homepage</a>
      </li>
      <li>
        <a href="jsx-a11y/anchor-is-valid">Homepage</a>
      </li>
      <li>
        <a href="jsx-a11y/anchor-is-valid">Homepage</a>
      </li>
    </NavBarStyles>
  );
};

const NavBarStyles = styled.ul`
  justify-content: center;
  align-items: center;
  display: Flex;
  height: 70px;
  position: fixed;
  bottom: 0;
  margin: 0 0 0 0;
  border: 3px black solid;
`;

export default NavBar;
