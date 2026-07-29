import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { NavRail } from "./NavRail";
import { sb_pos } from "../../types";

const meta: Meta<typeof NavRail> = {
    title: "M3/NavRail",
    component: NavRail,
    tags: ["autodocs"],
    argTypes: {
        pos: sb_pos,
        InitialMenuOpen: {
            control: "boolean",
            description: "Starts with the navigation rail expanded",
        },
        allowSizeChange: {
            control: "boolean",
            description: "Allows toggling open/collapsed state via menu button",
        },
        selectedId: {
            control: "text",
            description: "ID of the currently selected item (controlled mode)",
        },
        initialSelected: {
            control: "text",
            description: "ID of the item selected initially (uncontrolled mode)",
        },
        autoUpdateSelected: {
            control: "boolean",
            description: "Automatically update active tab when clicked",
        },
        dontHideOnBottomBigScreen: {
            control: "boolean",
            description: "Don't hide bottom nav on larger screens",
        },
        bigButton: {
            description: "Optional prominent action button rendered at the top/front",
        },
        items: {
            description: "Array of navigation items with id, icon, and text",
        },
    },
};

export default meta;

type Story = StoryObj<typeof NavRail>;

const defaultItems = [
    {
        id: "home",
        icon: "home",
        text: "Home",
    },
    {
        id: "search",
        icon: "search",
        text: "Zoeken",
    },
    {
        id: "mail",
        icon: "mail",
        text: "Berichten",
    },
    {
        id: "settings",
        icon: "settings",
        text: "Instellingen",
    },
];

const defaultBigButton = {
    id: "new_item",
    icon: "add",
    text: "Nieuw",
};

export const Default: Story = {
    args: {
        pos: "left",
        InitialMenuOpen: true,
        allowSizeChange: true,
        initialSelected: "home",
        autoUpdateSelected: true,
        bigButton: defaultBigButton,
        items: defaultItems,
    },
};

export const Collapsed: Story = {
    args: {
        pos: "left",
        InitialMenuOpen: false,
        allowSizeChange: true,
        initialSelected: "home",
        autoUpdateSelected: true,
        bigButton: defaultBigButton,
        items: defaultItems,
    },
};

export const BottomNavigation: Story = {
    args: {
        pos: "bottom",
        initialSelected: "home",
        autoUpdateSelected: true,
        bigButton: defaultBigButton,
        items: defaultItems,
    },
};

export const RightRail: Story = {
    args: {
        pos: "right",
        InitialMenuOpen: true,
        allowSizeChange: true,
        initialSelected: "search",
        autoUpdateSelected: true,
        bigButton: defaultBigButton,
        items: defaultItems,
    },
};