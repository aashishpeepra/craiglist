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

const otherFilters = [
    'available mornings',
    'available afternoons',
    'available evenings',
    'available overnight',
    'available weekdays',
    'available weekends'
]

const education = [
    'less than high school',
    'high school/GED',
    'some college',
    'associates',
    'bachelors',
    'masters',
    'doctoral',
    'select all'
]

const Resumes = () => {
    return (
        <div>
            <div className={styles.title}>resumes</div>
            <div className={styles.marginY} ><DropDown list={commonFilters} /></div>
            <div className={styles.marginY} ><DropDown list={otherFilters} /></div>
            <div className={styles.linkDropDown} ><DropDown heading='education completed' list={education} hasHeading /></div>
            <div className={styles.flexInput}>
                <Link href="/sections/resumes" title="clear all search parameters">reset</Link>
                <button type="button" >update search</button>
            </div>
        </div>
    )
}

export default Resumes;