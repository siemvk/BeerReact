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
                <li><p>test</p>
                </li>
                <li>
                    <p>hai</p>
                </li>
            </>
        ),
    },
};