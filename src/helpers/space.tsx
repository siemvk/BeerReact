import React from "react";
import { space } from "../types";


export interface SpaceProps extends React.HTMLAttributes<HTMLElement> {
    size?: space
}


export const Space = ({
    size = "space",
    ...props
}: SpaceProps) => {
    return <div className={size} {...props}>

    </div>
};

export default Space;