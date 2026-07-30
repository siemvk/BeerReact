import { Button, Card, SplitButton, Space, Tooltip, divider, menuHelper, useToast } from "../../../src";

export default function SplitButtonsDemo() {
    const { addToast } = useToast();

    const sampleMenu = menuHelper({
        noWrap: true,
        menuData: [
            {
                content: "First Action",
                icon: "flash_on",
                onClick: () => addToast({ text: "Clicked First Action", icon: "flash_on" })
            },
            {
                content: "Second Action",
                icon: "star",
                onClick: () => addToast({ text: "Clicked Second Action", icon: "star" })
            },
            divider,
            {
                content: "Danger Zone",
                icon: "delete",
                onClick: () => addToast({ text: "Clicked Danger Zone", type: "error", icon: "delete" })
            }
        ]
    });

    return (
        <main className="responsive padding">
            <h2>Split Buttons & Tooltips</h2>
            <p className="secondary-text">Test SplitButtons with dropdown menus and interactive Tooltips.</p>
            <Space />

            <div className="grid">
                {/* SplitButtons Section */}
                <Card className="s12 m6 border padding">
                    <h5>Split Buttons</h5>
                    <p className="secondary-text">Combine primary action button with dropdown sub-actions.</p>
                    <Space />
                    <div className="vertical" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div>
                            <SplitButton icon="flash_on" menu={sampleMenu} onClick={() => addToast({ text: "Main button clicked" })}>
                                Main Action
                            </SplitButton>
                        </div>
                    </div>
                </Card>

                {/* Tooltips Section */}
                <Card className="s12 m6 border padding">
                    <h5>Tooltips</h5>
                    <p className="secondary-text">Hover over the buttons below to display tooltips in different positions.</p>
                    <Space />
                    <div className="row wrap" style={{ gap: "12px" }}>
                        <Button
                            icon="arrow_upward"
                            buttonTooltip={<Tooltip pos="top">Tooltip on Top</Tooltip>}
                        >
                            Top Tooltip
                        </Button>
                        <Button
                            icon="arrow_downward"
                            buttonTooltip={<Tooltip pos="bottom">Tooltip on Bottom</Tooltip>}
                        >
                            Bottom Tooltip
                        </Button>
                        <Button
                            icon="arrow_back"
                            buttonTooltip={<Tooltip pos="left">Tooltip on Left</Tooltip>}
                        >
                            Left Tooltip
                        </Button>
                        <div>
                            <Button
                                icon="arrow_forward"
                            >
                                Right Tooltip
                            </Button>
                            <Tooltip pos="top">Tooltip on Right</Tooltip>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    );
}
