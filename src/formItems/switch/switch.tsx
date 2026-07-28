import React from "react";
import { size } from "../../types";
import TextAndIcon from "../../helpers/textAndIcon";


export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    icon?: string
}


export const Switch = ({
    icon,
    children,
    ...props
}: SwitchProps) => {
    return <label className={`switch ${icon !== undefined && "icon"}`}>
        <input type="checkbox" {...props} />
        <span>
            <i>{icon}</i>
        </span>
    </label>

};

export default Switch;