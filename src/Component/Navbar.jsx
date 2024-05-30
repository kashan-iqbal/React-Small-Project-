import { HStack, Img, Text } from "@chakra-ui/react";
import logo from "./../assets/react.svg";

const Navbar = () => {
  return (
    <>
      <HStack bg="yellow">
        <Img boxSize="60px" src={logo} alt="" />
        <Text>Gameing Zone</Text>
      </HStack>
    </>
  );
};

export default Navbar;
