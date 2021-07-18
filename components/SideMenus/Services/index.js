import styles from '../SideMenu.module.css';
import DropDown from '../../DropDown';
import Link from 'next/dist/client/link';

const services = [
    'automotive',
    'beauty',
    'cell/mobile',
    'computer',
    'creative',
    'cycle',
    'event',
    'farm+garden',
    'financial',
    'health/well',
    'household',
    'labor/move',
    'legal',
    'lessons',
    'marine',
    'pet',
    'real estate',
    'skilled trade',
    'sm biz ads',
    'travel/vac',
    'write/ed/tran',
]

const commonFilters = [
    'search titles only',
    'has image',
    'posted today',
    'bundle duplicates',
    'include nearby areas'
]

const Services = ({ subTitle }) => {
    return (
        <div>
            {subTitle ?
                <div className={styles.title}>{subTitle}</div>
                :
                <>
                    <div className={styles.title}>services</div>
                    <div className={styles.linkDropDown} ><DropDown myLinkHeading='services' heading='show 21 categories' list={services} hasHeading link /></div>
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
                <Link href="/sections/services" title="clear all search parameters">reset</Link>
                <button type="button" >update search</button>
            </div>
        </div>
    )
}

export default Services;