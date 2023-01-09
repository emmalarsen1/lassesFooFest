import styles from "../../styles/Booking.module.css";
import React, { useRef } from "react";
import { Input } from "@nextui-org/react";

function InfoForm(props) {
  const refs = useRef([]);

  const validate = () => {
    let valid = 0;
    let amount = 0;
    refs.current.forEach((e) => {
      if (e) {
        amount++;
        valid += e.checkValidity();
      }
    });
    if (valid == amount) {
      props.validation(true);
    } else {
      props.validation(false);
    }
  };

  const checkForError = (e) => {
    if (e.target.value.match(e.target.pattern) != e.target.value) {
      e.target.parentElement.setAttribute("id", "error");
    } else {
      e.target.parentElement.removeAttribute("id", "error");
    }
  };

  return (
    <div className={styles.info_list}>
      {props.cart.map((item, index) => {
        if (item.amount > 0 && item.type == "ticket") {
          const fields = [];
          for (let i = 0; i < item.amount; i++) {
            fields.push(
              <form
                ref={(e) => {
                  refs.current[(i + 1) * (index + 1)] = e;
                }}
                id="info_form"
                data-type={item.value}
                className={styles.info}
                key={i}
                onChange={validate}
              >
                <b>Ticket {i + 1}</b>
                <Input width="100%" name="firstname" label="Firstname" placeholder="John" required pattern="[A-Za-zæøåÆØÅ]{2,}" key={1 * (i * 4 + 1)} onChange={checkForError}></Input>
                <Input width="100%" name="lastname" label="Lastname" placeholder="Doe" required pattern="[A-Za-zæøåÆØÅ]{2,}" key={2 * (i * 5 + 1)} onChange={checkForError}></Input>
                <Input width="100%" name="email" label="Email" placeholder="johndoe@example.com" required pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" key={3 * (i * 4 + 1)} onChange={checkForError}></Input>
                <Input width="100%" name="phone" label="Phone" placeholder="12345678" required pattern="[+0-9]{8,}" key={4 * (i * 4 + 1)} onChange={checkForError}></Input>
              </form>
            );
          }
          return (
            <div className={styles.info_item} key={index}>
              <h2 className={styles.info_type}>{item.value}</h2>
              {fields}
            </div>
          );
        }
      })}
    </div>
  );
}

export default InfoForm;
