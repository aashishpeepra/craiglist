import styles from '../Mode.module.css'
import Link from "next/link";

const GalleryMode = ({ fav, date, title, price, place, pic, picUrl,section,subsection,id }) => {
    return (
        <div className={styles.gallery}>
            <div className={styles.galleryImg}>
                {pic ? <img src={picUrl} /> : <img src={picUrl} />}
            </div>
            <div className={styles.list}>
                <div className={styles.star}>{fav ? '★' : '☆'}</div>
                <div className={styles.date}>{date}</div>
                <div className={styles.title}>
                    <Link href={`/section/${section}/${subsection}/${id}`}>
                        <a>
                            {title}
                        </a>
                    </Link>
                </div>
                <div className={styles.price}>${price}</div>
                <div className={styles.place}>({place})</div>
                <div className={styles.bin}>🗑</div>
            </div>
        </div>
    )
}

export default GalleryMode;