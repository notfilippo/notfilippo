"use strict";
const React = require("react");
const { render, useInput, useApp, Box, Text } = require("ink");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");

const Robot = () => {
  const { exit } = useApp();
  const [x, setX] = React.useState(1);
  const [y, setY] = React.useState(1);

  useInput((input, key) => {
    if (input === "q") {
      exit();
    }

    if (key.leftArrow) {
      setX(Math.max(1, x - 1));
    }

    if (key.rightArrow) {
      setX(Math.min(20, x + 1));
    }

    if (key.upArrow) {
      setY(Math.max(1, y - 1));
    }

    if (key.downArrow) {
      setY(Math.min(10, y + 1));
    }
  });

  return (
    <Box
      flexDirection="column"
      alignSelf="flex-start"
      paddingX={2}
      marginLeft={x}
      marginTop={y}
    >
      <Box borderStyle="bold">
        <Gradient name="morning">
          <BigText font="tiny" text="qu4k" />
        </Gradient>
        <Box paddingX={2} marginY={1} flexDirection="column">
          <Text bold>Filippo Rossi (@qu4k)</Text>
          <Text>Developer, Tinkerer</Text>
          <Box marginTop={1}>
            <Text>https://github.com/qu4k</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

render(<Robot />);
