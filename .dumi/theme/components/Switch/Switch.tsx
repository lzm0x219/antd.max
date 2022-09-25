import React from "react";
import { Box } from "rc-basic";
import "./Switch.less";

export interface SwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Switch({
  className = "",
  children,
  ...props
}: SwitchProps) {
  return (
    <Box
      as="button"
      className={`Switch ${className}`}
      type="button"
      role="switch"
      {...props}
    >
      <Box as="span" className="SwitchCheck">
        <Box as="span" className="SwitchIcon">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
