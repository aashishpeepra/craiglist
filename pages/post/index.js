import { useState } from "react";
import styles from "./posts.module.css";
import Button from "../../components/ui/Button/button";
import * as categories from "../../constants/constants";
import LargeField from "../../components/post/largeField/largeField";
import Unpushlished from "../../components/post/unpublished/unpublished";
import EmailUpdates from "../../components/post/emailUpdate/emailUpdate";
import Basic from "../../components/forms/basic";
import HouseSwap from "../../components/forms/housing/swap";
import HouseCommercial from "../../components/forms/housing/commercial";
import HouseRealEstate from "../../components/forms/housing/realEstate";
import HouseWantedApt from "../../components/forms/housing/wantedApt";
import HouseRoomsAndShare from "../../components/forms/housing/roomsAndShare";
import RoomsAndShare from "../../components/forms/housing/roomsAndShare";
import HouseWantedReal from "../../components/forms/housing/wantedReal";
import Jobs from "../../components/forms/jobs";
import Legal from "../../components/forms/legal";
import JobWanted from "../../components/forms/jobWanted";
import Gig from "../../components/forms/gig";

function jobForm(value, onChange, nextClick, price) {
  return (
    <div className={styles.fieldContainer}>
      <h4 className={styles.green}>
        {price == 0
          ? `Price: $45.00 USD per category selected`
          : `You current total : $${price}.00 USD`}
      </h4>
      <p style={{ marginBottom: "1rem" }}>You are posting to seattle-tacoma</p>
      <fieldset>select one or more categories:</fieldset>
      <div onChange={onChange} className={styles.fieldBox}>
        {categories.jobs.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              defaultChecked={value.includes(type)}
              value={type}
              name={type}
            />
            {type}
          </label>
        ))}
      </div>
      <h4 className={styles.green}>
        {price == 0
          ? `Price: $45.00 USD per category selected`
          : `You current total : $${price}.00 USD`}
      </h4>
      <div className={styles.fieldContainer_button}>
        <Button text={"continue"} onClick={nextClick} />
      </div>
    </div>
  );
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
        "job offered",
        "gig offered (I'm hiring for a short-term, small or odd job)",
        "resume / job wanted",
        "housing offered",
        "housing wanted"
      ];
      // ,
      //   "for sale by owner",
      //   "for sale by dealer",
      //   "wanted by owner",
      //   "wanted by dealer",
      //   "service offered",
      //   "community",
      //   "event / class",
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
                <input type="radio" value={type} name={"type"} />
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
      return jobForm(value, onChange, nextClick, value.length * 45);
    case "gig":
      return (
        <div className={styles.fieldContainer}>
          <fieldset>Which one of these applies?</fieldset>
          <div onChange={onChange} className={styles.fieldBox}>
            {["i want to hire someone", "i have a service to offer"].map(
              (type) => (
                <label key={type}>
                  <input type="radio" value={type} name={"gig"} />
                  {type}
                </label>
              )
            )}
          </div>
          <div className={styles.fieldContainer_button}>
            <Button text={"continue"} onClick={nextClick} />
          </div>
        </div>
      );
    case "gigType":
      return (
        <div className={styles.fieldContainer}>
          <fieldset>Which one of these applies?</fieldset>
          <div onChange={onChange} className={styles.fieldBox}>
            {[
              {
                value: "computer gigs",
                extra:
                  "(small web design, tech support, etc projects) ($7 per post)",
              },
              {
                value: "creative gigs",
                extra:
                  "(small design, photography, illustration projects) ($7 per post)",
              },
              {
                value: "crew gigs",
                extra:
                  '(low budget film/theatre opportunities EXCEPT acting, which go under "talent") ($7 per post)',
              },
              {
                value: "domestic gigs",
                extra:
                  "(cleaning, babysitting, home care, tutoring, personal training, etc) ($7 per post)",
              },
              {
                value: "event gigs",
                extra:
                  "(promotions, catering, wedding photography, etc) ($7 per post)",
              },
              {
                value: "labor gigs",
                extra: "(includes moving & hauling) ($7 per post)",
              },
              {
                value: "talent gigs",
                extra: " (acting, modeling, music, dance, etc) ($7 per post)",
              },
              {
                value: "writing gigs",
                extra: "(includes editing & translation) ($7 per post)",
              },
            ].map((each) => (
              <label key={each.value}>
                <input type="radio" value={each.value} name={"gigType"} />
                {each.value + " " + each.extra}
              </label>
            ))}
          </div>
          <div className={styles.fieldContainer_button}>
            <Button text={"continue"} onClick={nextClick} />
          </div>
        </div>
      );
    case "gigOffer":
      return (
        <div className={styles.fieldContainer}>
          <fieldset>Which one of these applies?</fieldset>
          <div onChange={onChange} className={styles.fieldBox}>
            {[
              { main: "automotive services", extra: "($5 per post)" },
              { main: "beauty services", extra: "($5 per post)" },
              { main: "cell phone / mobile services", extra: "($5 per post)" },
              { main: "computer services", extra: "($5 per post)" },
              { main: "creative services", extra: "($5 per post)" },
              { main: "cycle services", extra: "($5 per post)" },
              { main: "event services", extra: "($5 per post)" },
              { main: "farm & garden services", extra: "($5 per post)" },
              { main: "financial services", extra: "($5 per post)" },
              { main: "health/wellness services", extra: "($5 per post)" },
              { main: "household services", extra: "($5 per post)" },
              { main: "labor / hauling / moving", extra: "($5 per post)" },
              { main: "legal services", extra: "($5 per post)" },
              { main: "lessons & tutoring", extra: "($5 per post)" },
              { main: "marine services", extra: "($5 per post)" },
              { main: "pet services", extra: "($5 per post)" },
              { main: "real estate services", extra: "($5 per post)" },
              { main: "skilled trade services", extra: "($5 per post)" },
              { main: "small biz ads", extra: "($5 per post)" },
              { main: "travel/vacation services", extra: "($5 per post)" },
              {
                main: "writing / editing / translation",
                extra: "($5 per post)",
              },
            ].map((each) => (
              <label key={each.value}>
                <input type="radio" value={each.main} name={"gigOffer"} />
                {each.main + " " + each.extra}
              </label>
            ))}
          </div>
          <div className={styles.fieldContainer_button}>
            <Button text={"continue"} onClick={nextClick} />
          </div>
        </div>
      );
    case "jobResume":
      return (
        <div className={styles.fieldContainer}>
          <fieldset>Which one of these applies?</fieldset>
          <div onChange={onChange} className={styles.fieldBox}>
            {[
              "I'm an individual seeking employment",
              "I'm offering or advertising a service",
              "I'm offering a job",
              "I'm offering childcare",
            ].map((each) => (
              <label key={each.value}>
                <input type="radio" value={each} name={"jobResume"} />
                {each}
              </label>
            ))}
          </div>
          <div className={styles.fieldContainer_button}>
            <Button text={"continue"} onClick={nextClick} />
          </div>
        </div>
      );
    case "houseType":
      return (
        <div className={styles.fieldContainer}>
          <fieldset>Which one of these applies?</fieldset>
          <div onChange={onChange} className={styles.fieldBox}>
            {[
              "rooms & shares",
              "apartments / housing for rent (no shares, roommates, or sublets please!)",
              "housing swap",
              "office & commercial ($5 per post)",
              "parking & storage",
              "real estate - by broker",
              "real estate - by owner",
              "sublets & temporary",
              "vacation rentals",
            ].map((each) => (
              <label key={each.value}>
                <input type="radio" value={each} name={"houseType"} />
                {each}
              </label>
            ))}
          </div>
          <div className={styles.fieldContainer_button}>
            <Button text={"continue"} onClick={nextClick} />
          </div>
        </div>
      );
    case "houseWant":
      return (
        <div className={styles.fieldContainer}>
          <fieldset>please choose a category</fieldset>
          <div onChange={onChange} className={styles.fieldBox}>
            {[
              "wanted: apts",
              "wanted: real estate",
              "wanted: room/share",
              "wanted: sublet/temp",
            ].map((each) => (
              <label key={each.value}>
                <input type="radio" value={each} name={"houseType"} />
                {each}
              </label>
            ))}
          </div>
          <div className={styles.fieldContainer_button}>
            <Button text={"continue"} onClick={nextClick} />
          </div>
        </div>
      );
  }
}

