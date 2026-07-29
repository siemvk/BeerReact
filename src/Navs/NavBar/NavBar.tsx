import React, { HTMLAttributes, useState, useMemo } from "react";
import { pos } from "../../types";

export type navItem = {
    icon: string;
    text: string;
    onClick?: (arg0: navItem) => void;
    id: string;
};

export interface NavBarProps extends HTMLAttributes<HTMLElement> {
    pos?: "bottom" | "top";
    selectedId?: string;
    bigButton?: navItem;
    items: navItem[];
    initialSelected?: string;
    autoUpdateSelected?: boolean;
    dontHideOnBigScreen?: boolean;
}

export const NavBar = ({
    children,
    pos = "bottom",
    bigButton,
    selectedId,
    initialSelected,
    autoUpdateSelected = true,
    dontHideOnBigScreen: dontHideOnBottomBigScreen,
    items = [],
    className = "",
    ...props
}: NavBarProps) => {
    const [internalSelected, setInternalSelected] = useState<string>(
        initialSelected || (items.length > 0 ? items[0].id : "")
    );

    const activeId = selectedId !== undefined ? selectedId : internalSelected;

    const handleItemClick = (item: navItem) => {
        if (autoUpdateSelected) {
            setInternalSelected(item.id);
        }
        if (item.onClick) {
            item.onClick(item);
        }
    };

    const navClasses = [
        !dontHideOnBottomBigScreen ? "s" : "",
        pos,
        "scroll",
        // "max",
        className
    ].filter(Boolean).join(" ");

    return (
        <nav className={navClasses} {...props}>

            {bigButton && (
                <button
                    className="extend square round"
                    onClick={() => handleItemClick(bigButton)}
                >
                    <i>{bigButton.icon}</i>
                    <span>{bigButton.text}</span>
                </button>
            )}

            {items.map((v) => {
                const isActive = activeId === v.id;
                return (
                    <a
                        key={v.id}
                        onClick={() => handleItemClick(v)}
                        className={isActive ? "active" : ""}
                    >
                        <i>{v.icon}</i>
                        <div>{v.text}</div>
                    </a>
                );
            })}
        </nav>
    );
};

export default NavBar;