import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={style.notFoundBox}>
      <h1 className={style.notFound}>Page not found</h1>
    </div>
  );
};

export default NotFound;
