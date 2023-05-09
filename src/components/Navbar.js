import { Link } from 'react-router-dom';
import styles from './styles/navbar.module.css';

const Navebar = () => (
  <div>
    <h1 className={styles.header}>Math magicians</h1>
    <nav className={styles.navbar}>
      <Link className={styles.home} to="/">Home</Link>
      <Link className={styles.quotes} to="/Quotes">Quotes</Link>
      <Link className={styles.calculator} to="/Calculator">Calculator</Link>
    </nav>
  </div>
);

export default Navebar;
