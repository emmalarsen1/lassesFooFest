import styles from "../styles/Schedule.module.css";
import OneSchedule from "../components/OneSchedule";
import { useState, useEffect, useRef } from "react";
import React from "react";

function schedule({ bandData }) {
  const [selectDay, setSelectDay] = useState("mon");
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const url = "https://greenmark.fly.dev/schedule/";
  const [data, setData] = useState([]);

  //SCROLL
  const ref0 = React.useRef();
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();
  const ref4 = React.useRef();
  const ref5 = React.useRef();
  const ref6 = React.useRef();
  const ref = [ref0, ref1, ref2, ref3, ref4, ref5, ref6];

  //FETCH
  useEffect(() => {
    fetch(url + selectDay).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, [selectDay]);

  const onDayChange = (day) => {
    setSelectDay(day.substring(0, 3));
  };

  //SCROLL
  function scrollTo(ref) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  const [active, setActive] = useState("0");

  const insertTimes = () => {
    const list = [];
    for (let i = 0; i < 24; i += 2) {
      i < 10 ? list.push(<h2>0{i}:00</h2>) : list.push(<h2>{i}:00</h2>);
    }
    return <div className={styles.new_times}>{list}</div>;
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>SCHEDULE</h1>
      <h2 className={styles.h2underheader}>CHOOSE A DAY</h2>
      <div className={styles.mainwrapper}>
        <div className={styles.daypicker}>
          {days.map((day, i) => (
            <button
              key={i}
              ref={ref[i]}
              className={styles.daysbtn}
              onClick={function () {
                onDayChange(day);
                scrollTo(ref[i]);
                setActive(i);
              }}
            >
              <h3 className={`${active == i && styles.active}`}> {day.substring(0, 1).toUpperCase() + day.substring(1, day.length)}</h3>
            </button>
          ))}
        </div>
        <div className={styles.gridWrapper}>
          <div className={styles.new_grid}>
            <h3 className={styles.hidden}>TIME</h3>
            <h3>MIDGARD</h3>
            <h3>JOTUNHEIM</h3>
            <h3>VANAHEIM</h3>
            {insertTimes()}
            <OneSchedule data={data.Midgard} bandData={bandData} />
            <OneSchedule data={data.Jotunheim} bandData={bandData} />
            <OneSchedule data={data.Vanaheim} bandData={bandData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default schedule;
