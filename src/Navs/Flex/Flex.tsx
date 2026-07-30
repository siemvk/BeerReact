import React from "react";
import { align } from "../../types";


export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    align?: align,
    directions?: "horizontal" | "vertical"
    // className?: string
}


export const Flex = ({
    align = "left-align",
    directions = "horizontal",
    className,
    ...props
}: FlexProps) => {
    return <nav className={`${align} ${directions} ${className}`} {...props}>

    </nav>
};

export default Flex;