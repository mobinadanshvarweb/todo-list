import { Box } from "@mui/material";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";

const SearchBar = () => {
  return (
    <Box
      width="80%"
      padding={2}
      bgcolor="#608BC1"
      borderRadius="50px"
      display="flex"
      justifyContent="space-between"
      gap="20px"
      alignItems="center"
    >
      <Filter />
      <Search />
      <Sort />
    </Box>
  );
};

export default SearchBar;
