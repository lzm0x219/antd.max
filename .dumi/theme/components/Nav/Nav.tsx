import React, { useContext } from "react";
import { Box } from "rc-basic";
import { context } from "dumi/theme";
import NavBar from "../NavBar";
import "./Nav.less";

export default function Nav() {
  const { base, config } = useContext(context);

  return (
    <Box as="header" className={`Nav no-sidebar`}>
      <NavBar />
    </Box>
  );
}
