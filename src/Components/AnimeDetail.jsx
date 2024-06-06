import { useEffect, useState } from "react";
export default function AnimeDetail({animeId}){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function fetchAnime() {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`);
        const data = await res.json();
        console.log(data);
        setAnime(data);
        setIsLoading(false);
      }
      fetchAnime();
    }, [animeId]);
    return <div>
        
    </div>
}