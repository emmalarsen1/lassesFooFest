import { useRef, useEffect, useState } from "react";
import Booking from "./Booking";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout({ children, state, setState, isBlured, setBlured }) {
  const mainElement = useRef(null); // create a ref to the main element

  useEffect(() => {
    if (isBlured === true) {
      mainElement.current.classList.add(styles.blur); // add the blur class when the menu is opened
    } else {
      mainElement.current.classList.remove(styles.blur); // remove the blur class when the menu is closed
    }
  }, [isBlured]); // only run the effect when the state changes

  return (
    <>
      <Header />
      <Booking isBlured={isBlured} setBlured={(isBlured) => setBlured(isBlured)} state={state} setState={(state) => setState(state)} />
      <main ref={mainElement}>{children}</main>
      {/* add the ref to the main element */}
      <Footer />
    </>
  );
}
