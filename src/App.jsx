import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import PopularBar from "./Components/PopularBar";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import AnimeDetail from "./Components/AnimeDetail";

function App() {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [animeId, setAnimeId] = useState("20");
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Search
              query={query}
              setQuery={setQuery}
              setAnimeId={setAnimeId}
              anime={anime}
              setAnime={setAnime}
            />
          </Route>

          <Route path="/detail">
            <AnimeDetail animeId={animeId} anime={anime} setAnime={setAnime} />
          </Route>
        </Switch>

        <PopularBar />
      </div>
    </Router>
  );
}

export default App;
