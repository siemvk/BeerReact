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
                <li>
                    <i className="icon">folder</i>
                    <div className="max">
                        <h6 className="small">Documenten</h6>
                        <div>32 bestanden</div>
                    </div>
                    <Button shape="circle" variant="transparent" icon="more_vert" />
                </li>
                <li>
                    <i className="icon">image</i>
                    <div className="max">
                        <h6 className="small">Afbeeldingen</h6>
                        <div>14 bestanden</div>
                    </div>
                    <Button shape="circle" variant="transparent" icon="delete" />
                </li>
            </>
        ),
    },
};