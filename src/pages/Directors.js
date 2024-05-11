import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directorsList, setDirectors] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then((r) => r.json())
    .then((dir) => setDirectors(dir) )
  },[])


  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
      <h1 >Directors Page</h1>
        {directorsList.map((director) => 
        <div key={director.id}>
          <h2>{director.name}</h2>
          {director.movies.map((movie) => 
            <li>{movie}</li>
          )}
        </div>
      )}
      </main>
    </>
  );
};

export default Directors;
