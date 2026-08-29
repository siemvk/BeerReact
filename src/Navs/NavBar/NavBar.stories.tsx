import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { NavBar } from "./NavBar";

const meta: Meta<typeof NavBar> = {
    title: "M3/Nav/NavBar",
    component: NavBar,
    tags: ["autodocs"],
    argTypes: {
        pos: {
            control: "select",
            options: ["bottom", "top"],
            description: "Position of the navigation bar (bottom or top)",
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
        dontHideOnBigScreen: {
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

type Story = StoryObj<typeof NavBar>;

const sampleItems = [
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

export const Default: Story = {
    args: {
        pos: "bottom",
        initialSelected: "home",
        autoUpdateSelected: true,
        items: sampleItems,
        dontHideOnBigScreen: true
    },
};