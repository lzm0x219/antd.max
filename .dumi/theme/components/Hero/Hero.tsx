import React from "react";
import { Box, Show, For } from "rc-basic";
import Image, { type ImageProps } from "../Image";
import Button from "../Button";
import "./Hero.less";

export interface HeroAction {
  theme?: "brand" | "alt";
  text: string;
  link: string;
}

export interface HeroProps {
  name?: string;
  text: string;
  tagline?: string;
  image?: ImageProps["image"];
  actions?: Array<HeroAction>;
}

export default function Hero({
  name,
  text,
  tagline,
  image,
  actions = [],
}: HeroProps) {
  return (
    <Box as="section" className={`Hero ${image && "has-image"}`}>
      <Box className="HeroContainer">
        <Box className="HeroContainerMain">
          <Show when={name}>
            <Box as="h1" className="HeroTitle">
              <Box as="span" className="HeroTitleName">
                {name}
              </Box>
            </Box>
            <Show when={text}>
              <Box as="p" className="HeroText">
                {text}
              </Box>
            </Show>
            <Show when={tagline}>
              <Box as="p" className="HeroTagline">
                {tagline}
              </Box>
            </Show>
          </Show>
          <Show when={actions.length > 0}>
            <Box className="HeroActions">
              <For each={actions}>
                {(action) => (
                  <Box className="HeroActionsItem" key={action.text}>
                    <Button
                      size="medium"
                      theme={action.theme}
                      text={action.text}
                      href={action.link}
                    />
                  </Box>
                )}
              </For>
            </Box>
          </Show>
        </Box>

        <Show when={image}>
          <Box className="HeroImage">
            <Box className="HeroImageContainer">
              <Box className="HeroImageContainerBg" />
              <Image className="HeroImageContainerSource" image={image!} />
            </Box>
          </Box>
        </Show>
      </Box>
    </Box>
  );
}
