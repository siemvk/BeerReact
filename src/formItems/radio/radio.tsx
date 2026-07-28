import React from "react";
import { size } from "../../types";


export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: size,
    name?: string,
    value?: string,
    checked?: boolean
}


export const Radio = ({
    size,
    children,
    ...props
}: RadioProps) => {
    return <label className={`radio ${size || ""}`}>
        <input type="radio" {...props} />
        <span>{children || ""}</span>
    </label>
};

export default Radio;