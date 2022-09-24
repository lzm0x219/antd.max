import React, { memo, useMemo } from "react";
import { Box, Show, For } from "rc-basic";
import Feature, { type FeatureProps } from "../Feature";
import "./Features.less";

export interface FeaturesProps {
  options?: Array<FeatureProps>;
}

export default memo(function Features({ options = [] }: FeaturesProps) {
  const FeaturesItemClass = useMemo(() => {
    if (options.length <= 3) {
      switch (options.length) {
        case 2:
          return "grid-2";
        case 3:
          return "grid-3";
        default:
          return "";
      }
    }
    if (options.length % 3 === 0) {
      return "grid-6";
    }
    if (options.length % 2 === 0) {
      return "grid-4";
    }
    return "";
  }, [options]);

  return (
    <Show when={options.length}>
      <Box className="Features">
        <Box className="FeaturesContainer">
          <Box className="FeaturesItems">
            <For each={options}>
              {(feature) => (
                <Box
                  className={`FeaturesItem ${FeaturesItemClass}`}
                  key={feature.title}
                >
                  <Feature {...feature} />
                </Box>
              )}
            </For>
          </Box>
        </Box>
      </Box>
    </Show>
  );
});
