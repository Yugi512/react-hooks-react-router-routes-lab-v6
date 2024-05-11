import {Link} from 'react-router-dom';

function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movies/${id}`}>movie link</Link>
    </article>
  );
};

export default MovieCard;