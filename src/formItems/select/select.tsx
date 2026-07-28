import React from "react";
import { size } from "../../types";


export interface SelectProps extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, "size"> {
    size?: size,
    output?: string,
    label?: string,
    invalid?: boolean,
    customIconSuffix?: string,
    border?: boolean,
    round?: boolean,
    fill?: boolean,
}


export const Select = ({
    size,
    children,
    output,
    invalid,
    label,
    customIconSuffix,
    border,
    round,
    fill,
    ...props
}: SelectProps) => {
    if (border == undefined) {
        border = true
    }
    return <div
        className={`field suffix
            ${border ? "border" : ""}
            ${round ? "round" : ""}
            ${fill ? "fill" : ""}
            ${size || ""}
            ${invalid ? "invalid" : ""} 
            ${label !== undefined && label !== "" ? "label" : ""}
            `}
    >
        <select {...props}>
            {children}
        </select>
        {label && <label>{label}</label>}
        {output && <output className={invalid ? "invalid" : ""}>{output}</output>}
        {customIconSuffix ? <i>{customIconSuffix}</i> : <i>arrow_drop_down</i>}

    </div>
};

export default Select;