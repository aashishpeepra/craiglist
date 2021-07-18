import styles from '../SideMenu.module.css';
import DropDown from '../../DropDown';
import Link from 'next/dist/client/link';

const housing = [
    'apts/housing',
    'housing swap',
    'housing wanted',
    'office/commercial',
    'parking/storage',
    'real estate for sale',
    'rooms/shared',
    'rooms wanted',
    'sublets/temporary',
    'vacation rentals'
]

const commonFilters = [
    'search titles only',
    'has image',
    'posted today',
    'bundle duplicates',
    'include nearby areas'
]

const otherFilters = [
    'private room',
    'cats ok',
    'private bath',
    'dogs ok',
    'furnished',
    'no smoking',
    'wheelchair access',
    'air conditioning',
    'EV charging',
    'no application fe',
    'no broker fee'
]

const housingType = [
    'apartment',
    'condo',
    'cottage/cabin',
    'duplex',
    'flat',
    'house',
    'in-law',
    'loft',
    'townhouse',
    'manufactured',
    'assisted living',
    'land'
]

const laundry = [
    'w/d in unit',
    'w/d hookups',
    'laundry in bldg',
    'laundry on site',
    'no laundry on site'
]

const parking = [
    'carport',
    'attached garage',
    'detached garage',
    'off-street parking',
    'street parking',
    'valet parking',
    'no parking',
    'select all'
]

const rentPeriod = [
    'daily',
    'weekly',
    'monthly',
    'yearly',
]

const Housing = ({ subTitle }) => {
    return (
        <div>
            {subTitle ?
                <div className={styles.title}>{subTitle}</div>
                :
                <>
                    <div className={styles.title}>housing</div>
                    <div className={styles.linkDropDown} ><DropDown myLinkHeading='housing' heading='show 10 categories' list={housing} hasHeading link /></div>
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
                <div className={styles.capsHeading}>BEDROOMS</div>
                <div className={styles.flexSelect}>
                    <select name="min_bedrooms">
                        <option value="">min</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    -
                    <select name="max_bedrooms">
                        <option value="">max</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
            </div>
            <div className={styles.marginY} >
                <div className={styles.capsHeading}>BATHROOMS</div>
                <div className={styles.flexSelect}>
                    <select name="min_bathrooms">
                        <option value="">min</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    -
                    <select name="max_bathrooms">
                        <option value="">max</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
            </div>
            <div className={styles.marginY} >
                <div className={styles.capsHeading}>FT<sup className={styles.new}>2</sup></div>
                <div className={styles.flexInput}>
                    <input size="5" placeholder="min" value="" onChange={() => { }} />
                    <input size="7" placeholder="max" value="" onChange={() => { }} />
                </div>
            </div>
            <div className={styles.marginY} >
                <div className={styles.capsHeading}>AVAILABILITY</div>
                <div className={styles.flexSelect}>
                    <select >
                        <option value="">all dates</option>
                        <option value="0">within 30 days</option>
                        <option value="1">beyond 30 days</option>
                    </select>
                </div>
            </div>
            <div className={styles.marginY} ><DropDown list={otherFilters} /></div>
            <div className={styles.linkDropDown} ><DropDown heading='housing type' list={housingType} hasHeading /></div>
            <div className={styles.linkDropDown} ><DropDown heading='laundry' list={laundry} hasHeading /></div>
            <div className={styles.linkDropDown} ><DropDown heading='parking' list={parking} hasHeading /></div>
            <div className={styles.linkDropDown} ><DropDown heading='rent period' list={rentPeriod} hasHeading /></div>
            <div className={styles.marginY} >
                <div className={styles.capsHeading}>
                    OPEN HOUSE DATE</div>
                <div className={styles.flexSelect}>
                    <select >
                        <option value="">all dates</option>
                        <option value="0">within 30 days</option>
                        <option value="1">beyond 30 days</option>
                    </select>
                </div>
            </div>
            <div className={styles.flexInput}>
                <Link href="/sections/housing" title="clear all search parameters">reset</Link>
                <button type="button" >update search</button>
            </div>
        </div>
    )
}

export default Housing;