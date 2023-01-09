import styles from "../styles/Faq.module.css";
import { Collapse } from "@nextui-org/react";

function faq() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>FAQ</h1>
          <Collapse.Group bordered className={styles.collapseGroup + " collapsegroup"}>
            <Collapse expanded title="Q: What is GreenMark?">
              <div className={styles.info}>
                <p>A: GreenMark is a sustainable music festival dedicated to celebrating the best in sustainable music and promoting environmental and social sustainability.</p>
              </div>
            </Collapse>
            <Collapse title="Q: When is GreenMark taking place?">
              <div className={styles.info}>
                <p>A: GreenMark is held annually at a date to be announced.</p>
              </div>
            </Collapse>
            <Collapse title="Q: Where is GreenMark located?">
              <div className={styles.info}>
                <p>A: GreenMark is held at a beautiful outdoor venue in a location to be announced.</p>
              </div>
            </Collapse>
            <Collapse title="Q: What kind of music can I expect at GreenMark?">
              <div className={styles.info}>
                <p>A: At GreenMark, we have a diverse and comprehensive music lineup that includes artists from all over the world, with a focus on local talent.</p>
              </div>
            </Collapse>
            <Collapse title="Q: What makes GreenMark different from other music festivals?">
              <div className={styles.info}>
                <p>
                  A: GreenMark is dedicated to promoting sustainability, both environmental and social. We take steps to minimize our impact on the environment and support local organizations working
                  to make our community a better place.
                </p>
              </div>
            </Collapse>
            <Collapse title="Q: Are there any age restrictions for GreenMark?">
              <div className={styles.info}>
                <p>A: GreenMark is an all-ages event. Children under the age of 12 can attend for free when accompanied by a paying adult.</p>
              </div>
            </Collapse>
            <Collapse title="Q: Are there any ATM's on site?">
              <div className={styles.info}>
                <p>A: Yes, there will be several ATM's on site for your convenience.</p>
              </div>
            </Collapse>
            <Collapse title="Q: Can I volunteer at GreenMark?">
              <div className={styles.info}>
                <p>A: Yes, we are always looking for passionate volunteers to join our team. If you're interested in volunteering, please contact us for more information.</p>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </div>
  );
}

export default faq;
