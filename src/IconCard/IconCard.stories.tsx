import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { IconCard } from "./IconCard";

const meta: Meta<typeof IconCard> = {
    title: "M3/IconCard",
    component: IconCard,
    tags: ["autodocs"],
    argTypes: {
        icon: {
            control: "text",
            description: "Material Symbol icon name",
        },
        text: {
            control: "text",
            description: "Title / text displayed on the card",
        },
        className: {
            control: "text",
            description: "Additional CSS classes (e.g. 'small-width', 'medium-width', 'round', 'flat')",
        },
    },
};

export default meta;

type Story = StoryObj<typeof IconCard>;

export const Default: Story = {
    args: {
        icon: "star",
        text: "Favoriet",
    },
};