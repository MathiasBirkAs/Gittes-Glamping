import styles from "./Header.module.css";
import logo from "../../assets/logo.png";


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay} />

      <img src={logo} alt="Logo" className={styles.logo} />

      <h1 className={styles.gittes}>Gittes</h1>
      <h2 className={styles.glamping}>Glamping</h2>

      <button className={styles.button}>BOOK NU</button>
    </header>
  );
}
