import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moviePageFetch from 'Components/api/moviePageFetch';
import style from './MovieList.module.css';
import defaultPic from './default.jpg';
import LoadMoreBtn from 'Components/LoadMoreBtn/';
import propTypes from 'prop-types';

const MovieList = ({ userQuery }) => {
  const [movieList, setMovieList] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setMovieList([]);
  }, [userQuery]);

  useEffect(() => {
    if (userQuery === '') {
      return;
    }
    moviePageFetch(userQuery, moviePage)
      .then(response =>
        setMovieList(prevState => {
          return movieList === null
            ? response.results
            : [...prevState, ...response.results];
        }),
      )
      .catch(err => console.error(err));
  }, [userQuery, moviePage]);

  const onLoadMoreBtnClick = () => setMoviePage(prevState => prevState + 1);

  return (
    <>
      <ul className={style.movieList}>
        {movieList?.map(movie => {
          return (
            <li key={movie.id} className={style.movieItem}>
              <Link to={`/movie/${movie.id}`} state={location}>
                {movie.poster_path ? (
                  <img
                    className={style.moviePic}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    width="220"
                    height="330"
                  />
                ) : (
                  <img
                    src={defaultPic}
                    alt="default"
                    className={style.moviePic}
                    width="220"
                    height="330"
                  />
                )}

                <h1 className={style.movieTitle}>{movie.original_title}</h1>
                {movie.release_date && (
                  <p className={style.movieDate}>
                    release date: {movie.release_date}
                  </p>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      {movieList.length > 0 ? (
        <LoadMoreBtn loadMore={onLoadMoreBtnClick} />
      ) : null}
    </>
  );
};

MovieList.propTypes = {
  userQuery: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default MovieList;
