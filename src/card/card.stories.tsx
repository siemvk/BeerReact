import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "./card";
import { Button } from "../Button/Button";
import { sb_align, sb_padding } from "../types";

const meta: Meta<typeof Card> = {
    title: "M3/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        align: sb_align,
        padding: sb_padding,
        className: {
            control: "text",
            description: "Additional CSS classes (e.g., 'border', 'flat', 'round', 'medium-width')",
        },
        children: {
            control: false,
            description: "Content inside the card",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        padding: "padding",
        children: (
            <>
                <h5>Kaart Titel</h5>
                <p>
                    Dit is een voorbeeld van een eenvoudig kaart-component gebouwd met BeerCSS en React.
                </p>
                <nav className="right-align">
                    <Button variant="transparent">Annuleren</Button>
                    <Button>Bevestigen</Button>
                </nav>
            </>
        ),
    },
};

export const WithImage: Story = {
    args: {
        padding: "no-padding",
        children: (
            <>
                <img
                    className="responsive top-round"
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop"
                    alt="Card header"
                    style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="padding">
                    <h5>Mooi Landschap</h5>
                    <p>
                        Kaarten kunnen afbeeldingen bevatten aan de bovenkant met aangepaste padding voor de tekst.
                    </p>
                    <nav className="right-align">
                        <Button icon="share" variant="transparent">
                            Delen
                        </Button>
                        <Button icon="favorite">
                            Bewaren
                        </Button>
                    </nav>
                </div>
            </>
        ),
    },
};

export const Bordered: Story = {
    args: {
        children: (
            <>
                <h5>Gekaderde Kaart</h5>
                <p>Deze kaart heeft een duidelijke rand met behulp van de `border` klasse.</p>
            </>
        ),
    },
};