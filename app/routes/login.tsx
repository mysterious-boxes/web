import { Fragment } from "react";
import { Text } from "@mantine/core";
import { Link } from "remix";

export default function Login() {
  return (
    <Fragment>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Text>Hello Login</Text>
    </Fragment>
  );
}
