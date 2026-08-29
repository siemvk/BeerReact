import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { align, padding, rounding, size } from "../types";
import { Button, ButtonProps } from "../Button/Button";
import { SplitButton } from "../ButtonSplit/ButtonSplit";

export interface CardProps extends ButtonHTMLAttributes<HTMLDivElement> {
    align?: align,
    rounding?: rounding,
    padding?: padding,
    color?: "fill" | "primary-container" | "secondary-container" | "tertiary-container" | "default",
    size?: size,
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

