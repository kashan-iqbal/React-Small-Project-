import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import "../App.css";

const Search = ({ setSearch }) => {
  const search = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch((prev) => ({ ...prev, search: search.current.value }));

    search.current.value = "";
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={search}
          borderRadius={20}
          placeholder="Search..."
          variant="fill"
        />
      </InputGroup>
    </form>
  );
};

export default Search;
