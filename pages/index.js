import Link from 'next/link';
import LeftBox from '../components/LeftBox';
import RightBox from '../components/RightBox';
import Header from '../components/Header';
import CenterBox from '../components/CenterBox';
import SearchBox from '../components/SearchBox';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <section className={styles.desktopPageContainer}>
        <div className={styles.left}><LeftBox /></div>
        <div className={styles.center}><Header /><CenterBox /></div>
        <div className={styles.right}><RightBox /></div>
      </section>

      <section className={styles.mobilePageContainer}>
        <Header />
        <SearchBox />
        <CenterBox />
        <RightBox />
      </section>

      <footer>
        <ul className={styles.clfooter}>
          <li>© 2021 <span className={styles.desktop}>craigslist</span><span className={styles.mobile}>CL</span></li>
          <li><Link href="/">help</Link></li>
          <li><Link href="/">safety</Link></li>
          <li className={styles.desktop}><Link href="/">privacy</Link><sup className={styles.new}>new</sup></li>
          <li className={styles.desktop}><Link href="/">feedback</Link></li>
          <li><Link href="/">terms</Link></li>
          <li><Link href="/">about</Link></li>
        </ul>
      </footer>
    </div>
  )
}
