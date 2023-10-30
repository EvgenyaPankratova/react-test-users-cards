import styles from "./Search.module.css";

const Search = ({ searchValue, onChangeSearchValue }) => {
  return (
    <div className={styles.search}>
      <input type="search" value={searchValue} onChange={onChangeSearchValue} />
      <img className={styles.search_img} alt="search" src="../Frame 4815.svg" />
    </div>
  );
};

export default Search;
