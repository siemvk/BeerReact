import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { align, padding, size } from "../types";
import { Button, ButtonProps } from "../Button/Button";
import { SplitButton } from "../ButtonSplit/ButtonSplit";

export interface CardProps extends ButtonHTMLAttributes<HTMLDivElement> {
    align?: align,
    rounding?: "round" | "no-round" | "left-round" | "right-round" | "top-round" | "bottom-round",
    padding?: padding,
    color?: "fill" | "primary-container" | "secondary-container" | "tertiary-container",
    size?: size
}

export const Card = ({
    children,
    align,
    className,
    rounding,
    padding,
    color,
    size,
    ...props
}: CardProps) => {
    const classes = [rounding, size, padding, align, color, className].filter(Boolean).join(" ");

    return (
        <article className={classes} {...props}>
            {children}
        </article>
    );
};

