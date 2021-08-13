import styles from "./unpublished.module.css";
import Button from "../../ui/Button/button";
import MapConstant from "../../mapConstant/app";
import Tag from "../../../components/ui/tag/tag";
import submitPost from "../../../functions/submitPost";
import {useRouter} from "next/router"
export default function Unpushlished({data,map,goToPos}) {
  const router = useRouter();

  

  return (
    <div className={styles.preview} id="preview">
      <section className={styles.preview_desc} id="description">
        <div className={styles.preview_desc_title}>
          <p>Description</p>
          <span>Price</span>
        </div>

        {data.subCategory && data.subCategory.map((each) => {
          return (
            <div key={each} className={styles.preview_desc_each}>
              <p>{ "seattle>"+data.category+">"+ each}</p>
              <span>$45</span>
            </div>
          );
        })}
        <div className={styles.preview_desc_final}>
          <p>Total amount charged:</p>
          <span>${data.subCategory ? data.subCategory.length*45 : 45} USD</span>
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
        <button type="button" onClick={goToPos.edit}>edit post</button>
        <button type="button" onClick={goToPos.location}>edit location</button>
        <button type="button">edit images</button>
      </div>
      <div className={styles.preview_preview}>
        <h4>{data.title}</h4>
        <div className={styles.preview_preview_container}>
          <div className={styles.preview_preview_left}>
            <img
              src={"https://picsum.photos/450"}
              alt="some nice seo related alt tag will go here"
            />
          </div>
          <div className={styles.preview_preview_right}>
            <div className={styles.preview_preview_right_map}>
              <MapConstant lat={map.latitude} long={map.longitude}/>
            </div>
            <div className={styles.preview_preview_right_details}>
              {
                data.product.propertise && data.product.propertise.map(title=>{
                  return <Tag key={title} title={title}/> 
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className={styles.preview_details}>
        <p>
          {data.description}
        </p>
        {/* <ul>
          <li>
            Principals only. Recruiters, please don&apos;t contact this job
            poster.
          </li>
          <li>do NOT contact us with unsolicited services or offers</li>
        </ul> */}
      </div>
      <div className={styles.preview_button}>
        <Button text="publish" onClick={() => {
          submitPost(map,data).then(data=>{
            console.log(data);
            router.push(`/finalize?email=${data.data.email}`)
          }).catch(err=>{
            console.log(err)
          })
        }} />
      </div>
    </div>
  );
}
