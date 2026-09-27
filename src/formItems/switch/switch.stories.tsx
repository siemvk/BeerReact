import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";
import { sb_size } from "../../types";

const meta: Meta = {
    title: "M3/FormItems/switch",
    component: Switch,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        icon: {
            type: "string",
            description: "De icon (optioneel)"
        }
    },
    args: {
        icon: undefined,
    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        icon: ""
    }
};
