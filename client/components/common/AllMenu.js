import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const AllMenu = props => {
  const { items } = props;
  return (
    <Menu.Menu position="right">
      <Menu.Item name="menu" className={items}>
        <NavLink to="/" className={items}>
          OUR STORY
        </NavLink>
      </Menu.Item>
      <Menu.Item name="mission" className={items}>
        <NavLink to="/" className={items}>
          MISSION
        </NavLink>
      </Menu.Item>
      <Menu.Item name="children" className={items}>
        <NavLink to="/" className={items}>
          OUR CHILDREN
        </NavLink>
      </Menu.Item>
      <Menu.Item name="donate" className={items}>
        <NavLink to="/" className={items}>
          DONATE
        </NavLink>
      </Menu.Item>
    </Menu.Menu>
  );
};

export default AllMenu;
