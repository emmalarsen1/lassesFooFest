import { useEffect, useState } from "react";
import { Collapse } from "@nextui-org/react";
import styles from "../styles/Booking.module.css";
import InfoForm from "./forms/InfoForm";
import SpotForm from "./forms/SpotForm";
import TicketForm from "./forms/TicketForm";
import BillingForm from "./forms/BillingForm";

function BookingForm(props) {
  const fee = [{ name: "Fixed booking fee", price: "99", id: 0, type: "fee", amount: 1 }];
  const [area, setArea] = useState();
  const [res, setRes] = useState();
  const [cart, setCart] = useState(fee);
  const [info, setInfo] = useState([]);
  const [val, setVal] = useState(0);
  const [display, setDisplay] = useState(1);
  const [spotData, setData] = useState();
  useEffect(() => {
    fetch("https://greenmark.fly.dev/available-spots/").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, [val]);

  const reset = () => {
    setInfo([]);
    setRes(null);
    setArea(null);
    setCart(fee);
    setVal(0);
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  };

  const getInfo = () => {
    document.querySelectorAll("#info_form[data-type='regular']").forEach((e) => {
      const person = {};
      person.firstname = e.firstname.value;
      person.lastname = e.lastname.value;
      person.email = e.email.value;
      person.phone = e.phone.value;
      person.type = "regular";
      setInfo((info) => info.concat(person));
    });
    document.querySelectorAll("#info_form[data-type='vip']").forEach((e) => {
      const person = {};
      person.firstname = e.firstname.value;
      person.lastname = e.lastname.value;
      person.email = e.email.value;
      person.phone = e.phone.value;
      person.type = "vip";
      setInfo((info) => info.concat(person));
    });
  };

  const reserveSpot = async (e) => {
    let regular = cart.find((i) => i.value == "regular")?.amount;
    regular = regular === undefined ? 0 : regular;
    let vip = cart.find((i) => i.value == "vip")?.amount;
    vip = vip === undefined ? 0 : vip;
    let tent2 = cart.find((i) => i.value == "tent2")?.amount;
    tent2 = tent2 === undefined ? 0 : tent2;
    let tent3 = cart.find((i) => i.value == "tent3")?.amount;
    tent3 = tent3 === undefined ? 0 : tent3;

    if (regular + vip >= tent2 + tent3) {
      if (cart.findIndex((e) => e.type == "ticket" && e.amount > 0) > -1 && val == 1) {
        const options = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ area: area, amount: 1 }),
        };

        fetch("https://greenmark.fly.dev/reserve-spot", options)
          .then((response) => response.json())
          .then((response) => setRes(response))
          .catch((err) => console.error(err));

        getInfo();
      }
    } else {
      alert("The number of tents must match the number of tickets");
    }
  };

  const completeOrder = () => {
    if (val == 2) {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: res.id }),
      };

      fetch("https://greenmark.fly.dev/fullfill-reservation", options)
        .then((response) => response.json())
        .then((response) => sendData(response))
        .catch((err) => console.error(err));

      const sendData = (response) => {
        info.forEach((order) => {
          if (response.message == "Reservation completed") {
            const options = {
              method: "POST",
              headers: {
                apikey:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcmRva2RjeWVpeGptaGhteGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxNzE5OTYsImV4cCI6MTk4NTc0Nzk5Nn0.uig3ma3vMK5hoixd-GrRayxapGxXaEFO1UBYDS_RZdw",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcmRva2RjeWVpeGptaGhteGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxNzE5OTYsImV4cCI6MTk4NTc0Nzk5Nn0.uig3ma3vMK5hoixd-GrRayxapGxXaEFO1UBYDS_RZdw",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                order_id: res.id,
                spot: area,
                ticket: order.type,
                info: order,
                green: cart.find((e) => e.value == "green")?.amount > 0,
                tent2: cart.find((e) => e.value == "tent2")?.amount,
                tent3: cart.find((e) => e.value == "tent3")?.amount,
              }),
            };

            fetch("https://iardokdcyeixjmhhmxeu.supabase.co/rest/v1/booking", options)
              .then((response) => response.json())
              .then((response) => console.log(response))
              .catch((err) => console.error(err));
          } else {
            reset();
          }
        });
      };
      setVal(3);
    }
  };

  return (
    <>
      {!res && (
        <Collapse.Group className={styles.collapse + " collapsegroup"}>
          <Collapse title="Spot" subtitle="Select a camping spot" expanded={props.data?.length > 0}>
            <SpotForm data={spotData} selection={(area) => setArea(area)} />
          </Collapse>
          <Collapse disabled={!area} title="Tickets" subtitle="Choose your tickets">
            <TicketForm cart={cart} setCart={setCart} />
          </Collapse>
          <Collapse
            disabled={cart.findIndex((e) => e.type == "ticket" && e.amount > 0) < 0}
            title="Ticket info"
            subtitle="Info for each ticket"
          >
            <InfoForm cart={cart} validation={(val) => setVal(0 + val)} />
          </Collapse>
        </Collapse.Group>
      )}
      {res && val < 3 && !res?.error && (
        <Collapse.Group className={styles.collapse + " collapsegroup"}>
          <Collapse title="Billing" subtitle="Address and payment info" expanded>
            <BillingForm validation={(val) => setVal(1 + val)} />
          </Collapse>
        </Collapse.Group>
      )}
      {val == 3 && (
        <Collapse.Group className={styles.collapse + " collapsegroup"}>
          <Collapse
            title="Your order is complete!"
            subtitle="Thank you for your purchase"
            expanded
          ></Collapse>
        </Collapse.Group>
      )}
      {res?.error && (
        <Collapse.Group className={styles.collapse + " collapsegroup"}>
          <Collapse title="Too many requests!" subtitle="Please Reload"></Collapse>
        </Collapse.Group>
      )}
      <div
        className={styles.cart + " " + (display == 1 && styles.close)}
        onClick={() => setDisplay((p) => p * -1)}
      >
        <h2 className={styles.total}>Total: {getTotal()},-</h2>
        <ul>
          {cart.map((item, i) => {
            if (item.amount > 0) {
              return (
                <li key={i}>
                  {item.name} {item.amount}x {item.price},-
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className={styles.buttons}>
        {res && (
          <button className={styles.back} onClick={reset}>
            back
          </button>
        )}
        {!res && (
          <button className={styles.continue} onClick={reserveSpot} disabled={val != 1}>
            Continue to payment
          </button>
        )}
        {res && val < 3 && (
          <button className={styles.continue} onClick={completeOrder} disabled={val != 2}>
            Complete order
          </button>
        )}
      </div>
    </>
  );
}

export default BookingForm;
