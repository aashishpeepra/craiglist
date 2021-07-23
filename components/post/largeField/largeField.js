import styles from "./largeField.module.css";
import { useState } from "react";
import Button from "../../ui/Button/button";

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

export default function LargeField() {
  return (
    <div className={styles.largeForm}>
      <div className={styles.error}>
        <h3>Some required information is missing or incorrect.</h3>
      </div>
      <div className={styles.instructions}>
        <p>Please specify the amount of compensation in the field provided.</p>
        <p>Please supply a value for the employment type field</p>
      </div>

      <div className={styles.sect}>
        <InputField
          value=""
          onChange={() => {}}
          name="posting title"
          id="postingTitle"
          placeholder="Title"
          width="100"
        />
        <InputField
          value=""
          onChange={() => {}}
          name="city or neighbourhood"
          id="city"
          width="100"
          placeholder="city"
        />
        <InputField
          value=""
          onChange={() => {}}
          name="pincode"
          id="pincode"
          width="30"
          placeholder="pincode"
        />
      </div>
      <div className={styles.sect}>
        <fieldset className={styles.sizeableform}>
          <label>description</label>
          <textarea />
        </fieldset>
      </div>
      <div className={styles.sect_bg}>
        <div className={styles.sect_bg_left}>
          <fieldset className={styles.sizeableform}>
            <label>employment type</label>
            <select>
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="contract">contract</option>
              <option value="employee-choice">{`${"employee's choice"}`}</option>
            </select>
          </fieldset>
        </div>
        <div className={styles.sect_bg_right}>
          {[
            "direct contact by recruiters is ok",
            "internship",
            "non-profit organization",
            "relocation assistance available",
            "telecommuting ok",
          ].map((each) => {
            return (
              <div key={each} className={styles.checkbox}>
                <input type="checkbox" value={each} checked={false} />
                <label>{each}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.sect}>
        <InputField
          value=""
          onChange={() => {}}
          name="compenstation"
          id="compensation"
          placeholder="describe compensation here"
        />
      </div>
      <div className={styles.sect}>
        <InputField
          value=""
          onChange={() => {}}
          name="companyName"
          id="companyName"
          placeholder="company name"
        />
      </div>
      <div className={styles.sect_bg}>
        <div className={styles.sect_bg_left}>
          <InputField
            value=""
            onChange={() => {}}
            name="email"
            id="email"
            placeholder="@email"
            width={120}
          />
        </div>
        <div className={styles.sect_bg_right}>
          <fieldset>
            <div className={styles.checkbox}>
              <input type="checkbox" value={true} checked={true} />
              <label>show my phone number</label>
            </div>

            <InputField
              value=""
              onChange={() => {}}
              name="pincode"
              id="postingTitle"
              placeholder="enter posting title"
              disabled={true}
            />
          </fieldset>
        </div>
      </div>
      <div className={styles.sect_bg}>
        <fieldset>
          <div className={styles.checkbox}>
            <input type="checkbox" value={true} checked={true} />
            <label>show address</label>
          </div>

          <div className={styles.sect_bg_linear}>
            <InputField
              value=""
              onChange={() => {}}
              name="street"
              id="street"
              placeholder="street"
              disabled={true}
              width="100"
            />
            <InputField
              value=""
              onChange={() => {}}
              name="cross street"
              id="cross street"
              placeholder="cross street"
              disabled={true}
              width="100"
            />
            <InputField
              value=""
              onChange={() => {}}
              name="city"
              id="city"
              placeholder="city"
              disabled={true}
              width="100"
            />
          </div>
        </fieldset>
      </div>
      <Button text="continue" onClick={() => {}} />
    </div>
  );
}
