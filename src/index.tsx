import { createRoot } from "react-dom/client";
import App from "./App";

const domNode = document.getElementById("root");
//@ts-ignore
const root = createRoot(domNode);
root.render(<App />);
