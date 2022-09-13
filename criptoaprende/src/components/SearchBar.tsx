import styles from "../styles/SearchBar.module.css";
import searchIcon from "../public/search_icon.svg";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.inputText} />
      <button className={styles.button}>
        <img src={searchIcon} className={styles.searchIcon} />
      </button>
    </div>
  );
}
