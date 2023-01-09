import { useState } from "react";
import Booking from "./Booking";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, state, setState }) {
  return (
    <>
      <Header />
      <Booking state={state} setState={(state) => setState(state)} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
