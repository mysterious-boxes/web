import { Text } from "@mantine/core";
import { Fragment } from "react";
import { Link } from "remix";

export default function Index() {
  return (
    <Fragment>
      <Link to="/login">
        <Text>Login</Text>
      </Link>
      <Text>Hello Future</Text>
    </Fragment>
  );
}
