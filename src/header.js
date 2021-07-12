import Search from "./search";

const Header = ({ query, setQuery, onSub }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <img className="logo" src="logo.png" alt="" style={{ width: 300 }} />
      </div>
      <Search query={query} setQuery={setQuery} onSub={onSub} />
    </>
  );
};
export default Header;
