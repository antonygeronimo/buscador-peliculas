import React from 'react';

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => onToggleFavorite(movie)}>
        {isFavorite ? "❌ Quitar de favoritos" : "⭐ Agregar a favoritos"}
      </button>
    </div>
  );
}

export default MovieCard;
