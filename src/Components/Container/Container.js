import style from './Container.module.css';
import propTypes from 'prop-types';

const Container = ({ children }) => <div className={style.box}>{children}</div>;

Container.propTypes = {
  children: propTypes.node.isRequired,
};

export default Container;
