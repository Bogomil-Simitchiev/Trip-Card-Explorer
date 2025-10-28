import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ searchQuery, setSearchQuery, sortOrder, setSortOrder }) {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearch = () => {
    setSearchQuery(localSearch.trim());
    setSortOrder("none");
  };

  const handleClear = () => {
    setLocalSearch("");
    setSortOrder("none");
    setSearchQuery("");
  };

  const handleSortToggle = () => {
    if (sortOrder === "none") setSortOrder("high");
    else if (sortOrder === "high") setSortOrder("low");
    else setSortOrder("high");
  };

  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search trips..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-btn">
        Search
      </button>
      <button
        className={`sort-btn ${sortOrder !== "none" ? "active" : ""}`}
        onClick={handleSortToggle}
      >
        Sort by Rating{" "}
        {sortOrder === "high" ? "⬆️" : sortOrder === "low" ? "⬇️" : ""}
      </button>
      <button onClick={handleClear} className="search-btn">
        Clear
      </button>
    </div>
  );
}

export default SearchBar;
