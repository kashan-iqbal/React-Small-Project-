import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ThemeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <HStack>
      <Switch
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Theme {colorMode}</Text>
    </HStack>
  );
};

export default ThemeButton;
