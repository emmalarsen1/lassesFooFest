import styles from "../styles/Program.module.css";
import { Link } from "@nextui-org/react";

function program(props) {
  console.log(props.bandData);
  const topArtist = props.bandData.slice(0, 12);
  const mediumArtist = props.bandData.slice(12, 24);
  const smallArtist = props.bandData.slice(24, 60);
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>PROGRAM</h1>
        <h2 className={styles.h2underheader}>IN RANDOM ORDER</h2>
        <div className={styles.topArtist}>
          {topArtist.map((e, i) => {
            const link = e.name.toLowerCase().split(" ").join("_");
            return (
              <div className={styles.act} key={i}>
                <Link href={"/bands/" + link}>
                  <h2 className={styles.topArtisth2}>{e.name} </h2>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.mediumArtist}>
          {mediumArtist.map((e, i) => {
            const link = e.name.toLowerCase().split(" ").join("_");
            return (
              <div className={styles.act} key={i}>
                <Link href={"/bands/" + link}>
                  <h2 className={styles.mediumArtisth2}>{e.name}</h2>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.smallArtist}>
          {smallArtist.map((e, i) => {
            const link = e.name.toLowerCase().split(" ").join("_");
            return (
              <div className={styles.act} key={i}>
                <Link href={"/bands/" + link}>
                  <h2 className={styles.smallArtisth2}>{e.name}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default program;
