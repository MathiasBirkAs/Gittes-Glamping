import { Link, useLocation } from "react-router-dom";
import styles from "./nav.module.css";

export default function Nav({ isOpen, setIsOpen }) {
  const location = useLocation();
  const currentPath = location.pathname;

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
<<<<<<< HEAD
            {[
              "/ophold",
              "/activitypage",
              "/kontakt",
              "/minliste",
              "/admin",
            ].includes(currentPath) && (
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
            )}

            {currentPath !== "/ophold" && (
              <li>
                <Link to="/ophold" onClick={() => setIsOpen(false)}>
                  Ophold
                </Link>
              </li>
            )}

            {currentPath !== "/activitypage" && (
              <li>
                <Link to="/activitypage" onClick={() => setIsOpen(false)}>
                  Aktiviteter
                </Link>
              </li>
            )}

            {currentPath !== "/kontakt" && (
              <li>
                <Link to="/kontakt" onClick={() => setIsOpen(false)}>
                  Kontakt
                </Link>
              </li>
            )}

            {currentPath !== "/minliste" && (
              <li>
                <Link to="/MinListe" onClick={() => setIsOpen(false)}>
                  Min liste
                </Link>
              </li>
            )}

            {currentPath !== "/admin" && (
              <li>
                <Link to="/admin" onClick={() => setIsOpen(false)}>
                  Backoffice
                </Link>
              </li>
            )}
=======
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/ophold" onClick={() => setIsOpen(false)}>Ophold</Link></li>
            <li><Link to="/kontakt" onClick={() => setIsOpen(false)}>Kontakt</Link></li>
            <li><Link to="/aktiviteter" onClick={() => setIsOpen(false)}>Aktiviteter</Link></li>
            <li><Link to="/min-liste" onClick={() => setIsOpen(false)}>Min liste</Link></li>
            <li><Link to="/backoffice" onClick={() => setIsOpen(false)}>Backoffice</Link></li>
>>>>>>> 4ec821c9554b10aee8bdf9abde2e09f0bf7f113e
          </ul>
        </nav>
      )}
    </>
  );
}
