import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Css/AnimeDetails.module.css";
import crunchyrollIcon from "../Assets/Crunchyroll.png";
import funimationIcon from "../Assets/Funimation.png";
import netflixIcon from "../Assets/Netflix.png";
import shahidIcon from "../Assets/Shahid.png";

export default function AnimeDetail() {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const icons = {
    Crunchyroll: crunchyrollIcon,
    Funimation: funimationIcon,
    Netflix: netflixIcon,
    Shahid: shahidIcon,
  };

  useEffect(() => {
    async function fetchAnime() {
      if (!animeId) return; 
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`);
        if (!res.ok) throw new Error("Failed to fetch anime data.");
        const data = await res.json();
        setAnime(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAnime();
  }, [animeId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.animeName}>{anime.title}</h1>
        <div className={styles.innerContentContainer}>
          <div className={styles.anotherImageContainer}>
            <img
              src={anime?.images?.jpg?.image_url}
              className={styles.mainImage}
              alt={anime?.title}
            />
          </div>

          <div className={styles.textContainer}>
            <h5 className={styles.synopsisHeader}>Synopsis</h5>
            <p>{anime?.synopsis}</p>

            <div className={styles.lastSection}>
              <div className={styles.lastSectionBoxes}>
                <i className="fa-solid fa-folder-open"></i>
                {anime.genres?.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </div>

              <div className={styles.lastSectionBoxes}>
                <i className="fa-solid fa-tv"></i>
                <p>{anime.status}</p>
              </div>

              <div className={styles.lastSectionBoxes}>
                <i className="fa-brands fa-imdb"></i>
                <p>{anime.score}</p>
              </div>

              <div className={styles.lastSectionBoxeslast}>
                <i className="fa-solid fa-shield"></i>
                <p>{anime.rating}</p>
              </div>
            </div>
          </div>
        </div>

        <h5>Watch {anime.title} on:</h5>
        <ul className={styles.streamingList}>
          {anime.streaming?.map((service, index) => (
            <li key={index}>
              <a href={service.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={icons[service.name]}
                  alt={service.name}
                  className={styles.streamingIcon}
                />
              </a>
            </li>
          ))}
        </ul>

        <div>
          <h2>Trailer:</h2>
          <div className={styles.trailerContainer}>
            {anime.trailer && anime.trailer.embed_url ? (
              <iframe
                className={styles.trailerIframe}
                title={`${anime.title} Trailer`}
                src={anime.trailer.embed_url}
                allowFullScreen
              ></iframe>
            ) : (
              <p>No trailer available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
