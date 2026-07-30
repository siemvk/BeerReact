import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { BeerProviders } from "../../src";
import "../../src/theme.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BeerProviders>
            <HashRouter>
                <App />
            </HashRouter>
        </BeerProviders>
    </React.StrictMode>,
);