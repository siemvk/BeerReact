import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { size } from "../types";
import { Button, ButtonProps } from "../Button/Button";
import { SplitButton } from "../ButtonSplit/ButtonSplit";

export interface CardProps extends ButtonHTMLAttributes<HTMLDivElement> {
    title: string,
    buttons?: React.ReactElement<ButtonProps, typeof Button>[],

}

export const Card = ({
    children,
    title,
    buttons,
    ...props
}: CardProps) => {

    return (
        <article className="no-padding" {...props}>
            {/* <img className="responsive small" src="/beer-and-woman.svg"> */}
            <div className="padding">
                <h5>{title}</h5>
                <p>{children}</p>
                {buttons &&
                    <nav>
                        {buttons}
                    </nav>
                }
            </div>
        </article>
    );
};

