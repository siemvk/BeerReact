import React from "react";


export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    align?: "left-align" | "center-align" | "right-align",
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