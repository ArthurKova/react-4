import propTypes, { number } from 'prop-types';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmEyNzQyYzZiYTk5ZTVkMTEwMmE3YjQ3YTA0YTVmYyIsInN1YiI6IjY0ZGRkYTQ0NWFiODFhMDBmZmMxMGM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tk7cbobDh3q7X1pGQiypiDwD_ww2nhv7cXS8WMzubrQ',
  },
};

const moviePageFetch = (userQuery, moviePage) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${userQuery}&include_adult=false&language=en-US&page=${moviePage}`,
    options,
  ).then(response => response.json());
};

moviePageFetch.propTypes = {
  userQuery: propTypes.oneOfType([propTypes.string, propTypes.number]),
  moviePage: number,
};

export default moviePageFetch;
