import React, { useContext } from "react";
import { Box, Show } from "rc-basic";
import { Link, context } from "dumi/theme";
import Image from "../Image";
import "./NavBarLogo.less";

export default function NavBarLogo() {
  const { base, config } = useContext(context);

  return (
    <Box className="NavBarLogo">
      <Link className="NavBarLogoTitle" to={base}>
        <Show when={config.logo}>
          <Image className="NavBarLogoImage" image={String(config.logo)} />
        </Show>
        <Show when={config.title}>{config.title}</Show>
      </Link>
    </Box>
  );
}
