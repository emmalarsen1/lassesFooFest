import TicketButton from "../TicketButton";
import { useRef, useState } from "react";
import styles from "../../styles/Booking.module.css";

function TicketForm(props) {
  const theForm = useRef(null);

  const addItem = (cartItem) => {
    let cartCopy = [...props.cart];
    const i = props.cart.findIndex((f) => f.id == cartItem.id);
    if (i > -1) {
      cartCopy[i].amount = cartItem.amount;
      props.setCart(cartCopy);
    } else {
      props.setCart((prevState) => prevState.concat(cartItem));
    }
  };

  const greenCamping = (e) => {
    const cartItem = {};
    cartItem.value = "green";
    cartItem.name = e.target.name;
    cartItem.id = e.target.id;
    cartItem.amount = 0 + e.target.checked;
    cartItem.price = 249;
    cartItem.type = "extra";

    addItem(cartItem);
  };

  return (
    <div className={styles.info_item}>
      <form ref={theForm}>
        <TicketButton value="regular" type="ticket" name="Regular Ticket" price="799" id={1} addItem={addItem} />
        <TicketButton value="vip" type="ticket" name="VIP Ticket" price="1299" id={2} addItem={addItem} />
        <TicketButton value="tent2" type="service" name="2 person tent (incl. the tent)" price="299" id={3} addItem={addItem} />
        <TicketButton value="tent3" type="service" name="3 person tent (incl. the tent)" price="399" id={4} addItem={addItem} />

        <label htmlFor="green">
          <div className={styles.ticket}>
            <div>
              <p>Green Camping</p>
              <i>249,-</i>
            </div>
            <label className={styles.container}>
              <input type="checkbox" className={styles.checkbox} name="Green Camping" id={5} onChange={greenCamping} />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        </label>
      </form>
    </div>
  );
}

export default TicketForm;
