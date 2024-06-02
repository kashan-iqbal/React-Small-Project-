import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForm from "../Hooks/usePlatForm";

const PlatForm = ({ setGameQuerry, platform }) => {
  const { error, game, loading } = usePlatForm();

  if (error) return null;

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platform?.name || "PlatForm"}
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => setGameQuerry((prev) => ({ ...prev, platform: null }))}
          >
            Reset Filter
          </MenuItem>
          {game.length > 0 &&
            game.map((g) => (
              <MenuItem
                onClick={() => setGameQuerry((prev) => ({ ...prev, platform: g }))}
                key={g.id}
              >
                {g.name}
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatForm;
