import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/ilogo.png";
import "../../assets/styles/header.css";

const Header = () => (
  <div className="header">
    <Menu secondary className="mainMenu" stackable>
      <Menu.Item header>
        <NavLink to="/">
          <Image className="logo" src={logo} />
        </NavLink>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="menu" className="navItems">
          <NavLink to="/" className="navItems">
            OUR STORY
          </NavLink>
        </Menu.Item>
        <Menu.Item name="mission" className="navItems">
          <NavLink to="/" className="navItems">
            MISSION
          </NavLink>
        </Menu.Item>
        <Menu.Item name="children" className="navItems">
          <NavLink to="/" className="navItems">
            OUR CHILDREN
          </NavLink>
        </Menu.Item>
        <Menu.Item name="donate" className="navItems">
          <NavLink to="/" className="navItems">
            DONATE
          </NavLink>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
);

export default Header;
