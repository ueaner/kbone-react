import { Stack } from "@mantine/core";

import classes from "./Home.module.css";

export default function Home() {
  return (
    <Stack className={classes.root}>
      <h1 className={classes.title}>Home</h1>
      <div className={classes.content}>Hello Mantine!</div>
    </Stack>
  );
}
