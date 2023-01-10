import TicketButton from "../TicketButton";
import { useRef } from "react";
import styles from "../../styles/Booking.module.css";
import { Tooltip } from "@nextui-org/react";

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
        <Tooltip
          hideArrow
          leaveDelay="150"
          className={styles.tooltip}
          portalClassName={styles.thetip}
          content={
            "This option grants you access to the festival for the entire duration. The regular ticket costs 799,- and gives you access to all the music, art, and entertainment at the festival."
          }
          placement="left"
        >
          <TicketButton value="regular" type="ticket" name="Regular Ticket" price="799" id={1} addItem={addItem} />
        </Tooltip>
        <Tooltip
          hideArrow
          leaveDelay="150"
          className={styles.tooltip}
          portalClassName={styles.thetip}
          content={
            "For an upgraded experience, you can purchase a VIP ticket for 1299,-. This ticket includes exclusive access to VIP areas and amenities, such as reserved seating at the main stage, access to VIP-only bars and restrooms, and other perks."
          }
          placement="left"
        >
          <TicketButton value="vip" type="ticket" name="VIP Ticket" price="1299" id={2} addItem={addItem} />
        </Tooltip>
        <Tooltip
          hideArrow
          leaveDelay="150"
          className={styles.tooltip}
          portalClassName={styles.thetip}
          content={
            "If you prefer not to bring your own tent, you can pay for one of our crew-set up tents. These come in 2-person or 3-person sizes, and include the tent, bedding, and setup. The 2-person tent costs 299,-. This option is perfect for those who want a hassle-free camping experience."
          }
          placement="left"
        >
          <TicketButton value="tent2" type="service" name="2 person tent (incl. the tent)" price="299" id={3} addItem={addItem} />
        </Tooltip>
        <Tooltip
          hideArrow
          leaveDelay="150"
          className={styles.tooltip}
          portalClassName={styles.thetip}
          content={
            "If you prefer not to bring your own tent, you can pay for one of our crew-set up tents. These come in 2-person or 3-person sizes, and include the tent, bedding, and setup. The 3-person tent costs 399,-. This option is perfect for those who want a hassle-free camping experience."
          }
          placement="left"
        >
          <TicketButton value="tent3" type="service" name="3 person tent (incl. the tent)" price="399" id={4} addItem={addItem} />
        </Tooltip>
        <Tooltip
          hideArrow
          leaveDelay="150"
          className={styles.tooltip}
          portalClassName={styles.thetip}
          content={
            "For an additional 249,-, you can opt for the Green camping option. This means that your tent will be placed in a special area of the campsite where the environmental impact is minimized. You'll also receive a special wristband that gives you access to exclusive green camping amenities and activities.  "
          }
          placement="left"
        >
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
        </Tooltip>
      </form>
    </div>
  );
}

export default TicketForm;
