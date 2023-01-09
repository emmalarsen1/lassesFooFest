import React from "react";
import styles from "../styles/Tickets.module.css";
import { Collapse } from "@nextui-org/react";

function tickets({ setState }) {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>TICKETS</h1>
      <a className={styles.calltoaction} onClick={() => setState("open")}>
        BUY TICKETS HERE
      </a>
      <div className={styles.wrapper}>
        <div className={styles.ticketOptions}>
          <h2 className={styles.h2}>Ticket options:</h2>
          <Collapse.Group bordered className={styles.collapseGroup + " collapsegroup"}>
            <Collapse expanded title="Regular ticket">
              <div className={styles.info}>
                <p>This option grants you access to the festival for the entire duration. The regular ticket costs 799,- and gives you access to all the music, art, and entertainment at the festival.</p>
              </div>
            </Collapse>
            <Collapse title="VIP ticket">
              <div className={styles.info}>
                <p>
                  For an upgraded experience, you can purchase a VIP ticket for 1299,-. This ticket includes exclusive access to VIP areas and amenities, such as reserved seating at the main stage, access to VIP-only bars and restrooms, and other
                  perks.
                </p>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
        <div className={styles.campingOptions}>
          <h2 className={styles.h2}>Campsite options:</h2>
          <Collapse.Group bordered className="collapsegroup">
            <Collapse expanded title="Fixed booking fee">
              <div className={styles.info}>
                <p>For 99,-, you can reserve a spot in the campsite for your own tent. This fee covers the cost of your campsite spot for the duration of the festival.</p>
              </div>
            </Collapse>
            <Collapse title="Green camping option">
              <div className={styles.info}>
                <p>
                  For an additional 249,-, you can opt for the Green camping option. This means that your tent will be placed in a special area of the campsite where the environmental impact is minimized. You'll also receive a special wristband that
                  gives you access to exclusive green camping amenities and activities.
                </p>
              </div>
            </Collapse>
            <Collapse title="Crew-set up tents">
              <div className={styles.info}>
                <p>
                  If you prefer not to bring your own tent, you can pay for one of our crew-set up tents. These come in 2-person or 3-person sizes, and include the tent, bedding, and setup. The 2-person tent costs 299,-, and the 3-person tent costs
                  399,-. This option is perfect for those who want a hassle-free camping experience.
                </p>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </div>
  );
}

export default tickets;
