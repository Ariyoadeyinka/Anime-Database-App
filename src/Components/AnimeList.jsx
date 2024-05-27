import React from "react";
import styles from "../Css/AnimeList.module.css";

export default function AnimeList(props) {
    const{id, image} =props
  return (
    <div className={styles.animeListContainer}>
    <img src={image} alt="" />
    </div>
  );
}
