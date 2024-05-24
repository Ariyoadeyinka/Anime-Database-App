import styles from "../Css/Search.module.css";
export default function Search() {
  return (
    <div>
      <div className={styles.searchContainer}>
        <input type="text" />
        <button className={styles.Search}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className={styles.container}>
        <button className={styles.Popular}>
          Popular <i class="fa-solid fa-fire"></i>
        </button>
        <button className={styles.Airing}>
          Airing <i class="fa-solid fa-clock"></i>
        </button>
        <button className={styles.Upcoming}>
          Upcoming <i class="fa-solid fa-calendar-days"></i>
        </button>
      </div>
    </div>
  );
}
