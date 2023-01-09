import styles from "../styles/Home.module.css";
import Anchor from "../components/Anchor";

export default function Home({ setState }) {
  return (
    <>
      <div className={styles.splashGroup}>
        <div className={styles.splash_titles}>
          <h1 className={styles.splash_h1}>EUROPE’S GREENEST FESTIVAL</h1>
          <h2 className={styles.splash_h2}>Sustainable sounds for a brighter future.</h2>
          <h2 className={styles.splash_h2}>Music, nature, and community, all in one.</h2>
          <h2 className={styles.splash_h2}>Be part of a thrilling, environmentally-friendly 7-day party</h2>
        </div>
        <div className={styles.splash_calltoaction}>
          <a className={styles.calltoaction} onClick={() => setState("open")}>
            BUY TICKETS
          </a>
          <Anchor className={styles.calltoaction} href="/schedule">
            SCHEDULE
          </Anchor>
        </div>
      </div>
    </>
  );
}
