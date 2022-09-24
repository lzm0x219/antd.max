import React from "react";
import { Box } from "rc-basic";
import NavBarLogo from "../NavBarLogo";
import "./NavBar.less";

export default function NavBar() {
  return (
    <Box as="nav" className="NavBar">
      <Box className="NavBarContainer">
        <NavBarLogo />
        <Box className="NavBarContainerContent">123213</Box>
      </Box>
    </Box>
  );
}
