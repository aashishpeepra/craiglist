import styles from '../Mode.module.css'

const ListMode = ({ fav, date, title, price, place, pic }) => {
    return (
        <div className={styles.list}>
            <div className={styles.star}>{fav ? '★' : '☆'}</div>
            <div className={styles.date}>{date}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>${price}</div>
            <div className={styles.place}>({place})</div>
            {pic && <div className={styles.pic}>pic</div>}
            <div className={styles.bin}>🗑</div>
        </div>
    )
}

export default ListMode;