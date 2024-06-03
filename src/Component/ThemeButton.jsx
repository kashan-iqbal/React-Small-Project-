import { HStack, Switch, Text, useColorMode, VStack } from "@chakra-ui/react";

const ThemeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <VStack>
      <Switch
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Theme {colorMode}</Text>
    </VStack>
  );
};

export default ThemeButton;
