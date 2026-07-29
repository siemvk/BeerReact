import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { NavTabs } from "./NavTabs";

const meta: Meta<typeof NavTabs> = {
    title: "M3/NavTabs",
    component: NavTabs,
    tags: ["autodocs"],
    argTypes: {
        selectedId: {
            control: "text",
            description: "ID of the currently selected tab (controlled mode)",
        },
        initialSelected: {
            control: "text",
            description: "ID of the tab selected initially (uncontrolled mode)",
        },
        autoUpdateSelected: {
            control: "boolean",
            description: "Automatically update selected tab on click",
        },
        items: {
            description: "Array of tab items with id, icon, and text",
        },
        hideOnMobile: {
            control: "boolean",
            description: "Do we hide on mobile"
        }
    },
};

export default meta;

type Story = StoryObj<typeof NavTabs>;

export const Default: Story = {
    args: {
        initialSelected: "home",
        autoUpdateSelected: true,
        items: [
            {
                id: "home",
                icon: "home",
                text: "Home",
            },
            {
                id: "explore",
                icon: "explore",
                text: "Ontdekken",
            },
            {
                id: "notifications",
                icon: "notifications",
                text: "Meldingen",
            },
            {
                id: "profile",
                icon: "person",
                text: "Profiel",
            },
        ],
    },
};