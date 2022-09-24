import React from "react";
import { Box, Show } from "rc-basic";
import Image from "../Image";
import "./Feature.less";

export interface FeatureProps {
  className?: string;
  icon?: string;
  title: string;
  details: string;
}

const isExternal = (s: string) => /^(\w+:)?\/\/|^(mailto|tel):/.test(s);

export default function Feature({
  className = "",
  icon,
  title,
  details,
}: FeatureProps) {
  return (
    <Box as="article" className={`Feature ${className}`}>
      <Show
        when={icon}
        element={
          <Show
            when={isExternal(icon!)}
            fallback={<Box className="FeatureIcon">{icon}</Box>}
          >
            <Image className="FeatureIcon isCustomize" image={icon!} />
          </Show>
        }
      />
      <Box as="h2" className="FeatureTitle">
        {title}
      </Box>
      <Box as="p" className="FeatureDetails">
        {details}
      </Box>
    </Box>
  );
}
