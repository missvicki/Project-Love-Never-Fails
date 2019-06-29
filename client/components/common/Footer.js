import React from "react";
import { Menu, List } from "semantic-ui-react";

import AllMenu from "./AllMenu";
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
        <AllMenu items="footerItems" />
      </Menu.Menu>
    </Menu>
  </div>
);

export default Footer;
