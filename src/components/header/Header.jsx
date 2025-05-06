import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <img
        src="/images/logo.png"
        alt="Gittes Glamping logo"
        className={styles.logo}
      />

      {/* Headline */}
      <h1 className={styles.title}>Gittes Glamping</h1>
      <p className={styles.subtitle}>Vi er stolte af at byde dig velkommen</p>

      {/* Button */}
      <button className={styles.button}>BOOK NU</button>
    </header>
  );
}
