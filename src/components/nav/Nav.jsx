import { Link } from "react-router-dom";
import styles from "./nav.module.css";

export default function Nav({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={`${styles.burger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div />
        <div />
        <div />
      </div>

      {isOpen && (
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/ophold" onClick={() => setIsOpen(false)}>Ophold</Link></li>
            <li><Link to="/kontakt" onClick={() => setIsOpen(false)}>Kontakt</Link></li>
            <li><Link to="/aktiviteter" onClick={() => setIsOpen(false)}>Aktiviteter</Link></li>
            <li><Link to="/min-liste" onClick={() => setIsOpen(false)}>Min liste</Link></li>
            <li><Link to="/admin" onClick={() => setIsOpen(false)}>Backoffice</Link></li>
            <li><Link to="/weekendtur" onClick={() => setIsOpen(false)}>Weekendtur</Link></li>
          </ul>
        </nav>
      )}
    </>
  );
}

