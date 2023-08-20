import style from './LoadMoreBtn.module.css';
import propTypes from 'prop-types';

const LoadMoreBtn = ({ loadMore }) => {
  const onBtnClick = () => loadMore(true);

  return (
    <div className={style.btnBox}>
      <button type="button" onClick={onBtnClick} className={style.btnStyle}>
        Load more
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  loadMore: propTypes.func,
};

export default LoadMoreBtn;
