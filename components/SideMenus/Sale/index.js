import styles from '../SideMenu.module.css';
import DropDown from '../../DropDown';
import Link from 'next/dist/client/link';

const sale = [
    'antiques',
    'appliances',
    'arts+crafts',
    'atv/utv/sno',
    'auto parts',
    'aviation',
    'baby+kid',
    'barter',
    'beauty+hlth',
    'bike parts',
    'bikes',
    'boat parts',
    'boats',
    'books',
    'business',
    'cars+trucks',
    'cds/dvd/vhs',
    'cell phones',
    'clothes+acc',
    'collectibles',
    'computer parts',
    'computers',
    'electronics',
    'farm+garden',
    'free',
    'furniture',
    'garage sale',
    'general',
    'heavy equip',
    'household',
    'jewelry',
    'materials',
    'motorcycle parts',
    'motorcycles',
    'music instr',
    'photo+video',
    'rvs+camp',
    'sporting',
    'tickets',
    'tools',
    'toys+games',
    'trailers',
    'video gaming',
    'wanted',
    'wheels+tires'
]

const commonFilters = [
    'search titles only',
    'has image',
    'posted today',
    'bundle duplicates',
    'include nearby areas'
]

const condition = [
    'new',
    'like new',
    'excellent',
    'good',
    'fair',
    'salvage'
]

const otherFilters = [
    'cryptocurrency ok',
    'delivery available'
]


const language = [
    'afrikaans',
    'català',
    'dansk',
    'deutsch',
    'english',
    'español',
    'suomi',
    'français',
    'italiano',
    'nederlands',
    'norsk',
    'português',
    'svenska',
    'filipino',
    'türkçe',
    '中文',
    'العربية',
    '日本語',
    '한국말',
    'русский',
    'tiếng việt'
]

const Sale = ({ subTitle }) => {
    return (
        <div>
            {subTitle ?
                <div className={styles.title}>{subTitle}</div>
                :
                <>
                    <div className={styles.title}>for sale</div>
                    <div className={styles.linkDropDown} ><DropDown myLinkHeading='for-sale' heading='show 45 categories' list={sale} hasHeading link /></div>
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
            <div className={styles.marginY} >
                <div className={styles.capsHeading}>PRICE</div>
                <div className={styles.flexInput}>
                    <input size="5" name="min_price" placeholder="min" value="" onChange={() => { }} />
                    <input size="7" name="max_price" placeholder="max" value="" onChange={() => { }} />
                </div>
            </div>
            <div className={styles.marginY} >
                <div className={styles.capsHeading}>MAKE AND MODAL</div>
                <div className={styles.flexInput}>
                    <input size="19" placeholder="make /model" value="" onChange={() => { }} />
                </div>
            </div>
            <div className={styles.marginY} ><DropDown heading='condition' list={condition} hasHeading /></div>
            <div className={styles.marginY}><DropDown list={otherFilters} /></div>
            <div className={styles.marginY}><DropDown heading='language of posting' list={language} hasHeading /></div>
            <div className={styles.flexInput}>
                <Link href="/sections/for-sale" title="clear all search parameters">reset</Link>
                <button type="button" >update search</button>
            </div>
        </div>
    )
}

export default Sale;