export default function PostPage() {
  const checkBoxChange = (e, state, setState) => {
    if (state.includes(e.target.value))
      setState((prev) => prev.filter((each) => each != e.target.value));
    else setState((prev) => [...prev, e.target.value]);
  };
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [index, setIndex] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [gig, setGig] = useState("");
  const [gigType, setGigType] = useState("");
  const [jobResume, setJobResume] = useState("");
  const [jobAdvertise, setJobAdvertise] = useState("");
  const [houseType, setHouseType] = useState("");
  const goToNext = () => {
    let valueCurrent = [location, type, jobs, gigType][index];
    if (!valueCurrent && index < 3) {
      alert("select option");
      return;
    } else setIndex((prev) => prev + 1);
  };
  return (
    <section id="post-section" className={styles.post}>
      {index === 0 &&
        chooseForm(
          "subarea",
          location,
          (e) => {
            setLocation(e.target.value);
          },
          goToNext
        )}
      {index === 1 &&
        chooseForm("type", type, (e) => setType(e.target.value), goToNext)}

      {index == 2 &&
        (function () {
          switch (type) {
            case "job offered":
              return chooseForm(
                "cat",
                jobs,
                (e) => checkBoxChange(e, jobs, setJobs),
                goToNext
              );
            case "gig offered (I'm hiring for a short-term, small or odd job)":
              return chooseForm(
                "gig",
                gig,
                (e) => setGig(e.target.value),
                goToNext
              );
            case "resume / job wanted":
              return chooseForm(
                "jobResume",
                jobResume,
                (e) => setJobResume(e.target.value),
                goToNext
              );
            case "housing offered":
              return chooseForm(
                "houseType",
                houseType,
                (e) => setHouseType(e.target.value),
                goToNext
              );
            case "housing wanted":
              return chooseForm(
                "houseWant",
                houseType,
                (e) => setHouseType(e.target.value),
                goToNext
              );
          }
        })()}

      {index === 3 &&
        (function () {
          console.log(type, jobResume);
          if (type === "job offered") return <Jobs />;
          if (
            type ===
            "gig offered (I'm hiring for a short-term, small or odd job)"
          )
            return chooseForm(
              gig === "i want to hire someone" ? "gigType" : "gigOffer",
              gigType,
              (e) => {
                console.log(e.target.value);
                setGigType(e.target.value);
              },
              goToNext
            );
          if (type === "resume / job wanted") {
            switch (jobResume) {
              case "I'm an individual seeking employment":
                return <JobWanted />;
              case "I'm offering or advertising a service":
                return chooseForm(
                  "gigOffer",
                  jobAdvertise,
                  (e) => setJobAdvertise(e.target.value),
                  goToNext
                );
              case "I'm offering a job":
                return chooseForm(
                  "cat",
                  jobs,
                  (e) => checkBoxChange(e, jobs, setJobs),
                  goToNext
                );
              case "I'm offering childcare":
                return <Basic />;
            }
          }
          if (type === "housing offered") {
            switch (houseType) {
              case "rooms & shares":
              case "sublets & temporary":
              case "vacation rentals":
              case "apartments / housing for rent (no shares, roommates, or sublets please!)":
                return <RoomsAndShare />;

              case "office & commercial ($5 per post)":
              case "parking & storage":
                return <HouseCommercial />;
              case "housing swap":
                return <HouseSwap />;
              case "real estate - by broker":
              case "real estate - by owner":
                return <HouseRealEstate />;
            }
          }
          if (type === "housing wanted") {
            switch ("houseType") {
              case "wanted: apts":
              case "wanted: sublet/temp":
              case "wanted: room/share":
                return <HouseWantedApt />;
              case "wanted: real estate":
                return <HouseWantedReal />;
            }
          }
        })()}
      {index === 4 &&
        (function () {
          if (
            type ===
            "gig offered (I'm hiring for a short-term, small or odd job)"
          ) {
            if (gig === "i want to hire someone") {
              return <Gig />;
            } else {
              return <Basic />;
            }
          }
          if (type === "resume / job wanted") {
            switch (jobResume) {
              case "I'm offering or advertising a service":
                return <Basic />;
              case "I'm offering a job":
                return <Jobs />;
            }
          }
        })()}
      {/* 
      
      
      
      <HouseWantedApt/>
      
      <HouseWantedReal/>
      <Jobs/>
      <Legal/>
      <JobWanted/>
      <Gig/>
      <LargeField/>
      <Unpushlished/>
      <EmailUpdates/> */}
    </section>
  );
}
