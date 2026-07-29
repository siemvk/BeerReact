import React from "react";
import { align } from "../../types";


export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    align?: align,
    // className?: string
}


export const Space = ({
    align = "left-align",
    className,
    ...props
}: FlexProps) => {
    return <nav className={`${align ? align : ""} ${className}`} {...props}>

    </nav>
};

export default Space;