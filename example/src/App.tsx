import { ReactElement, useEffect, useMemo, useState } from "react";
import Testing from "./testing";
import AutoNavRail from "../../src/helpers/smartNavRail";
import { Input, Nav, navItem } from "../../src";
import ButtonBuilder from "./ButtonBuilder";

const pages: ({ p: () => React.JSX.Element, i: string })[] = [
    { p: Testing, i: "testing" },
    { p: ButtonBuilder, i: "btns" }
]

export default function App() {
    const helper = (v: navItem) => {
        // (document.getElementById(pageId) || document.getElementById("404"))!.style = "display: none";
        // setPageId(v.id);
        (document.getElementById(pageId) || document.getElementById("404"))!.style = "display: none";
        console.log((document.getElementById(v.id) || document.getElementById("404")));
        (document.getElementById(v.id) || document.getElementById("404"))!.style = "";
        setPageId(v.id)
    }
    const big = {
        id: "start",
        icon: "code",
        text: "Start here",
        onClick: helper
    }
    const mainOptions = [
        {
            id: "btns",
            icon: "widgets",
            text: "Buttons",
            onClick: helper
        }, {
            id: "dialogs",
            icon: "chat_bubble",
            text: "dialogs and toasts",
            onClick: helper
        },
        {
            id: "testing",
            icon: "experiment",
            text: "Tests",
            onClick: helper
        }
    ]
    const [pageId, setPageId] = useState("")
    return <AutoNavRail navConfig={{
        pos: "left",
        InitialMenuOpen: true,
        initialSelected: "start",
        items: mainOptions,
        bigButton: big,
        autoUpdateSelected: true
    }}>
        {pages.map((v) => {
            return <main key={v.i} id={v.i} className="responsive" style={{ display: "none" }}> {v.p()}</main>
        })}
        <div style={{ display: "none" }} id="404"><h1>404</h1></div>
        <Nav pos="bottom" initialSelected="start" items={mainOptions} bigButton={big} autoUpdateSelected={true}></Nav>
    </AutoNavRail>
}