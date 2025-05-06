import styles from "./header.module.css";
import logo from "../../assets/logo.png";

export default function Header({ page }) {
  if (page === "home") {
    return (
      <header className={styles.Home}>
        <div className={styles.overlay}></div>

        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.gittes}>Gittes</h1>
        <h2 className={styles.glamping}>Glamping</h2>
        <button className={styles.button}>BOOK NU</button>
      </header>
    );
  }

  if (page === "ophold") {
    return (
      <header className={styles.ophold}>
        <div className={styles.Opholdoverlay}></div>

        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.gittes}>Vores Ophold</h1>
        
      </header>
    );
  }

  if (page === "kontakt") {
    return (
      <header className={styles.kontakt}>
        <h1>Kontakt header</h1>
      </header>
    );
  }

  if (page === "aktiviteter") {
    return (
      <header className={styles.aktiviteter}>
        <h1>Aktiviteter header</h1>
      </header>
    );
  }

  if (page === "min-liste") {
    return (
      <header className={styles.minliste}>
        <h1>Min liste header</h1>
      </header>
    );
  }

  return null;
}
