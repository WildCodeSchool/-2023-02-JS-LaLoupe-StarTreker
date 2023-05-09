import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import style from "./componentsCss/Search.module.scss";

function Search({ planets }) {
  const [searchPlanet, setSearchPlanet] = useState("");

  const handleSearchPlanet = (e) => {
    e.stopPropagation();
    // eslint-disable-next-line prefer-destructuring
    const value = e.target.value;
    setSearchPlanet(value);
  };

  return (
    <div className={style.bigContainer}>
      <div className={style.container}>
        <div className={style.searchBar}>
          <input
            autoComplete="off"
            type="text"
            name="searchBar"
            placeholder="🔎 Rechercher"
            onChange={handleSearchPlanet}
          />
        </div>
        {searchPlanet && ( // only show search results if showResults is true)}
          <div className={style.search_results}>
            {planets
              .filter((val) => {
                return val.kepoi_name
                  .toLowerCase()
                  .includes(searchPlanet.toLowerCase());
              })
              .map((val) => {
                return (
                  <Link
                    to={`/planetes/${val.kepid}`}
                    className={style.search_result}
                    key={val.kepid}
                  >
                    {val.kepoi_name}
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

Search.propTypes = { planets: PropTypes.string.isRequired };

export default Search;
