import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.navBar}>
      <SearchBar onSearch={onSearch} />
      <NavLink to="/about" className={styles.about}>
        <button>About</button>
      </NavLink>

      <NavLink to="/home" className={styles.home}>
        <button>Home</button>
      </NavLink>

      <NavLink to="/favorites">
      <button>Favorites</button>
      </NavLink>

      <NavLink to="/" className={styles.logOut}>
      <button>LogOut</button>
      </NavLink>

      
    </div>
  );
};

export default Nav;
