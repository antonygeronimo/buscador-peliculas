import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import './App.css';  // ✅ Importa el CSS


const API_KEY = "dd2494bd";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchMovies = async () => {
    if (search.trim() === "") return;
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
    if (response.data.Search) {
      setMovies(response.data.Search);
    } else {
      setMovies([]);
    }
  };

  const toggleFavorite = (movie) => {
    const exists = favorites.find(fav => fav.imdbID === movie.imdbID);
    let updatedFavorites;
    if (exists) {
      updatedFavorites = favorites.filter(fav => fav.imdbID !== movie.imdbID);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="App">
      <h1>Buscador de Películas 🎬</h1>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={fetchMovies}>Buscar</button>

      <h2>Resultados</h2>
      <MovieList movies={movies} favorites={favorites} onToggleFavorite={toggleFavorite} />

      <h2>Favoritos</h2>
      <MovieList movies={favorites} favorites={favorites} onToggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;
