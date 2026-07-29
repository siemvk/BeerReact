import React, { ButtonHTMLAttributes, useState } from "react";
import { size } from "../types";
import { Button, ButtonProps } from "../Button/Button";
import menuHelper from "../helpers/menu";
import Tooltip, { TooltipProps } from "../helpers/tooltip";

export interface SplitButtonProps extends ButtonProps {
  icon?: string,
  size?: size,
  responsive?: boolean,
  menu: React.ReactElement<React.HTMLAttributes<HTMLElement>, "menu">,
  buttonTooltip?: React.ReactElement<TooltipProps, typeof Tooltip>;
}

export const SplitButton = ({
  children,
  icon,
  size,
  responsive,
  menu,
  buttonTooltip,
  ...props
}: SplitButtonProps) => {
  let extraArgs = ""
  if (responsive) {
    extraArgs = extraArgs + " responsive "
  }
  const [open, setOpen] = useState(false)
  return (
    <div>
      <nav className="group split">
        <Button
          size={size}
          // advancedClasses={["left-round"]}
          rounding="left-round"
          responsive={responsive}
          FAB={false}
          icon={icon}
          buttonTooltip={buttonTooltip}
          {...props}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            props.onClick?.(e); // Does NOT touch the menu
          }}
        >
          {children}
        </Button>
        <div>
          <Button icon="keyboard_arrow_down" shape="square" rounding="right-round" onClick={() => { setOpen(true) }} />
          {menu}
        </div>
      </nav >
    </div>
  );
};
export { Button };

