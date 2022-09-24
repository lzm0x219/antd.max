import React, { useContext } from "react";
import { Box, Show } from "rc-basic";
import { context } from "dumi/theme";
import Hero from "../../Hero";
import Features from "../../Features";
import "./Home.less";

export interface HomeProps {
  children?: React.ReactNode;
}

export default function Home({ children }: HomeProps) {
  return (
    <Box className="Home">
      <HomeHero />
      <HomeFeatures />
      {children}
    </Box>
  );
}

export function HomeHero() {
  const { meta } = useContext(context);
  return (
    <Show when={meta.hero}>
      <Hero {...meta.hero} />
    </Show>
  );
}

export function HomeFeatures() {
  const { meta } = useContext(context);
  return <Features options={meta.features} />;
}
