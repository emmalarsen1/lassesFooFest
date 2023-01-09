import styles from "../styles/About.module.css";
import { Collapse, css } from "@nextui-org/react";

function about() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>ABOUT US</h1>
          <Collapse.Group bordered className={styles.collapseGroup + " collapsegroup"}>
            <Collapse title="Celebrating Sustainable Music">
              <div className={styles.info}>
                <p>
                  Welcome to GreenMark, a music festival dedicated to celebrating the best in sustainable music. At GreenMark, we believe that sustainability is about more than just reducing our
                  impact on the environment. It's also about creating optimal conditions for the people living here now and in the future. That's why we've curated a diverse and comprehensive music
                  lineup that showcases artists from all over the world, with a focus on local talent.
                </p>
              </div>
            </Collapse>
            <Collapse title="An Eco-Friendly Music Festival">
              <div className={styles.info}>
                <p>
                  At GreenMark, we're committed to hosting an eco-friendly music festival. We know that large events like ours can have a significant impact on the environment, so we're taking steps
                  to minimize our footprint. From using biodegradable cups and utensils to working with local suppliers to reduce transportation emissions, we're doing our part to protect the planet.
                </p>
              </div>
            </Collapse>
            <Collapse title="Supporting Local Talent">
              <div className={styles.info}>
                <p>
                  At GreenMark, we believe that sustainability isn't just about the environment – it's also about creating a better world for people to live in. That's why we're committed to promoting
                  social sustainability at our festival. We'll be working with local organizations to support their efforts to make our community a better place, and we'll be offering opportunities
                  for festival-goers to get involved and make a difference.
                </p>
              </div>
            </Collapse>
            <Collapse expanded title="Become a Volunteer!">
              <div className={styles.info}>
                <p>
                  Are you passionate about sustainability and music? Do you want to help make GreenMark a success? We're looking for volunteers to join our team and help us create an unforgettable
                  music festival experience. As a volunteer, you'll have the opportunity to get involved in a variety of tasks, from helping with setup and breakdown to supporting our sustainability
                  efforts. If you're interested in volunteering, please contact us for more information.
                </p>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </div>
  );
}

export default about;
