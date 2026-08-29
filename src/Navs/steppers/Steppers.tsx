import React, { HTMLAttributes } from "react";
import { align } from "../../types";

export type navItem = {
    icon?: string;
    text?: string;
    onClick?: (arg0: navItem) => void;
};

export interface SteppersProps extends Omit<HTMLAttributes<HTMLElement>, "onChange" | "onSelect"> {
    selectedId?: number;
    items: navItem[];
    hideOnMobile?: boolean;
    align?: align | "default";
    onSelect?: (index: number) => void;
    onChange?: (index: number) => void;
}

export const Steppers = ({
    children,
    selectedId = 0,
    items = [],
    className = "",
    hideOnMobile = false,
    align,
    onSelect,
    onChange,
    ...props
}: SteppersProps) => {
    const navClass = `${hideOnMobile ? "m l" : ""} ${className}`.trim();

    return (
        <nav className={navClass || undefined} {...props}>
            {items.map((v, index) => {
                const isDone = index < selectedId;
                const isDisabled = index > selectedId;
                const isCenter = align === "center-align";

                const button = (
                    <button
                        key={index}
                        className="circle small"
                        disabled={isDisabled}
                        onClick={() => {
                            if (v.onClick) v.onClick(v);
                            if (onSelect) onSelect(index);
                            if (onChange) onChange(index);
                        }}
                    >
                        {isDone ? <i>{v.icon || "done"}</i> : v.icon ? <i>{v.icon}</i> : index + 1}
                    </button>
                );

                return (
                    <React.Fragment key={index}>
                        {isCenter ? (
                            <div className="center-align">
                                {button}
                                {v.text && <div className="small-margin">{v.text}</div>}
                            </div>
                        ) : (
                            <>
                                {button}
                                {v.text && <div>{v.text}</div>}
                            </>
                        )}
                        {index < items.length - 1 && <hr className="max" />}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

export default Steppers;