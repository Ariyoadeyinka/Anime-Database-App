import { useEffect, useState } from "react";
import styles from "../Css/AnimeDetails.module.css";
export default function AnimeDetail({ anime, setAnime, animeId }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchAnime() {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`);
      const data = await res.json();
      console.log(data);
      setAnime(data.data);
      setIsLoading(false);
    }
    fetchAnime();
  }, [animeId]);
  return (
    <div>
      <div className={styles.mainContainer}>
        <p>{anime.title}</p>
      </div>
    </div>
  );
}
