import { useState } from "react";
import styles from "./Kontakt.module.css";

export default function Kontakt() {
  const [form, setForm] = useState({
    navn: "",
    email: "",
    emne: "",
    besked: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.navn || !form.email || !form.emne || !form.besked) {
      setError("Alle felter skal udfyldes.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Indtast en gyldig email.");
      return;
    }
    setError("");
    // Du kan sende data her – fx til backend eller noget andet.
    console.log("Form submitted ✅", form);
    alert("Tak for din besked!");

    setForm({ navn: "", email: "", emne: "", besked: "" });
  };

  return (
    <section className={styles.kontakt}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Vil du booke et ophold? <br />
          Eller har du blot et spørgsmål?
        </h2>
        <p className={styles.description}>
          Så tøv ikke med at tage kontakt til os herunder. <br />
          Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op
          til ferier kan der være travlt, og svartiden kan derfor være op til 48
          timer.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="navn"
            placeholder="Navn"
            value={form.navn}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="emne"
            placeholder="Hvad drejer henvendelsen sig om?"
            value={form.emne}
            onChange={handleChange}
          />
          <textarea
            name="besked"
            placeholder="Besked (Skriv dato’er, hvis det drejer sig om en booking)"
            value={form.besked}
            onChange={handleChange}
          ></textarea>

          {error && <p style={{ color: "#ffb3b3" }}>{error}</p>}

          <button className={styles.btn} type="submit">
            Indsend
          </button>
        </form>
      </div>
    </section>
  );
}
