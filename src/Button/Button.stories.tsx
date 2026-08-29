import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { sb_size } from "../types";
import Tooltip from "../helpers/tooltip";

const meta: Meta = {
    title: "M3/Button",
    component: Button,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        icon: {
            control: 'text',
            description: 'The google fonts icon',
        },
        children: {
            control: 'text',
            description: "The text of the button or the children"
        },
        size: sb_size,
        FAB: {
            control: "boolean",
            description: "Moet dit een FAB zijn"
        },
        responsive: {
            control: "boolean",
            description: "Moet dit responsive zijn"
        },
        extendedFAB: {
            control: "boolean",
            description: "Is it a extending FAB"
        },
        buttonTooltip: {
            description: "Tooltip element",
            table: {
                type: {
                    summary: "React.ReactElement<TooltipProps, typeof Tooltip>[]",
                },
            },
        }
    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        children: "Base button",
        size: "",
        buttonTooltip: <Tooltip pos="bottom">Druk op de knop om er op te drukken</Tooltip>
    },
};

export const FAB: Story = {
    args: {
        children: "Base button",
        size: "",
        forms: ["square"],
        FAB: true,
        icon: "home",
        shape: "square",
        extendedFAB: false
    }
};
