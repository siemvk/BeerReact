import { Button, Card, SplitButton, useDialog } from "../../src";
import { useToast } from "../../src";
import { menuHelper, divider } from "../../src";
import { Tooltip } from "../../src";

export default function Testing() {
    const { addToast } = useToast();
    const { pushDialog } = useDialog();
    const highlights = [
        {
            title: "Dialog test",
            detail: <>Druk op de knop voor een test dialog.<br /> de rode is voor errors btw.</>,
            button: < Button icon="bolt" advancedClasses={["round"]} onClick={() => {
                pushDialog({
                    title: "Het werkt :D",
                    content: "content hier",
                })
            }}>
                Dialog test
            </Button >
        },
        {
            title: "Toast test",
            detail: <>Toon een toast, teminsten ik denk dat het zo heet??? <br />Ook een test voor menus in de zelfde div als button</>,
            button: <div>
                <Button icon="visibility" advancedClasses={["border", "round"]}>
                    Toast test
                </Button>
                {menuHelper({
                    menuData: [
                        {
                            content: "Basic toast",
                            onClick: () => {
                                addToast({
                                    text: "Basic toast"
                                })
                            }
                        },
                        {
                            content: "Toast with icon",
                            onClick: () => {
                                addToast({
                                    text: "wow a icon",
                                    icon: "home"
                                })
                            }
                        },
                        {
                            content: "EVIL toast",
                            onClick: () => {
                                addToast({
                                    text: "HELP",
                                    type: "error"
                                })
                            }
                        },
                        {
                            content: "Toast with button",
                            onClick: () => {
                                addToast({
                                    text: "hi",
                                    action: {
                                        label: "Button",
                                        onClick: () => {
                                            pushDialog({
                                                title: "Het werkt :D",
                                                content: "content hier",
                                            })
                                        }
                                    }
                                })
                            }
                        },
                    ],
                    docked: false,
                    noWrap: true
                })}
            </div>
        },
        {
            detail: <>Hover over de knop om hopelijk <br /> de tooltip te zien</>,
            title: "Tooltip test",
            button: <Button buttonTooltip={<Tooltip rich={false}>wow het werk</Tooltip>}>Hover</Button>

        },
        {
            title: "Dropdown test",
            detail: <>Druk op de meer opties knop van de SplitButton. <br /> Ook een test voor de Splitbutton</>,
            button: <SplitButton icon="more_horiz" size="medium"
                menu={menuHelper({
                    menuData: [
                        {
                            content: "hai"
                        },
                        {
                            content: "item 2",
                            icon: "home"
                        },
                        divider,
                        {
                            content: "subMenu",
                            subMenu: [
                                {
                                    content: "hoi"
                                },
                                {
                                    content: "wow"
                                },
                                {
                                    content: "selected",
                                    selected: true
                                }
                            ]
                        }
                    ],
                    positions: 'left',
                    noWrap: true
                })}>
                Split action
            </SplitButton>
        },
    ];
    return (
        <main>
            <div className="grid l">
                {highlights.map((item) => (
                    <div className="s4">
                        <Card title={item.title} buttons={[item.button]}>
                            {item.detail}
                        </Card>
                    </div>
                ))}
            </div>
            <div className="grid m">
                {highlights.map((item) => (
                    <div className="s6">
                        <Card title={item.title} buttons={[item.button]}>
                            {item.detail}
                        </Card>
                    </div>
                ))}
            </div>
            <div className="grid s">
                {highlights.map((item) => (
                    <div className="s12">
                        <Card title={item.title} buttons={[item.button]}>
                            {item.detail}
                        </Card>
                    </div>
                ))}
            </div>
        </main>
    );
}