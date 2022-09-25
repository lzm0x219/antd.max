import React, { useContext } from "react";
import { type IRouteComponentProps } from "@umijs/types";
import { Box } from "rc-basic";
import { matchPath } from "dumi";
import { context } from "dumi/theme";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./styles/global.less";

export type LayoutProps = IRouteComponentProps;

export default function Layout({ children, location }: LayoutProps) {
  const { routes } = useContext(context);

  const match = routes.find((item) => matchPath(location.pathname, item));

  if (!match) {
    return <NotFound />;
  }

  return (
    <Box as="main" className="dumi-theme-vitepress-layout">
      <Nav />
      <Content>{children}</Content>
      <Footer />
    </Box>
  );
}
