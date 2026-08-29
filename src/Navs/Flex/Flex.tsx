import React from "react";
import { align } from "../../types";


/**
 * @deprecated FlexProps is deprecated and will be removed in a future release.
 */
export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    align?: align,
    directions?: "horizontal" | "vertical"
    // className?: string
}

/**
 * @deprecated Flex is deprecated and will be removed in a future release.
 */
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