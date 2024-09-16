import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated Switch to Routes
import { useState } from "react";
import PopularBar from "./Components/PopularBar";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import AnimeDetail from "./Components/AnimeDetail";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import PrivateRoute from "./Components/PrivateRoute"; // Ensure this is also updated to work with v6
import { AuthProvider } from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [animeId, setAnimeId] = useState("");

  return (
    <Router>
      <div>
        <AuthProvider>
          <Routes> 
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Navbar />
                  <Search
                    query={query}
                    setQuery={setQuery}
                    setAnimeId={setAnimeId}
                    anime={anime}
                    setAnime={setAnime}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path="/anime/:id"
              element={
                <PrivateRoute>
                  <Navbar />
                  <AnimeDetail animeId={animeId} anime={anime} setAnime={setAnime} />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
        <PopularBar />
      </div>
    </Router>
  );
}

export default App;
