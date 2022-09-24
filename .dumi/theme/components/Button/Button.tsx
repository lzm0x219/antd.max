import React, { useMemo } from "react";
import { Box } from "rc-basic";
import { Link } from "dumi/theme";
import "./Button.less";

export interface ButtonProps {
  size?: "medium" | "big";
  theme?: "brand" | "alt" | "sponsor";
  text?: string;
  href?: string;
  children?: React.ReactNode;
}

export default function Button({
  href,
  theme,
  size,
  text,
  children,
}: ButtonProps) {
  const classNames = useMemo(
    () =>
      ["Button", size ?? "medium", theme ?? "brand"].filter(Boolean).join(" "),
    [size, theme]
  );
  if (!href) {
    return (
      <Box as="button" className={classNames}>
        {text}
      </Box>
    );
  }
  return (
    <Box as="button" className={classNames}>
      <Link to={href}>{text ?? children}</Link>
    </Box>
  );
}
