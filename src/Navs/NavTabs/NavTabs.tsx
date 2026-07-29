import React, { HTMLAttributes, useState } from "react";

export type navItem = {
    icon: string;
    text: string;
    onClick?: (arg0: navItem) => void;
    id: string;
};

export interface NavTabsProps extends HTMLAttributes<HTMLElement> {
    selectedId?: string;
    items: navItem[];
    initialSelected?: string;
    autoUpdateSelected?: boolean;
    hideOnMobile?: boolean
}

export type NavProps = NavTabsProps;

export const NavTabs = ({
    children,
    selectedId,
    initialSelected,
    autoUpdateSelected = true,
    items = [],
    className = "",
    hideOnMobile = false,
    ...props
}: NavTabsProps) => {
    const [internalSelected, setInternalSelected] = useState<string>(
        initialSelected || (items.length > 0 ? items[0].id : "")
    );

    const activeId = selectedId !== undefined ? selectedId : internalSelected;

    return (
        <nav className={`tabbed no-scroll ${hideOnMobile ? "m l" : ""} ${className}`.trim()} {...props}>
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
                        <i>{v.icon}</i>
                        <div>{v.text}</div>
                    </a>
                );
            })}
        </nav>
    );
};

export default NavTabs;