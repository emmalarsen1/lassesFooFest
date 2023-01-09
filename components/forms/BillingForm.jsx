import styles from "../../styles/Booking.module.css";
import { Input, Spacer } from "@nextui-org/react";
import { useRef } from "react";

function InfoForm(props) {
  const theForm = useRef();

  const validate = () => {
    props.validation(theForm.current.checkValidity());
  };

  const checkForError = (e) => {
    if (e.target.value.match(e.target.pattern) != e.target.value) {
      e.target.parentElement.setAttribute("id", "error");
    } else {
      e.target.parentElement.removeAttribute("id", "error");
    }
    if (e.target.name == "exp-date") {
      if (e.target.value.toString().length === 2) e.target.value = e.target.value + "/";
      else if (e.target.value.toString().length === 3 && e.target.value.toString().charAt(2) === "/") e.target.value = e.target.value.replace("/", "");
    }
  };

  return (
    <div className={styles.info_item}>
      <form ref={theForm} onChange={validate} className={styles.billing_wrapper}>
        <div className={styles.grid}>
          <Input name="firstname" label="Firtsname" placeholder="John" onChange={checkForError} pattern="[A-Za-zæøåÆØÅ]{2,}" required />
          <Input name="lastname" label="Lastname" placeholder="Doe" onChange={checkForError} pattern="[A-Za-zæøåÆØÅ]{2,}" required />
        </div>
        <div className={styles.grid}>
          <Input name="email" label="Email" placeholder="john@example.com" onChange={checkForError} pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
          <Input name="mobile" label="Mobile" placeholder="12345678" onChange={checkForError} pattern="[+0-9]{8,}" required inputmode="numerical" />
        </div>
        <Input name="address1" label="Address 1" placeholder="Street and number" onChange={checkForError} pattern="[A-Za-z0-9'\.\-\s\,]{2,}" required />
        <div className={styles.grid}>
          <Input name="address2" label="Address 2 (optional)" placeholder="Appartment, suite, etc." onChange={checkForError} pattern="[A-Za-z0-9'\.\-\s\,]{0,}" />
          <Input name="country" label="Country" placeholder="Country" onChange={checkForError} pattern="[A-Za-zæøåÆØÅ]{2,}" required />
        </div>
        <div className={styles.grid}>
          <Input name="city" label="City" placeholder="City name" onChange={checkForError} pattern="[A-Za-zæøåÆØÅ]{2,}" required />
          <Input name="zip" label="Zip code" placeholder="1234" onChange={checkForError} pattern="[+0-9]{4,}" required inputmode="numerical" />
        </div>
        <Spacer y={0} />
        <Input name="cardnumber" label="Credit card number" placeholder="1122 3344 5566 7788" onChange={checkForError} pattern="[0-9]{16}" required maxLength={16} inputmode="numerical" />
        <div className={styles.grid}>
          <Input name="exp-date" label="Expiration date" placeholder="MM/YY" onChange={checkForError} pattern="[0-1][0-9][/][0-9]{2}" required maxLength={5} inputmode="numerical" />
          <Input name="cvc" label="Security code" placeholder="CVC" onChange={checkForError} pattern="[0-9]{3}" required maxLength={3} inputmode="numerical" />
        </div>
      </form>
    </div>
  );
}

export default InfoForm;
