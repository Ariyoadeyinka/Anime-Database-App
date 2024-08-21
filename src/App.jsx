import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import PopularBar from "./Components/PopularBar";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import AnimeDetail from "./Components/AnimeDetail";
import Login from "./Components/Login";

function App() {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [animeId, setAnimeId] = useState("");

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

          <Route path="/anime/:id">
            <AnimeDetail animeId={animeId} anime={anime} setAnime={setAnime} />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>

        <PopularBar />
      </div>
    </Router>
  );
}

export default App;
