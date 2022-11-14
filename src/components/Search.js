import React from "react";

function Search({ search, onSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={(event) => onSearch(event.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
