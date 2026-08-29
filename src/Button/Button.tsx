import React, { ButtonHTMLAttributes } from "react";
import { rounding, size } from "../types";
import TextAndIcon from "../helpers/textAndIcon";
import Tooltip, { TooltipProps } from "../helpers/tooltip";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
  size?: size,
  FAB?: boolean,
  shape?: "circle" | "square",
  rounding?: rounding,
  variant?: "primary" | "transparent" | "link" | "chip",
  ripple?: "ripple" | "slow-ripple" | "fast-ripple",
  active?: boolean
  responsive?: boolean,
  vertical?: boolean,
  extendedFAB?: boolean,
  buttonTooltip?: React.ReactElement<TooltipProps, typeof Tooltip>;
}

export const Button = ({
  children,
  icon,
  size,
  FAB,
  shape,
  rounding,
  responsive,
  variant,
  extendedFAB,
  ripple,
  active,
  vertical = false,
  buttonTooltip: buttonTooltip,
  ...props
}: ButtonProps) => {
  let extraArgs = ""
  let formsString = ""
  if (responsive) {
    extraArgs = extraArgs + " responsive "
  }
  if (active) {
    extraArgs = extraArgs + " active "
  }
  if (extendedFAB) {
    extraArgs = extraArgs + " extend "
  }
  if (vertical) {
    extraArgs = extraArgs + " vertical "
  }

  if (FAB) {
    return (
      <button className={`${size} extra ${ripple} ${formsString} ${extraArgs} ${shape} ${rounding} ${variant}`} {...props}>
        <i>
          {icon}
        </i>
        {extendedFAB && <span>
          {children}
        </span>}
        {buttonTooltip}
      </button >
    )
  } else {
    return (
      <button className={`${size} ${formsString} ${ripple} ${extraArgs} ${shape} ${rounding} ${variant}`} {...props}>
        <TextAndIcon icon={icon}>{children}
          {buttonTooltip}
        </TextAndIcon>
      </button >
    );
  }
};
