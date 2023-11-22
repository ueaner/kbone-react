import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./app";

export default function createApp() {
  const container = document.createElement("div");
  container.id = "app";
  document.body.appendChild(container);

  // 显示 React 组件
  createRoot(container).render(<App />);
}
