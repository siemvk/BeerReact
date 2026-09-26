import React, { HTMLAttributes, useState, useMemo } from "react";
import { pos } from "../../types";

export type navItem = {
    icon: string;
    text: string;
    onClick?: (arg0: navItem) => void;
    id: string;
};

export interface NavRailProps extends HTMLAttributes<HTMLElement> {
    InitialMenuOpen?: boolean;
    pos?: "left" | "right";
    allowSizeChange?: boolean;
    selectedId?: string;
    bigButton?: navItem;
    items: navItem[];
    initialSelected?: string;
    autoUpdateSelected?: boolean;
    dontHideOnMobile?: boolean;
    center?: boolean;
    classNames?: string[];
}

export interface NavProps extends NavRailProps { }

export const NavRail = ({
    children,
    InitialMenuOpen = true,
    pos = "left",
    allowSizeChange = true,
    bigButton,
    selectedId,
    initialSelected,
    autoUpdateSelected = true,
    dontHideOnMobile = false,
    items = [],
    className = "",
    classNames = [],
    center = false,
    ...props
}: NavRailProps) => {
    const [menuOpen, setMenuOpen] = useState(InitialMenuOpen);

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
        !dontHideOnMobile ? "m l" : "",
        pos,
        "scroll",
        menuOpen ? "max" : "",
        className,
        center ? "center-align" : "",
        [...classNames]
    ].filter(Boolean).join(" ");

    const itemClasses = [
        // gang idk waarom dit hier is
    ].filter(Boolean).join(" ");


    return (
        <nav className={navClasses} {...props}>

            {children}

            <header>
                {allowSizeChange && (
                    <button
                        className="extra circle transparent"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i>{menuOpen ? "menu_open" : "menu"}</i>
                    </button>
                )}
                {bigButton && (
                    <button
                        className="extend square round"
                        onClick={() => handleItemClick(bigButton)}
                    >
                        <i>{bigButton.icon}</i>
                        <span>{bigButton.text}</span>
                    </button>
                )}
            </header>

            {items.map((v) => {
                const isActive = activeId === v.id;
                return (
                    <a
                        key={v.id}
                        onClick={() => handleItemClick(v)}
                        className={isActive ? "active " + itemClasses : itemClasses}
                    >
                        <i>{v.icon}</i>
                        <div>{v.text}</div>
                    </a>
                );
            })}
        </nav>
    );
};

export default NavRail;