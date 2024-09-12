import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import PopularBar from "./Components/PopularBar";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import AnimeDetail from "./Components/AnimeDetail";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [animeId, setAnimeId] = useState("");

  return (
    <Router>
      <div>
        <Navbar />
        <AuthProvider>
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

          <Route path="/signup">
          <SignUp/>
          </Route>
        </Switch>
        </AuthProvider>
        <PopularBar />
      </div>
    </Router>
  );
}

export default App;
