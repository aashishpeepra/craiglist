import styles from "./unpublished.module.css";
import Button from "../../ui/Button/button";

export default function Unpushlished() {
  return (
    <div className={styles.preview} id="preview">
      <section className={styles.preview_desc} id="description">
        <div className={styles.preview_desc_title}>
          <p>Description</p>
          <span>Price</span>
        </div>

        {[
          {
            title: "seattle-tacoma > seattle > accounting/finance",
            price: "$45.00 USD",
          },
          {
            title: "seattle-tacoma > seattle > software/qa/dba/etc",
            price: "$45.00 USD",
          },
        ].map((each) => {
          return (
            <div key={each.title} className={styles.preview_desc_each}>
              <p>{each.title}</p>
              <span>{each.price}</span>
            </div>
          );
        })}
        <div className={styles.preview_desc_final}>
          <p>Total amount charged:</p>
          <span>$90.00 USD</span>
        </div>
      </section>
      <section className={styles.preview_info}>
        <p>Attention posting will expire in 30 days.</p>
      </section>
      <div className={styles.preview_banner}>
        <p>this is unpublished draft.</p>
        <Button text="continue" onClick={() => {}} />
      </div>
      <div className={styles.preview_edit}>
        <button type="button">edit post</button>
        <button type="button">edit location</button>
        <button type="button">edit images</button>
      </div>
      <div className={styles.preview_preview}>
        <h4>This is super nice job</h4>
        <div className={styles.preview_preview_container}>
          <div className={styles.preview_preview_left}>
            <img
              src={"https://picsum.photos/450"}
              alt="some nice seo related alt tag will go here"
            />
          </div>
          <div className={styles.preview_preview_right}>
            <div className={styles.preview_preview_right_map}></div>
            <div className={styles.preview_preview_right_details}></div>
          </div>
        </div>
      </div>
      <div className={styles.preview_details}>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
        <ul>
          <li>
            Principals only. Recruiters, please don&apos;t contact this job
            poster.
          </li>
          <li>do NOT contact us with unsolicited services or offers</li>
        </ul>
      </div>
      <div className={styles.preview_button}>
        <Button text="publish" onClick={() => {}} />
      </div>
    </div>
  );
}
