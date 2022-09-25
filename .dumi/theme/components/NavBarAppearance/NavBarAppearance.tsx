import React, { useContext } from "react";
import { Show } from "rc-basic";
import { context } from "dumi/theme";
import SwitchAppearance from "../SwitchAppearance";
import "./NavBarAppearance.less";

export default function NavBarAppearance() {
  const { config } = useContext(context);

  return (
    <Show when={config.theme.appearance ?? true}>
      <SwitchAppearance className="NavBarAppearance" />
    </Show>
  );
}
