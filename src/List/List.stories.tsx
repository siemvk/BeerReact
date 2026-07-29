import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { List } from "./List";
import { sb_space } from "../types";
import { Button } from "../Button/Button";

const meta: Meta<typeof List> = {
    title: "M3/List",
    component: List,
    tags: ["autodocs"],
    argTypes: {
        border: {
            control: "boolean",
            description: "Adds border styling to list items",
        },
        space: sb_space,
    },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {
        border: true,
        children: (
            <>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </>
        ),
    },
};

export const WithoutBorder: Story = {
    args: {
        border: false,
        children: (
            <>
                <li>First item without border</li>
                <li>Second item without border</li>
                <li>Third item without border</li>
            </>
        ),
    },
};