// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";

export default function App() {
  return (
    <MantineProvider>
      <Home />
    </MantineProvider>
  );
}
