import { useEffect, useState } from 'react';
import creditsFetch from '../api/creditsFetch';
import style from './Credits.module.css';
import defaultImg from './default.jpg';
import propTypes from 'prop-types';

const Credits = ({ id }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    creditsFetch(id)
      .then(response => setCast(response.cast))
      .catch(err => console.error(err));
  });
  return (
    <ul className={style.list}>
      {cast?.map(el => (
        <li key={el.id} className={style.item}>
          <img
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w400/${el?.profile_path}`
                : defaultImg
            }
            alt={el.original_name}
            width="350"
            height="500"
            className={style.img}
          />
          <h2 className={style.title}> {el.original_name}</h2>
          <p className={style.character}>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  );
};

Credits.propTypes = {
  id: propTypes.string,
};

export default Credits;
