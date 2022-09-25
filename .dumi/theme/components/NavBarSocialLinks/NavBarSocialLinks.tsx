import React, { useContext } from "react";
import { context } from "dumi/theme";
import SocialLinks from "../SocialLinks";
import "./NavBarSocialLinks.less";

export interface NavBarSocialLinksProps {
  className?: string;
}

export default function NavBarSocialLinks({
  className = "",
}: NavBarSocialLinksProps) {
  const { config } = useContext(context);
  return (
    <SocialLinks
      className={`NavBarSocialLinks ${className}`}
      links={config.theme.socialLinks}
    />
  );
}
