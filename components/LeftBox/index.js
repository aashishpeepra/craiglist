import styles from './LeftBox.module.css';
import Link from 'next/link';

const LeftBox = () => {
    return (
        <div className={styles.leftBar}>
            <h1 className={styles.logo}><Link href="/">craigslist</Link></h1>
            <div className={styles.createPosting}><Link href="/">create a posting</Link></div>
            <input className={styles.leftSearch} placeholder="search craiglist"></input>
            <iframe width="90%" src="https://www.youtube.com/embed/-Ileb6iOIag?controls=0" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="90%" src="https://www.youtube.com/embed/tQ0yjYUFKAE?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default LeftBox;