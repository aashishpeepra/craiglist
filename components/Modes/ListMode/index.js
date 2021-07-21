import styles from '../Mode.module.css'

const ListMode = () => {
    return (
        <div className={styles.list}>
            <div className={styles.star}>☆</div>
            <div className={styles.date}>June 25</div>
            <div className={styles.title}>Big Share House near ig Share House nearig Share House near SSC</div>
            <div className={styles.price}>$987</div>
            <div className={styles.place}>(West Seattle)</div> 
            <div className={styles.pic}>pic</div>
            <div className={styles.bin}>🗑</div>
        </div>
    )
}

export default ListMode;