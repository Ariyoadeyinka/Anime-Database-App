import { useEffect, useState } from "react";
import styles from "../Css/AnimeDetails.module.css";
import crunchyrollIcon from "../Assets/Crunchyroll.png";
import funimationIcon from "../Assets/Funimation.png";
import netflixIcon from "../Assets/Netflix.png";
import shahidIcon from "../Assets/Shahid.png";
export default function AnimeDetail({ animeId }) {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const icons = {
    Crunchyroll: crunchyrollIcon,
    Funimation: funimationIcon,
    Netflix: netflixIcon,
    Shahid: shahidIcon,
  };
  useEffect(() => {
    async function fetchAnime() {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`);
      const data = await res.json();
      console.log(data.data);
      setAnime(data.data);
      setIsLoading(false);
    }
    fetchAnime();
  }, [animeId]);
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.innercontentContainer}>
            <div className={styles.anotherimageContainer}>
              <img
                src={anime?.images?.jpg?.image_url}
                className={`card-img-top ${styles.Mainimage}`}
                alt={anime?.title}
              />
            </div>

            <div className={styles.textContainer}>
              <div className={styles.textContainercontents}>
                {" "}
                <h5>Title: </h5> <p>{anime.title}</p>
              </div>
              <div className={styles.textContainercontents}>
                {" "}
                <h5>Rating:</h5> <p> {anime.rating}</p>
              </div>
              <div className={styles.textContainercontents}>
                <h5>Status:</h5> <p>{anime.status}</p>
              </div>
              <div className={styles.textContainercontents}>
                <h5>Imdb Score:</h5> <p>{anime.score}</p>
              </div>
              <div className={styles.textContainercontents}>
                <h5>Genres:</h5>
                <ul>
                  {anime.genres?.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.textContainercontents}></div>
            </div>
          </div>

          <p>{anime?.synopsis}</p>
          <h5>Watch {anime.title} on:</h5>
          <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
            {anime.streaming?.map((service, index) => (
              <li key={index} style={{ marginRight: "10px" }}>
                <a href={service.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={icons[service.name]}
                    alt={service.name}
                    style={{ width: "100%", height: "50px" }}
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
    </div>
  );
}
