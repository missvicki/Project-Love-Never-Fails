import React from "react";
import { Menu, List } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "../../assets/styles/footer.css";

const Footer = () => (
  <div className="footer">
    <Menu fixed="bottom" borderless className="footer" stackable>
      <Menu.Menu position="left">
        <List className="listItem">
          <List.Item className="listItem">
            P.O BOX 0000, MBARARA-UGANDA
          </List.Item>
          <List.Item className="listItem">
            ADDRESS: PROJECT LOVE NEVER FAILS, MBARARA - UGANDA
          </List.Item>
          <List.Item className="listItem">
            EMAIL: plnf@projectloveneverfails.com
          </List.Item>
        </List>
      </Menu.Menu>

      <Menu.Menu position="right" className="footerItem">
        <Menu.Item name="menu" className="footerItems">
          <NavLink to="/" className="footerItems">
            OUR STORY
          </NavLink>
        </Menu.Item>
        <Menu.Item name="mission" className="footerItems">
          <NavLink to="/" className="footerItems">
            MISSION
          </NavLink>
        </Menu.Item>
        <Menu.Item name="children" className="footerItems">
          <NavLink to="/" className="footerItems">
            OUR CHILDREN
          </NavLink>
        </Menu.Item>
        <Menu.Item name="donate" className="footerItems">
          <NavLink to="/" className="footerItems">
            DONATE
          </NavLink>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
);

export default Footer;
