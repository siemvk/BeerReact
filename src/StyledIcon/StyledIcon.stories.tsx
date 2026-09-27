import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { StyledIcon } from "./StyledIcon";

const meta: Meta<typeof StyledIcon> = {
    title: "M3/StyledIcon",
    component: StyledIcon,
    tags: ["autodocs"],
    argTypes: {
        icon: {
            control: "text",
            description: "Material Symbol icon name",
        },
        fill: {
            control: "boolean",
            description: "Whether the icon should be filled or not",
        },
        shape: {
            control: "select",
            options: ["square", "round", "square round"],
            description: "Shape of the icon container",
        },
    },
    args: {
        shape: "square",
        fill: true,
    },
};

export default meta;

type Story = StoryObj<typeof StyledIcon>;

export const Default: Story = {
    args: {
        icon: "star",
    },
};