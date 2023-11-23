// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider, Center } from "@mantine/core";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";

export default function App() {
  return (
    <MantineProvider>
      <Center style={{ padding: "16px" }}>
        <Home />
        <Admin />
      </Center>
    </MantineProvider>
  );
}
