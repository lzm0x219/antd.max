import React, { memo, useMemo } from "react";
import { icons } from "../../support/socialIcons";
import "./SocialLink.less";

export type SocialLinkIcon =
  | "discord"
  | "facebook"
  | "github"
  | "instagram"
  | "linkedin"
  | "slack"
  | "twitter"
  | "youtube"
  | { svg: string };

export interface SocialLinkProps {
  icon: SocialLinkIcon;
  link: string;
}

export default memo(function SocialLink({ icon, link }: SocialLinkProps) {
  const svg = useMemo(() => {
    if (typeof icon === "object") {
      return icon.svg;
    }
    return icons[icon];
  }, [icon]);

  return (
    <a
      className="SocialLink"
      href={link}
      target="_blank"
      rel="noopener"
      dangerouslySetInnerHTML={{
        __html: svg,
      }}
    />
  );
});
