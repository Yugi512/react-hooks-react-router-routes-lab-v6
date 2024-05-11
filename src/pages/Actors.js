import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((r) => r.json())
    .then((actor) => setActors(actor))
    .catch((error) => console.log(error)) 
  },[])


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => 
          <div key={actor.name}>
            <article >
              <h2>{actor.name}</h2>
              {actor.movies.map((movie) =>
              <li>{movie}</li>)}
            </article>
          </div>
        )}
      </main>
    </>
  );
};

export default Actors;
