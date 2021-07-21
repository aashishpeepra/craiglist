import styles from '../Mode.module.css'

const GalleryMode = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.galleryImg}>
                <img src="https://source.unsplash.com/featured/?{colors}" />
            </div>
            <div className={styles.list}>
                <div className={styles.star}>☆</div>
                <div className={styles.date}>June 25</div>
                <div className={styles.title}>Big Share House near ig Share House nearig Share House near SSC</div>
                <div className={styles.price}>$987</div>
                <div className={styles.place}>(West Seattle)</div>
                <div className={styles.bin}>🗑</div>
            </div>
        </div>
    )
}

export default GalleryMode;