import { useDispatch, useSelector } from "react-redux";
import Input from "../../common/Input";
import { setSearch } from "../../../redux/slice/task-slice";
import { RootState } from "../../../redux/store";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.task.search);
  return (
    <Input
      placeholder="Search..."
      type="text"
      value={search}
      onChangeHandler={(e) => {
        dispatch(setSearch(e.target.value));
      }}
    />
  );
};

export default Search;
