import React from "react";
import { size } from "../../types";


export interface FieldsetProps extends Omit<React.InputHTMLAttributes<HTMLFieldSetElement>, "size"> {
    legend?: string
}

export const Fieldset = ({
    legend,
    children,
    ...props
}: FieldsetProps) => {
    return <fieldset {...props}>
        <legend>{legend}</legend>
        <nav className="vertical">
            {children}
        </nav>
    </fieldset>
};

export default Fieldset;