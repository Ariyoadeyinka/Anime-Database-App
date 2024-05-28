import { useEffect, useState } from "react";
import styles from "../Css/Search.module.css";
import AnimeList from "./AnimeList";

export default function Search({ query, setQuery }) {
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState([]);

  const getsearchData = async (searchData) => {
    setLoading(true);
    try {
      const apiresponse = await fetch(`https://api.jikan.moe/v4/anime?q=${searchData}`);
      const result = await apiresponse.json();
      const { data } = result;
      if (data && data.length > 0) {
        setAnime(data);
      } else {
        setAnime([]);
      }
    } catch (error) {
      console.error("Error fetching search data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPopular = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`);
      const result = await res.json();
      const { data } = result;
      setAnime(data);
    } catch (error) {
      console.error("Error fetching popular anime:", error);
    } finally {
      setLoading(false);
    }
  };

  const getAiring= async() => {
    setLoading(true);
    try {
      const res = await fetch('https://api.jikan.moe/v4/top/anime?filter=airing')
      const result = await res.json();
      const {data} = result;
      setAnime(data);
    } catch (error) {
      console.error("Error fetching popular anime:", error);
    } finally {
      setLoading(false);
    }
  }

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
        <button className={styles.Search} type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className={styles.container}>
        <button className={styles.Popular} onClick={getPopular}>
          Popular <i className="fa-solid fa-fire"></i>
        </button>
        <button className={styles.Airing} onClick={getAiring}>
          Airing <i className="fa-solid fa-clock"></i>
        </button>
        <button className={styles.Upcoming}>
          Upcoming <i className="fa-solid fa-calendar-days"></i>
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <AnimeList anime={anime} />
      )}
    </div>
  );
}
