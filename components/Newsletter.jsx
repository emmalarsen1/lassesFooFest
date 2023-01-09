import styles from "../styles/Newsletter.module.css";
import { Radio, Input, useInput, Button, css, Spacer } from "@nextui-org/react";
import React from "react";

function Newsletter() {
  return (
    <div className={styles.main}>
      <h2>NEWSLETTER</h2>
      <form className={styles.form}>
        <div className={styles.email}>
          <input type="text" placeholder="Email" name="email" />
          <input type="submit" value="SEND" />
        </div>
        <div className={styles.radiolist}>
          <label>
            <input type="radio" name="radio" defaultChecked />
            Just the essential stuff, please
          </label>
          <label>
            <input type="radio" name="radio" />
            I’m interested in environmental stuff
          </label>
          <label>
            <input type="radio" name="radio" />
            Gimme everything! I want to know it all
          </label>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
