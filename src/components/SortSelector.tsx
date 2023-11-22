import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevence{" "}
      </MenuButton>
      <MenuList>
        <MenuItem key="1">Relevence</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
