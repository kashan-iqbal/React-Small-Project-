import { HStack, Img, Text } from "@chakra-ui/react";
import logo from "./../assets/react.svg";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <>
      <HStack margin="0px 5%" justifyContent="space-between">
        <Img boxSize="60px" src={logo} alt="" />
        <ThemeButton/>
      </HStack>
    </>
  );
};

export default Navbar;
