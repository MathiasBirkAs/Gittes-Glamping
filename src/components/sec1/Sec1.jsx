import styles from "./Sec1.module.css";
import pfp from "../../assets/gitte.jpg";


export default function Sec1() {
  return (
    <section className={styles.sec1}>
      <div className={styles.sec1__container}>
        <div className={styles.sec1__text}>
          <h2 className={styles.h1}>Kom og prøv glamping hos Gitte!</h2>
          <p className={styles.p}>
          Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter.
          </p>
        </div>

          <img className={styles.pfp} src={pfp} alt="Gittes Glamping" />
        
        <button className={styles.btn}>SE VORES OPHOLD</button>
      </div>
    </section>
  );
}