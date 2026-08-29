
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "M3/Tabs",
    component: Tabs,
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
    },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

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