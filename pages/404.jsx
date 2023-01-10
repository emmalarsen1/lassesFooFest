import { useRouter } from "next/router";
import styles from "../styles/FourOhFour.module.css";

export default function FourOhFour() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h2>404 - Page Not Found</h2>
        <h3 className={styles.h3}>
          Whoops! It looks like you've stumbled upon a broken link. But don't worry, even though this page isn't available, there are still plenty of other things to discover and enjoy on our website.
        </h3>
        <h3 className={styles.h3}>
          Every little action we take can have a positive impact on the environment, so let's do our part to make this world a better place for everyone. Thanks for joining us on this journey towards
          sustainability!
        </h3>
        <a className={styles.back} onClick={() => router.back()}>
          Go back ↩
        </a>
      </div>
    </div>
  );
}
