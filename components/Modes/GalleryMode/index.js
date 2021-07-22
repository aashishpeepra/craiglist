import styles from '../Mode.module.css'

const GalleryMode = ({ fav, date, title, price, place, pic, picUrl }) => {
    return (
        <div className={styles.gallery}>
            <div className={styles.galleryImg}>
                {pic ? <img src={picUrl} /> : <img src={picUrl} />}
            </div>
            <div className={styles.list}>
                <div className={styles.star}>{fav ? '★' : '☆'}</div>
                <div className={styles.date}>{date}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.price}>${price}</div>
                <div className={styles.place}>({place})</div>
                <div className={styles.bin}>🗑</div>
            </div>
        </div>
    )
}

export default GalleryMode;