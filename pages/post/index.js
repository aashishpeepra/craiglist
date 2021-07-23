import { useState } from "react";
import styles from "./posts.module.css";
import Button from "../../components/ui/Button/button";
import * as categories from "../../constants/constants";
import LargeField from "../../components/post/largeField/largeField";
import Unpushlished from "../../components/post/unpublished/unpublished";
import EmailUpdates from "../../components/post/emailUpdate/emailUpdate";
function jobForm(value,onChange,nextClick,price){
  return (
    <div className={styles.fieldContainer}>
      
          <h4 className={styles.green}>
            {
              price == 0 ? `Price: $45.00 USD per category selected` : `You current total : $${price}.00 USD`
            }
          </h4>
          <p style={{ marginBottom: "1rem" }}>
            You are posting to seattle-tacoma
          </p>
          <fieldset>select one or more categories:</fieldset>
          <div onChange={onChange} className={styles.fieldBox}>
            {categories.jobs.map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  checked={value.includes(type)}
                  value={type}
                  name={type}
                />
                {type}
              </label>
            ))}
          </div>
          <h4 className={styles.green}>
            {
              price == 0 ? `Price: $45.00 USD per category selected` : `You current total : $${price}.00 USD`
            }
          </h4>
          <div className={styles.fieldContainer_button}>
            <Button text={"continue"} onClick={nextClick} />
          </div>
        </div>
  )
}


function chooseForm(type, value, onChange, nextClick) {
  const subareas = [
    "seattle",
    "eastside",
    "snohomish county",
    "kitsap / west puget",
    "tacoma / pierce",
    "olympia / thurston",
    "south king co",
  ];
  switch (type) {
    case "subarea":
      return (
        <div className={styles.fieldContainer}>
          <fieldset>choose the location that fits best:</fieldset>
          <div onChange={onChange} className={styles.fieldBox}>
            {subareas.map((state) => (
              <label key={state}>
                <input
                  type="radio"
                  checked={value === state}
                  value={state}
                  name={state}
                />
                {state}
              </label>
            ))}
          </div>

          <div className={styles.note}>
            <p>please note:</p>
            <span>
              your posting will also appear on the main <p>seattle-tacoma</p>{" "}
              site.
            </span>
          </div>
          <div className={styles.fieldContainer_button}>
            <Button text={"continue"} onClick={nextClick} />
          </div>
        </div>
      );
    case "type":
      const types = [
        " job offered",
        "gig offered (I'm hiring for a short-term, small or odd job)",
        "resume / job wanted",
        "housing offered",
        "housing wanted",
        "for sale by owner",
        "for sale by dealer",
        "wanted by owner",
        "wanted by dealer",
        "service offered",
        "community",
        "event / class",
      ];
      return (
        <div className={styles.fieldContainer}>
          <p style={{ marginBottom: "1rem" }}>
            please limit each posting to a single area and category, once per 48
            hours
          </p>
          <fieldset>What type of posting is this:</fieldset>
          <div onChange={onChange} className={styles.fieldBox}>
            {types.map((type) => (
              <label key={type}>
                <input type="radio" value={type} name={type} />
                {type}
              </label>
            ))}
          </div>
          <div className={styles.fieldContainer_button}>
            <Button text={"continue"} onClick={nextClick} />
          </div>
        </div>
      );
    case "cat":
      return (
        jobForm(value,onChange,nextClick,value.length*45)
      );
  }
}

export default function PostPage() {
  const [current, setCurrent] = useState("cat");
  const [state, setState] = useState([]);
  const checkBoxChange = (e,state,setState) => {
    if (state.includes(e.target.value))
      setState((prev) => prev.filter((each) => each != e.target.value));
    else setState((prev) => [...prev, e.target.value]);
  };
  return (
    <section id="post-section" className={styles.post}>
      {/* {chooseForm(
        current,
        state,
        (e) => {checkBoxChange(e,state,setState)},
        () => setCurrent("type")
      )} */}
      {/* <LargeField/> */}
      {/* <Unpushlished/> */}
      <EmailUpdates/>
    </section>
  );
}
