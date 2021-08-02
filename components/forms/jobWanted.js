import styles from "./forms.module.css";
import { useState } from "react";
import Button from "../ui/Button/button";

function InputField({
  value,
  onChange,
  name,
  id,
  placeholder,
  disabled = false,
  width = 70,
}) {
  return (
    <fieldset className={styles.sizeableform}>
      <label>{name}</label>
      <input
        style={{ width: width + "%" }}
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        autoComplete="true"
        id={id}
        disabled={disabled}
        onChange={onChange}
      />
    </fieldset>
  );
}

export default function JobWanted() {
  const [hasNumber, setHasNumber] = useState(false);
  const [hasLocation, setHasLocation] = useState(false);
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [desc, setDesc] = useState("");
  const [reachEmail, setReachEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState({});
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [license, setLicense] = useState("");
  const [hasLicense, setHasLicense] = useState(false);
  const [education, setEducation] = useState("");
  const [avaibility, setAvaibility] = useState([]);
  const [propertise,setPropertise] = useState([])
  const handleSelect = (e, state, setState) => {
    if (state.includes(e.target.value))
      setState(propertise.filter((each) => each != e.target.value));
    else setState((prev) => [...prev, e.target.value]);
  };

  const submitForm = () => {
    setErrors({});
    console.log(errors);
    if (!title || !city || !pincode || !desc || !email) {
      setErrors((prev) => ({ missing: true }));
      return;
    }
    if (
      hasLocation &&
      (!location.city || !location.crossStreet || !location.street)
    ) {
      setErrors((prev) => ({ missing: true }));
      return;
    }
    if (hasNumber && !phone) {
      setErrors((prev) => ({ missing: true }));
      return;
    }

    const postDetails = {
      title,
      city,
      pincode,
      description: desc,
      hasNumber,
      hasLocation,
      reachEmail,
      phone,
      location,
      reachEmail,
      product:{
          education,
          propertise
      },
      extra: {
          avaibility,
        license,
        hasLicense,
      },
    };
    console.log(postDetails);
  };

  return (
    <div className={styles.largeForm}>
      <div className={styles.error}>
        {errors.missing && (
          <h3>Some required information is missing or incorrect.</h3>
        )}
      </div>
      <div className={styles.instructions}>
        <p>Please specify the amount of compensation in the field provided.</p>
        <p>Please supply a value for the employment type field</p>
      </div>

      <div className={styles.sect}>
        <InputField
          value={title}
          onChange={(e) => {
            console.log(e.target.value);
            setTitle(e.target.value);
          }}
          name="posting title"
          id="postingTitle"
          placeholder="Title"
          width="100"
        />
        <InputField
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name="city or neighbourhood"
          id="city"
          width="100"
          placeholder="city"
        />
        <InputField
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          name="pincode"
          id="pincode"
          width="30"
          placeholder="pincode"
        />
      </div>
      <div className={styles.sect}>
        <fieldset className={styles.sizeableform}>
          <label>description</label>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
        </fieldset>
      </div>
      <div className={styles.sect_bg}>
        <div className={styles.linear}>
          <label>avaibility ( you must select at least one )</label>

          {[
            "morning",
            "afternoon",
            "evening",
            "overnight",
            "weekdays",
            "weekends",
          ].map((each) => {
            return (
              <div className={styles.checkbox} key={each}>
                <input
                  type="checkbox"
                  name="avaibility"
                  value={each}
                  defaultChecked={avaibility.includes(each)}
                  onChange={(e) => handleSelect(e, avaibility, setAvaibility)}
                />
                <label>{each}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.sect_bg}>
        <div className={styles.row}>
          <div className={styles.col}>
            <fieldset>
              <label>employment type</label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              >
                {[
                  "less than high school",
                  "high school/GED",
                  "some college",
                  "associates",
                  "bachelors",
                  "masters",
                  "doctoral",
                ].map((each) => (
                  <option value={each} key={each}>
                    {each}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
          <div className={styles.col}>
            {["direct contact by recruiters is ok"].map((each) => {
              return (
                <div
                  className={styles.checkbox}
                  defaultChecked={propertise.includes(each)}
                  onChange={(e) => handleSelect(e, propertise, setPropertise)}
                  key={each}
                >
                  <input type="checkbox" name="propertise" value={each} />
                  <label>{each}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.sect + " " + styles.extra}>
        <div
          className={styles.row}
          onChange={(e) =>
            setHasLicense(e.target.value == "true" ? true : false)
          }
        >
          <fieldset>
            <input
              defaultChecked={hasLicense}
              type="radio"
              name="license"
              value={"false"}
            />
            <label>unlicensed</label>
          </fieldset>
          <fieldset>
            <input
              type="radio"
              defaultChecked={hasLicense}
              name="license"
              value={"true"}
            />
            <label>licensed</label>
          </fieldset>
        </div>
        <InputField
          value={license}
          onChange={(e) => setLicense(e.target.value)}
          name="licensure information"
          id="licensure information"
          placeholder="enter license information"
          disabled={!hasLicense}
        />
      </div>
      <div className={styles.sect_bg}>
        <div className={styles.sect_bg_left}>
          <InputField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="@email"
            width={120}
          />
          <div
            className={styles.email}
            onChange={(e) => setReachEmail(e.target.value)}
          >
            <span>email privacy options</span>
            <fieldset>
              <input type="radio" value={true} name="email-security" />
              <label>CL email relay (recommended)</label>
              <br />
            </fieldset>
            <fieldset>
              <input type="radio" value={false} name="email-security" />
              <label>no replies to this email</label>
            </fieldset>
          </div>
        </div>
        <div className={styles.sect_bg_right}>
          <fieldset>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                defaultChecked={hasNumber}
                onChange={() => setHasNumber((prev) => !prev)}
              />
              <label>show my phone number</label>
            </div>

            <InputField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              id="phoneNumber"
              placeholder="enter phone number"
              disabled={!hasNumber}
            />
          </fieldset>
        </div>
      </div>
      <div className={styles.sect_bg}>
        <fieldset>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              defaultChecked={hasLocation}
              onChange={() => setHasLocation((prev) => !prev)}
            />
            <label>show address</label>
          </div>

          <div className={styles.sect_bg_linear}>
            <InputField
              value={location.street}
              onChange={(e) =>
                setLocation((prev) => ({ ...prev, street: e.target.value }))
              }
              name="street"
              id="street"
              placeholder="street"
              disabled={!hasLocation}
              width="100"
            />
            <InputField
              value={location.crossStreet}
              onChange={(e) =>
                setLocation((prev) => ({
                  ...prev,
                  crossStreet: e.target.value,
                }))
              }
              name="cross street"
              id="cross street"
              placeholder="cross street"
              disabled={!hasLocation}
              width="100"
            />
            <InputField
              value={location.city}
              onChange={(e) =>
                setLocation((prev) => ({ ...prev, city: e.target.value }))
              }
              name="city"
              id="city"
              placeholder="city"
              disabled={!hasLocation}
              width="100"
            />
          </div>
        </fieldset>
      </div>
      <Button text="continue" onClick={submitForm} />
    </div>
  );
}
