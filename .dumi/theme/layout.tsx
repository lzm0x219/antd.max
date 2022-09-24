import React, { useContext } from "react";
import { context } from "dumi/theme";
import { type IRouteComponentProps } from "@umijs/types";
import { Box } from "rc-basic";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./styles/global.less";

export type LayoutProps = IRouteComponentProps;

export default function Layout({ children, location }: LayoutProps) {
  const con = useContext(context);

  return (
    <Box as="main" className="AntdMaxLayout">
      <Nav />
      <Content>{children}</Content>
      <Footer />
    </Box>
  );
}
