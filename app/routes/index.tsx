import { Text, Button } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { Prism } from "@mantine/prism";

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

export default function Index() {
  const notifications = useNotifications();
  const showNotification = () => {
    console.log(window);
    notifications.showNotification({
      color: "dark",
      title: "Default notification",
      message: "Hey there, your code is awesome! 🤥",
    });
  };

  return (
    <div>
      <Text underline>Underlined</Text>
      <Prism withLineNumbers language="jsx">
        {codeForPreviousDemo}
      </Prism>
      <Button color={"dark"} onClick={showNotification} variant="outline">
        Ocean blue button
      </Button>
    </div>
  );
}
