import React, { useContext } from "react";
import { Box } from "rc-basic";
import { context } from "dumi/theme";
import Home from "../Layout/Home";
import "./Content.less";

export interface ContentProps {
  children?: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  const { meta } = useContext(context);
  const isHomeLayout = meta.layout === "home";

  const computeClassName = () => {
    const classNames = ["Content"];
    if (isHomeLayout) {
      classNames.push("is-home");
    }
    return classNames.join(" ");
  };

  const renderLayout = () => {
    switch (meta.layout) {
      case "home":
        return <Home />;
      default:
        return <>{children}</>;
    }
  };

  return (
    <Box id="Content" className={computeClassName()}>
      {renderLayout()}
    </Box>
  );
}
