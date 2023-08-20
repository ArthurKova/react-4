import propTypes from 'prop-types';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmEyNzQyYzZiYTk5ZTVkMTEwMmE3YjQ3YTA0YTVmYyIsInN1YiI6IjY0ZGRkYTQ0NWFiODFhMDBmZmMxMGM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tk7cbobDh3q7X1pGQiypiDwD_ww2nhv7cXS8WMzubrQ',
  },
};

const reviewsFetch = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options,
  ).then(response => response.json());
};

reviewsFetch.propTypes = {
  id: propTypes.number,
};

export default reviewsFetch;
