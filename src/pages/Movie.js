import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";


function Movie() {
  const [movie, setMovies] = useState([])
  const params = useParams()
  const userID = params.id

  console.log(userID)  
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${userID}`)
    .then((r) => r.json())
    .then((movieInfo) => setMovies(movieInfo) )
  },[userID])

  const genre = movie.genres.map((genres) => <li>{genres}</li>)
  

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <span>{genre}</span>
      </main>
    </>
  );
};

export default Movie;
