import { useState } from 'react';
import { moviesData } from './Data';
import {Routes ,Route} from "react-router-dom"
import './App.css';
import MovieList from './components/MovieList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';
import Trailer from './components/Trailer';

function App() {
  const [movies,setMovies] = useState(moviesData);
  const [searchTitle,setSearchTitle] = useState("");
  const [searchRating,setSearchRating] = useState(0)

  const handleMovie = (newMovie)=>{
    setMovies([...movies,newMovie])
  }


  return (
   <div>
     <Search setSearchTitle={setSearchTitle} setSearchRating={setSearchRating}  />
     <AddMovie handleMovie={handleMovie} />
     <Routes>
       <Route path="/" element={ <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} />}/>
      <Route path='/trailer/:id' element={<Trailer movies={movies} />}/>
       
       </Routes>
   </div>
  );
}

export default App;
