import React from "react";
import {
  AiOutlineHome,
  AiOutlineFieldTime,
  AiOutlineCalendar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  left: 0;
`;

const NavList = styled.ol`
  box-sizing: border-box;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  bottom: 0;
  width: 100%;
  align-content: center;
  background: rgba(40, 36, 36, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border-radius: 10px;
  border: 1px solid rgba(72, 68, 68, 0.346);
  position: fixed;
  left: 0;
  padding: 0;
  margin: 0;
`;
const NavItem = styled.li`
  padding: 2em;
  list-style: none;
`;

const NavLink = styled(Link)`
  display: block;
  color: #ea88f5;
`;

function Navbar() {
  return (
    <Navigation>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <AiOutlineHome />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/calendar">
            <AiOutlineCalendar />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/timer">
            <AiOutlineFieldTime />
          </NavLink>
        </NavItem>
      </NavList>
    </Navigation>
  );
}

export default Navbar;
