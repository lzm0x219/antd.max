import React from "react";
import { Box, For } from "rc-basic";
import SocialLink, { type SocialLinkProps } from "../SocialLink";
import "./SocialLinks.less";

export interface SocialLinksProps {
  className?: string;
  links?: Array<SocialLinkProps>;
}

export default function SocialLinks({
  links = [],
  className = "",
}: SocialLinksProps) {
  return (
    <Box className={`SocialLinks ${className}`}>
      <For each={links}>
        {(item) => <SocialLink {...item} key={item.link} />}
      </For>
    </Box>
  );
}
