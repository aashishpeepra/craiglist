import styles from '../SideMenu.module.css';
import DropDown from '../../DropDown';
import Link from 'next/dist/client/link';

const commonFilters = [
    'search titles only',
    'has image',
    'posted today',
    'bundle duplicates',
    'include nearby areas'
]

const gigs = ['computer', 'creative', 'crew', 'domestic', 'event', 'labour', 'lanet', 'hgfd']

const Gigs = ({ subTitle }) => {
    return (
        <div>
            {subTitle ?
                <div className={styles.title}>{subTitle}</div>
                :
                <>
                    <div className={styles.title}>gigs</div>
                    <div className={styles.linkDropDown} ><DropDown myLinkHeading='gigs' heading='show 8 categories' list={gigs} hasHeading link /></div>
                </>
            }
            <div className={styles.marginY} ><DropDown list={commonFilters} /></div>
            <div className={styles.marginY} >
                <div className={styles.capsHeading}>MILES FROM ZIP</div>
                <div className={styles.flexInput}>
                    <input size="5" maxLength="5" inputMode="numeric" placeholder="miles" name="search_distance" value="" onChange={() => { }} />
                    <input placeholder="from zip" size="7" name="postal" value="" onChange={() => { }} />
                </div>
            </div>
            <div className={styles.flexInput}>
                <Link href="/sections/gigs" title="clear all search parameters">reset</Link>
                <button type="button" >update search</button>
            </div>
        </div>
    )
}

export default Gigs;