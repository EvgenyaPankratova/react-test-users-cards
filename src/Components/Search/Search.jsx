import styles from "./Search.module.css";
import search from '../../img/Frame 4815.svg';

const Search = ({ searchValue, onChangeSearchValue }) => {
  return (
    <div className={styles.search}>
      <input type="search" value={searchValue} onChange={onChangeSearchValue} />
      <img src={search} className={styles.search_img} alt="search"  />
    </div>
  );
};

export default Search;
