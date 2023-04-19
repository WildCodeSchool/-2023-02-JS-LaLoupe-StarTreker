import React from "react";
import style from "./componentsCss/Search.module.scss";

function Search() {
  return (
    <div className={style.searchBar}>
      <input type="text" name="searchBar" placeholder="Rechercher" />
    </div>
  );
}

export default Search;
