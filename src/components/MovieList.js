import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,searchTitle,searchRating}) => {
    console.log(movies)
  return (
    <div style={{display:"flex "}} >
       {movies
       .filter((movie)=>movie.name.toLowerCase().includes(searchTitle.toLowerCase().trim()) &&
       movie.rating >= searchRating)
       .map((movie)=>(
           <MovieCard  movie={movie} key={movie.id} />
       ))}
    </div>
  )
}

export default MovieList