import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import ButtonBuilder from "./ButtonBuilder";
import DialogsDemo from "./pages/DialogsDemo";
import SplitButtonsDemo from "./pages/SplitButtonsDemo";
import FormsDemo from "./pages/FormsDemo";
import CardsListsDemo from "./pages/CardsListsDemo";
import AutoNavRail from "../../src/helpers/smartNavRail";
import { NavBar, navItem } from "../../src";

export default function App() {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine current route id from URL path (e.g. "#/btns" -> "btns")
    const currentId = location.pathname.replace(/^\//, "") || "btns";

    const handleNavigate = (item: navItem) => {
        navigate(`/${item.id}`);
    };

    const bigButton: navItem = {
        id: "btns",
        icon: "code",
        text: "Button Builder",
        onClick: handleNavigate,
    };

    const mainOptions: navItem[] = [
        {
            id: "btns",
            icon: "widgets",
            text: "Button Builder",
            onClick: handleNavigate,
        },
        {
            id: "dialogs",
            icon: "chat_bubble",
            text: "Dialogs & Toasts",
            onClick: handleNavigate,
        },
        {
            id: "split-buttons",
            icon: "call_split",
            text: "Split Buttons & Tooltips",
            onClick: handleNavigate,
        },
        {
            id: "forms",
            icon: "edit_note",
            text: "Form Controls",
            onClick: handleNavigate,
        },
        {
            id: "cards-lists",
            icon: "view_agenda",
            text: "Cards & Lists",
            onClick: handleNavigate,
        },
    ];

    return (
        <AutoNavRail
            navConfig={{
                pos: "left",
                InitialMenuOpen: true,
                selectedId: currentId,
                items: mainOptions,
                bigButton: bigButton,
                autoUpdateSelected: false,
            }}
        >
            <main className="responsive">
                <Routes>
                    <Route path="/" element={<Navigate to="/btns" replace />} />
                    <Route path="/btns" element={<ButtonBuilder />} />
                    <Route path="/dialogs" element={<DialogsDemo />} />
                    <Route path="/split-buttons" element={<SplitButtonsDemo />} />
                    <Route path="/forms" element={<FormsDemo />} />
                    <Route path="/cards-lists" element={<CardsListsDemo />} />
                    <Route
                        path="*"
                        element={
                            <div className="padding center-align">
                                <h1>404</h1>
                                <p>Page not found</p>
                            </div>
                        }
                    />
                </Routes>
            </main>
            <NavBar
                selectedId={currentId}
                items={mainOptions}
                bigButton={bigButton}
                autoUpdateSelected={false}
            />
        </AutoNavRail>
    );
}