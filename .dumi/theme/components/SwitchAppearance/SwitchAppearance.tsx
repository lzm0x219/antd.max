import React from "react";
import { usePrefersColor } from "dumi/theme";
import Switch, { type SwitchProps } from "../Switch";
import IconSun from "../Icon/IconSun";
import IconMoon from "../Icon/IconMoon";
import "./SwitchAppearance.less";

export default function SwitchAppearance({
  className = "",
  ...props
}: SwitchProps) {
  const [appearance, setAppearance] = usePrefersColor();
  const checked = appearance === "dark";

  const onToggle = () => {
    setAppearance(appearance === "dark" ? "light" : "dark");
  };

  return (
    <Switch
      className={`SwitchAppearance ${className}`}
      aria-label="toggle dark mode"
      aria-checked={checked}
      onClick={onToggle}
      {...props}
    >
      <IconSun className="sun" />
      <IconMoon className="moon" />
    </Switch>
  );
}
