import style from './MovieDetailCard.module.css';
import propTypes from 'prop-types';

const MovieDetailCard = ({ movie }) => {
  return (
    <div className={style.box}>
      <img
        className={style.img}
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie?.title}
        width="500"
        height="750"
      />
      <div>
        <h1 className={style.title}>{movie?.title}</h1>
        <p className={style.date}>Release date: {movie?.release_date}</p>
        <h2 className={style.tag}>{movie?.tagline}</h2>
        <p className={style.overview}>{movie?.overview}</p>
        <p className={style.text}>Rating: {movie?.vote_average}</p>
        <div className={style.genres_box}>
          <p className={style.genres_text}>Genres:</p>
          <ul className={style.genres}>
            {movie?.genres?.map(genre => (
              <li key={genre.id} className={style.item}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

MovieDetailCard.propTypes = {
  movie: propTypes.object,
};

export default MovieDetailCard;
