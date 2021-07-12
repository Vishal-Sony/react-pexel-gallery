import { Button } from "@material-ui/core";
import FilledInput from "@material-ui/core/FilledInput";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ query, onSub, setQuery }) => {
  return (
    <div className="search" style={{ display: "flex" }}>
      {/* <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      /> */}
      <TextField
        id="filled-basic"
        label="Search"
        variant="filled"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        className="btn"
        variant="contained"
        color="primary"
        onClick={() => onSub(query)}
      >
        <SearchIcon /> Search
      </Button>
    </div>
  );
};
export default Search;
