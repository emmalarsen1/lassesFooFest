import styles from "../styles/Footer.module.css";
import Anchor from "./Anchor";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <Newsletter />
        <div className={styles.quicklinks}>
          <h2>QUICK LINKS</h2>
          <ul className={styles.footer_links}>
            <li>
              <Anchor href="/tickets">Tickets</Anchor>
            </li>
            <li>
              <Anchor href="/schedule">Schedule</Anchor>
            </li>
            <li>
              <Anchor href="/about/">About Us</Anchor>
            </li>
            <li>
              <Anchor href="/contact/">Contact Us</Anchor>
            </li>

            <li>
              <Anchor href="/faq">FAQ</Anchor>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
