import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { useState } from "react";
import PopularBar from "./Components/PopularBar";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import AnimeDetail from "./Components/AnimeDetail";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import UpdateProfile from "./Components/UpdateProfile";
import ForgotPassword from "./Components/ForgotPassword";
import PrivateRoute from "./Components/PrivateRoute"; 
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
              path="/anime/:animeId"
              element={
                <PrivateRoute>
                  <Navbar />
                  <AnimeDetail animeId={animeId} anime={anime} setAnime={setAnime} />
                </PrivateRoute>
              }
            />
              <Route
              path="/update-profile"
              element={
                <PrivateRoute>
                  <Navbar />
                  <UpdateProfile/>
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
          </Routes>
        </AuthProvider>
        <PopularBar />
      </div>
    </Router>
  );
}

export default App;
