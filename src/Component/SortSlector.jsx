import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const SortSlector = ({ gameQuerry, setSort }) => {
  const sort = [
    { value: "", label: "Relvence" },
    { value: "-added", label: "Dated Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Realse Date" },
    { value: "-metacritic", label: "Popularty" },
    { value: "-rating", label: "Average Ratting" },
  ];

  const sortOrder = sort.find((order) => order.value === gameQuerry);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {sortOrder.label || " Sort Slector"}
      </MenuButton>
      <MenuList>
        {sort.map((s) => (
          <MenuItem
            onClick={() => setSort((prev) => ({ ...prev, sort: s.value }))}
            key={s.value}
            value={s.value}
          >
            {s.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSlector;
