import styles from '../SideMenu.module.css';
import DropDown from '../../DropDown';
import Link from 'next/dist/client/link';

const jobs = [
    'accounting+finance',
    'admin/office',
    'arch/engineering',
    'art/media/design',
    'biotech/science',
    'business/mgmt',
    'customer service',
    'education',
    'etc/misc',
    'food/bev/hosp',
    'general labor',
    'government',
    'human resources',
    'legal/paralegal',
    'manufacturing',
    'marketing/pr/ad',
    'medical/health',
    'nonprofit sector',
    'real estate',
    'retail/wholesale',
    'sales/biz dev',
    'salon/spa/fitness',
    'security',
    'skilled trade/craft',
    'software/qa/dba',
    'systems/network',
    'technical support',
    'transport',
    'tv/film/video',
    'web/info design',
    'writing/editing',
]

const commonFilters = [
    'search titles only',
    'has image',
    'posted today',
    'bundle duplicates',
    'include nearby areas'
]

const otherFilters = [
    'internship',
    'non-profit',
    'telecommute'
]

const employmentType = [
    'full-time',
    'part-time',
    'contract',
    'employees choice'
]

const Jobs = ({ subTitle }) => {
    return (
        <div>
            {subTitle ?
                <div className={styles.title}>{subTitle}</div>
                :
                <>
                    <div className={styles.title}>jobs</div>
                    <div className={styles.linkDropDown} ><DropDown myLinkHeading='jobs' heading='show 31 categories' list={jobs} hasHeading link /></div>
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
            <div className={styles.marginY} ><DropDown list={otherFilters} /></div>
            <div className={styles.marginY} ><DropDown heading='employment type' list={employmentType} hasHeading /></div>
            <div className={styles.flexInput}>
                <Link href="/sections/jobs" title="clear all search parameters">reset</Link>
                <button type="button" >update search</button>
            </div>
        </div>
    )
}

export default Jobs;