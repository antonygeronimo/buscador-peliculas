import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, favorites, onToggleFavorite }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={favorites.some(fav => fav.imdbID === movie.imdbID)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default MovieList;
