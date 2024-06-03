import { HStack, Img, Show, Text } from "@chakra-ui/react";
import logo from "./../assets/logo.png";
import ThemeButton from "./ThemeButton";
import Search from "./Search";
import DrawerExample from "./Drawer";

const Navbar = ({ setGameQuerry,slected }) => {
  return (
    <>
      <HStack margin="0px 5%" justifyContent="space-between">
        <Show below="lg">
            <DrawerExample slected={slected}  setGameQuerry={setGameQuerry}  />
          </Show>
        <Img boxSize="60px" src={logo} alt="" />
        <Search setSearch={setGameQuerry} />
        <ThemeButton />
      </HStack>
    </>
  );
};

export default Navbar;
