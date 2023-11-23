import { Stack } from "@mantine/core";

import classes from "./Admin.module.css";

export default function Admin() {
  return (
    <Stack className={classes.root}>
      <h1 className={classes.title}>Admin</h1>
      <div className={classes.content}>Hello React!</div>
    </Stack>
  );
}
