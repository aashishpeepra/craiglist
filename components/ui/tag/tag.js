import styles from "./tag.module.css";

export default function Tag({title}){
    return <div className={styles.tag}><p>{title}</p></div>
}