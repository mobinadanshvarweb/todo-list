import { Box } from "@mui/material";
import Filter from "./Filter";
import Search from "./Search";
import Sort from "./Sort";
import ResetSearchBar from "./ResetSearchBar";

const SearchBar = () => {
  return (
    <Box
      width="80%"
      padding={2}
      bgcolor="#133E87"
      borderRadius="50px"
      display="flex"
      justifyContent="space-between"
      gap="20px"
      alignItems="center"
      position="relative"
    >
      <Filter />
      <Search />
      <Sort />

      <ResetSearchBar />
    </Box>
  );
};

export default SearchBar;
