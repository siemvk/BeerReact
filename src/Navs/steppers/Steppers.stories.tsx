
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Steppers } from "./Steppers";

const meta: Meta<typeof Steppers> = {
    title: "M3/Steppers",
    component: Steppers,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Steppers>;

export const Default: Story = {
    args: {
        selectedId: 1,
        items: [
            {},
            {},
            {},
        ],
    },
};

export const HorizontalLabels: Story = {
    args: {
        selectedId: 1,
        items: [
            { text: "Previous" },
            { text: "Current" },
            { text: "Next" },
        ],
    },
};

export const CenteredLabels: Story = {
    args: {
        selectedId: 1,
        align: "center-align",
        items: [
            { text: "Previous" },
            { text: "Current" },
            { text: "Next" },
        ],
    },
};