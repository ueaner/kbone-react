import { Group } from "@mantine/core";

import classes from "./Home.module.css";

export default function Home() {
  return (
    <Group>
      <h1 className={classes.title}>React</h1>
      <div className={classes.content}>Hello Mantine!</div>
    </Group>
  );
}
