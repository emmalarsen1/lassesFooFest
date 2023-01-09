import styles from "../styles/Contact.module.css";

function contact() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>CONTACT</h1>
        <div className={styles.contactForm}>
          <form className={styles.form}>
            <label className={styles.label} for="fname">
              Full Name
            </label>
            <input type="text" placeholder="e.g John Doe" name="name" />
            <label className={styles.label} for="fname">
              Email
            </label>
            <input className={styles.email} type="text" placeholder="e.g johndoe@mail.com" name="email" />

            <label className={styles.label} for="country">
              Reason for contact
            </label>
            <select id="country" className={styles.select} name="country">
              <option value="general"> General enquiries</option>
              <option value="tickets"> Ticket enquiries</option>
              <option value="volunteer">Volunteer enquiries</option>
              <option value="press"> Press enquiries</option>
            </select>

            <label className={styles.label} for="subject">
              Subject
            </label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

            <input onClick={(e) => e.preventDefault()} type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
