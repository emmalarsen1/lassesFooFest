import { Link } from "@nextui-org/react";
import styles from "../styles/Schedule.module.css";

function OneSchedule(props) {
  return (
    <div className={styles.new_oneScheduleActs}>
      {props.data?.map((e, i) => {
        const link = e.act.toLowerCase().split(" ").join("_");
        if (e.act != "break") {
          return (
            <div className={styles.new_act}>
              <Link href={"/bands/" + link}>
                <h2 className={styles.linkHere}>{e.act}</h2>
              </Link>
            </div>
          );
        } else {
          return (
            <div className={styles.new_break}>
              <div className={styles.new_break_line}></div>
              <h2 className={styles.breakTime}>Break</h2>
              <div className={styles.new_break_line}></div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default OneSchedule;
