import { hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

declare global {
  interface Window {
    __SSR_DATA__?: {
      faqs: any[];
      blogPosts: any[];
    };
  }
}

const container = document.getElementById("root")!;

if (container.innerHTML.trim()) {
  hydrateRoot(container, <App />);
} else {
  import("react-dom/client").then(({ createRoot }) => {
    createRoot(container).render(<App />);
  });
}
