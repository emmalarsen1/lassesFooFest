import { useRef, useEffect } from "react";
import Booking from "./Booking";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout({ children, state, setState }) {
  const mainElement = useRef(null); // create a ref to the main element

  useEffect(() => {
    if (state === "open") {
      mainElement.current.classList.add(styles.blur); // add the blur class when the menu is opened
    } else {
      mainElement.current.classList.remove(styles.blur); // remove the blur class when the menu is closed
    }
  }, [state]); // only run the effect when the state changes

  return (
    <>
      <Header />
      <Booking state={state} setState={(state) => setState(state)} />
      <main ref={mainElement}>{children}</main>
      {/* add the ref to the main element */}
      <Footer />
    </>
  );
}
