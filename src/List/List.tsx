import React from "react";
import { space } from "../types";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    border?: boolean;
    space?: space;
}

export const List = ({
    children,
    border = true,
    space,
    className = "",
    ...props
}: ListProps) => {
    const borderClass = border ? "border" : "";
    const spaceClass = space || "";
    const classes = ["list", borderClass, spaceClass, className].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...props}>
            {children}
        </ul>
    );
};

export default List;