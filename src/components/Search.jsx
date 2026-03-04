function Search({ setSearchText, handleSearch }) {
  return (
    <div className="search">
      <h2>Search Books</h2>
      <div>
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
export default Search;
