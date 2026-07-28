import React from "react";
import { size } from "../../types";
import { Tooltip, TooltipProps } from "../../index";


export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: size,
    slider2?: React.JSX.Element,
    vertical?: boolean,
    tooltip?: TooltipProps,
    icon?: string
}

export const Slider = ({
    size,
    children,
    slider2,
    vertical,
    icon,
    tooltip,
    ...props
}: SliderProps) => {
    return <div className={`slider ${size || ""} ${vertical && "vertical"}`}>
        <input type="range" {...props} />
        {slider2}
        <span>
            <i>{icon}</i>
        </span>
        {tooltip && <>
            <Tooltip {...tooltip}></Tooltip>
            {slider2 && <Tooltip {...tooltip}></Tooltip>}
        </>}
    </div>
};

export default Slider;