import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { NavRail } from "./NavRail";
import { sb_pos } from "../../types";

const meta: Meta<typeof NavRail> = {
    title: "M3/Nav/NavRail",
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

export const Default: Story = {
    args: {
        pos: "left",
        InitialMenuOpen: true,
        allowSizeChange: true,
        initialSelected: "home",
        autoUpdateSelected: true,
        bigButton: {
            id: "new_item",
            icon: "add",
            text: "Nieuw",
        },
        items: [
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
        ],
    },
};