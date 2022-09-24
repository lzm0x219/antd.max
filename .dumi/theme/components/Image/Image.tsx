import React, { forwardRef, useMemo } from "react";
import { Box, Show } from "rc-basic";
import { usePrefersColor } from "dumi/theme";
import "./Image.less";

export type ImageSrc = { src: string; alt?: string };

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string | ImageSrc | { light: ImageSrc; dark: ImageSrc };
}

export default forwardRef<HTMLImageElement, ImageProps>(function Image(
  { className = "", image, ...props },
  ref
) {
  const [prefersColor] = usePrefersColor();

  const imageSource = useMemo(() => {
    if (typeof image === "string") {
      return { src: image };
    }
    if ("src" in image) {
      return image;
    }
    return image[prefersColor];
  }, [image, prefersColor]);

  return (
    <Show
      when={imageSource}
      fallback={
        <Box as="img" className={`Image ${className}`} {...props} ref={ref} />
      }
    >
      <Box
        as="img"
        className={`Image ${className}`}
        {...imageSource}
        {...props}
        ref={ref}
      />
    </Show>
  );
});
