import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard"



function Home() {
  const [movieList, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((r) => r.json())
    .then((movies) => setMovies(movies) )
  },[])


 
  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList.map((movie) => 
        <div key={movie.id}>
          <MovieCard title={movie.title} id={movie.id} />
        </div>
        )}
      </main>
    </>
  );
};

export default Home;
