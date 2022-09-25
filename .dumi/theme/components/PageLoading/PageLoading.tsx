import React from "react";
import { Box } from "rc-basic";
import "./PageLoading.less";

export default function PageLoading() {
  return (
    <Box className="PageLoading">
      <svg
        className="PageLoadingSpinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="PageLoadingPath"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    </Box>
  );
}
