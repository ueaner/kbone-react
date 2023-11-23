import { createRoot } from "react-dom/client";
import App from "./App";

export default function createApp() {
  const container = document.createElement("div");
  container.id = "root";
  document.body.appendChild(container);

  const rootNode = document.getElementById("root") as HTMLElement;
  createRoot(rootNode).render(<App />);

  // createRoot(container).render(<App />);
}
