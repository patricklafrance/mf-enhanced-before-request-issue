// @ts-check

console.log("************* bootstrap.jsx");

import { App } from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <>
            <App />
            {/* {HelloWorld && <HelloWorld />}
            {sayHello && <div>{sayHello()}</div>} */}
        </>
    </StrictMode>
);
