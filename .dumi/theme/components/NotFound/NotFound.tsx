import React from "react";
import { Box } from "rc-basic";
import "./NotFound.less";

export default function NotFound() {
  return (
    <Box className="NotFound">
      <Box className="NotFoundContainer">
        <Box as="h1" className="NotFoundTitle">
          404
        </Box>
      </Box>
    </Box>
  );
}
