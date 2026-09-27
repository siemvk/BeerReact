import React, { type HTMLAttributes } from "react";
import { Flex } from "../Navs/Flex/Flex"
import { classNames } from "../classNames";

export interface StyledIconProps extends HTMLAttributes<HTMLElement> {
    icon: string;
    fill?: boolean;
    shape?: "square" | "round" | "square round";
}

export function StyledIcon({
    icon,
    className = "",
    fill = true,
    shape = "square",
    ...props
}: StyledIconProps) {
    const classNamesNav = [
        "center-align",
        "primary-container",
        "small-padding",
        "min",
        shape,
        className,
    ].join(" ");
    const iconClassNames = [
        "extra",
        fill ? "fill" : "",
    ].join(" ");
    return (
        <nav className={classNamesNav} {...props}>
            <i className={iconClassNames}>
                {icon}
            </i>
        </nav>
    );
}

export default StyledIcon;