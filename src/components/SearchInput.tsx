import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup height="50px">
        <InputLeftElement
          children={<BsSearch size={20} />}
          pos="absolute"
          top="1"
          left="0"
          marginLeft={2}
        />
        <Input
          ref={ref}
          borderRadius="full"
          placeholder="Search 859,596 games"
          focusBorderColor="white"
          variant="filled"
          size="lg"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
