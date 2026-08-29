import React, { HTMLAttributes, useState } from "react";
import { align } from "../../types";
import TextAndIcon from "../../helpers/textAndIcon";

export type navItem = {
    icon?: string;
    text?: string;
    onClick?: (arg0: navItem) => void;
    id: string;
};

export interface Tabs extends HTMLAttributes<HTMLElement> {
    selectedId?: string;
    items: navItem[];
    initialSelected?: string;
    autoUpdateSelected?: boolean;
    hideOnMobile?: boolean;
    align?: align | "default";
    min?: boolean;
    vertical?: boolean
}

export const Tabs = ({
    children,
    selectedId,
    initialSelected,
    autoUpdateSelected = true,
    items = [],
    className = "",
    hideOnMobile = false,
    align,
    min = false,
    vertical = false,
    ...props
}: Tabs) => {
    const [internalSelected, setInternalSelected] = useState<string>(
        initialSelected || (items.length > 0 ? items[0].id : "")
    );

    const activeId = selectedId !== undefined ? selectedId : internalSelected;

    return (
        <div className={`tabs no-scroll ${hideOnMobile ? "m l" : ""} ${min ? "min" : "max"} ${vertical ? "vertical" : ""} ${className}`.trim()} {...props}>
            {items.map((v) => {
                const isActive = activeId === v.id;
                return (
                    <a
                        key={v.id}
                        onClick={() => {
                            if (autoUpdateSelected) {
                                setInternalSelected(v.id);
                            }
                            if (v.onClick) {
                                v.onClick(v);
                            }
                        }}
                        className={isActive ? "active" : ""}
                    >
                        <TextAndIcon icon={v.icon}>
                            {v.text}
                        </TextAndIcon>
                    </a>
                );
            })}
        </div>
    );
};

export default Tabs;