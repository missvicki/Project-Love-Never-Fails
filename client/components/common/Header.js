import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/ilogo.png";
import AllMenu from "./AllMenu";
import "../../assets/styles/header.css";

const Header = () => (
  <div className="header">
    <Menu secondary className="mainMenu" stackable>
      <Menu.Item header>
        <NavLink to="/">
          <Image className="logo" src={logo} />
        </NavLink>
      </Menu.Item>
      <AllMenu items="navItems" />
    </Menu>
  </div>
);

export default Header;
