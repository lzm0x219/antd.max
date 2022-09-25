import React from "react";
import { Box } from "rc-basic";
import NavBarLogo from "../NavBarLogo";
import NavBarSocialLinks from "../NavBarSocialLinks";
import "./NavBar.less";

export default function NavBar() {
  return (
    <Box as="nav" className="NavBar">
      <Box className="NavBarContainer">
        <NavBarLogo />
        <Box className="NavBarContainerContent">
          <NavBarSocialLinks />
        </Box>
      </Box>
    </Box>
  );
}
