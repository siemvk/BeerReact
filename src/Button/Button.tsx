import React, { ButtonHTMLAttributes } from "react";
import { size } from "../types";
import TextAndIcon from "../helpers/textAndIcon";
import Tooltip, { TooltipProps } from "../helpers/tooltip";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
  size?: size,
  FAB?: boolean,
  /**
@deprecated 
its not recomended to use `advancedClasses` instead use`shape`, `rounding`, and `variant` as this makes cleaner code.

`advancedClasses={["right-round", "square"]}` -> `shape="square" rounding="right-round"`
@deprecatedSince 1.0.0
 */
  advancedClasses?: ("border" | "circle" | "square" | "round" | "no-round" | "left-round" | "right-round" | "top-round" | "bottom-round" | "responsive" | "extend" | "transparent" | "link" | "chip" | "active")[],

  shape?: "circle" | "square",
  rounding?: "round" | "no-round" | "left-round" | "right-round" | "top-round" | "bottom-round",
  variant?: "primary" | "transparent" | "link" | "chip",
  ripple?: "ripple" | "slow-ripple" | "fast-ripple",
  active?: boolean
  responsive?: boolean,
  extendedFAB?: boolean,
  buttonTooltip?: React.ReactElement<TooltipProps, typeof Tooltip>;
}

export const Button = ({
  children,
  icon,
  size,
  FAB,
  advancedClasses: forms,
  shape,
  rounding,
  responsive,
  variant,
  extendedFAB,
  ripple,
  active,
  buttonTooltip: buttonTooltip,
  ...props
}: ButtonProps) => {
  let extraArgs = ""
  let formsString = ""
  forms?.forEach((form) => { formsString = formsString + " " + form })
  if (responsive) {
    extraArgs = extraArgs + " responsive "
  }
  if (active) {
    extraArgs = extraArgs + " active "
  }
  if (extendedFAB) {
    extraArgs = extraArgs + " extend "
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
