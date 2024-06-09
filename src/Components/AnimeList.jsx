import React from "react";
import { Link } from "react-router-dom";
import styles from "../Css/AnimeList.module.css";

export default function AnimeList({ anime, setAnimeId }) {
  return (
    <div className={styles.animeListContainer}>
      <div className="row">
        {anime.map((anime) => (
          <div key={anime.mal_id} className="col-lg-2 col-md-4 col-sm-12">
            <div className={`card ${styles.animeCard}`}>
              <img
                src={anime.images.jpg.image_url}
                className={`card-img-top ${styles.searchedImages}`}
                alt={anime.title}
              />
              <div className={styles.content}>
                <button>
                  <i class="fa-regular fa-heart"></i>
                </button>

                <button>
                  <i class="fa-regular fa-clock"></i>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">{anime.title}</h5>
                <Link to={`/anime/${anime.mal_id}`}>
                  <button
                    className={styles.knowMore}
                    onClick={() => {
                      console.log(anime.mal_id);
                      setAnimeId(anime.mal_id);
                    }}
                  >
                    Know More <i class="fa-solid fa-circle-info"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
