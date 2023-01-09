import styles from "../styles/Booking.module.css";
import { useState } from "react";

function TicketButton(props) {
  const [value, setValue] = useState(0);
  const cartItem = {};

  const addToCart = (e) => {
    let modifier = 1;
    if (value > 0 && e.target.innerHTML == "-") {
      modifier = -1;
    }
    if (value < 20 && e.target.innerHTML == "+") {
      modifier = 1;
    }
    if (value == 0 && e.target.innerHTML == "-") {
      modifier = 0;
    }
    if (value == 20 && e.target.innerHTML == "+") {
      modifier = 0;
    }

    cartItem.value = props.value;
    cartItem.name = props.name;
    cartItem.price = props.price;
    cartItem.id = props.id;
    cartItem.type = props.type;
    cartItem.amount = value + modifier;
    props.addItem(cartItem);
    setValue((old) => old + modifier);
  };

  return (
    <div className={styles.ticket}>
      <div>
        <p>{props.name}</p>
        <i>{props.price},-</i>
      </div>
      <div className={styles.button_wrapper}>
        <button type="button" onClick={addToCart}>
          -
        </button>
        <input type="text" name={props.value} className={styles.ticket_amount} value={value} disabled />
        <button type="button" onClick={addToCart}>
          +
        </button>
      </div>
    </div>
  );
}

export default TicketButton;
