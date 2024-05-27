import React from "react";
import styles from "../Css/AnimeList.module.css";

export default function AnimeList({anime}) {


  return (
    <div className={styles.animeListContainer}>
      <div className="row">
        {anime.map((anime) => (
          <div key={anime.id} className="col-md-3">
            <div className={`card ${styles.animeCard}`}>
              <img src={anime.images.jpg.image_url} className={`card-img-top ${styles.searchedImages}`} alt={anime.title} />
              <div className="card-body">
                <h5 className="card-title">{anime.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
