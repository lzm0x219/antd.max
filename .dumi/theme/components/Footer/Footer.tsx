import React, { useContext } from "react";
import { Box, Show } from "rc-basic";
import { context } from "dumi/theme";
import "./Footer.less";

export default function Footer() {
  const { config } = useContext(context);
  return (
    <Show when={config.theme.footer}>
      <Box as="footer" className="Footer">
        <Box className="FooterContainer">
          <Box
            as="p"
            className="FooterMessage"
            dangerouslySetInnerHTML={{
              __html: config.theme.footer.message,
            }}
          />
          <Box
            as="p"
            className="FooterCopyright"
            dangerouslySetInnerHTML={{
              __html: config.theme.footer.copyright,
            }}
          />
        </Box>
      </Box>
    </Show>
  );
}
