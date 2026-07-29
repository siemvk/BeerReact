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
    pos?: pos;
    allowSizeChange?: boolean;
    selectedId?: string;
    bigButton?: navItem;
    items: navItem[];
    initialSelected?: string;
    autoUpdateSelected?: boolean;
    dontHideOnBottomBigScreen?: boolean;
}

export type NavProps = NavRailProps;

export const NavRail = ({
    children,
    InitialMenuOpen = true,
    pos = "left",
    allowSizeChange = true,
    bigButton,
    selectedId,
    initialSelected,
    autoUpdateSelected = true,
    dontHideOnBottomBigScreen,
    items = [],
    className = "",
    ...props
}: NavRailProps) => {
    const [menuOpen, setMenuOpen] = useState(InitialMenuOpen);
    const isRail = pos === "left" || pos === "right";
    const isTabs = false;

    const [internalSelected, setInternalSelected] = useState<string>(
        initialSelected || (items.length > 0 ? items[0].id : "")
    );

    const activeId = selectedId !== undefined ? selectedId : internalSelected;

    useMemo(() => {
        if (!isRail) {
            setMenuOpen(false);
        }
    }, [isRail]);

    const handleItemClick = (item: navItem) => {
        if (autoUpdateSelected) {
            setInternalSelected(item.id);
        }
        if (item.onClick) {
            item.onClick(item);
        }
    };

    const navClasses = [
        isRail ? "m l" : !dontHideOnBottomBigScreen && !isTabs ? "s" : "",
        pos,
        "scroll",
        menuOpen ? "max" : "",
        isTabs ? "tabbed" : "",
        className
    ].filter(Boolean).join(" ");

    return (
        <nav className={navClasses} {...props}>
            {isRail && (
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
            )}

            {!isRail && bigButton && !isTabs && (
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

export default NavRail;