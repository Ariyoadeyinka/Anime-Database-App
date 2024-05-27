import { useState } from "react";
import styles from "../Css/Search.module.css";
import AnimeList from "./AnimeList";
export default function Search({ query, setQuery }) {
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState([]);

  const getsearchData = (searchData) => {
    setLoading(true);
    async function getAnime() {
      const apiresponse = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchData}&limit=10`
      );
      const result = await apiresponse.json();

      const { data } = result;
      if (data && data.length > 0) {
        setLoading(false);
        setAnime(data);
      }
    }
    getAnime();
  };
  console.log(loading, anime);

  const handleInputValue = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getsearchData(query);
  };
  return (
    <div>
      <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputValue} value={query} />
        <button className={styles.Search}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

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
      {anime && anime.length > 0
        ? anime.map((item) => (
            <AnimeList
              id={item.mal_id}
              image={item.images.jpg.image_url}
              title={item.title}
              airingStatus={item.status}
              rank={item.rank}
              rating={item.rating}
            />
          ))
        : null}
    </div>
  );
}
