import styles from './RightBox.module.css';
import MobileDropDown from '../MobileDropDown';
import Link from 'next/link';

const cities = [
    'boise',
    'butte',
    'corvallis',
    'east oregon',
    'eugene',
    'great falls',
    'helena',
    'humboldt',
    'kalispell',
    'klamath falls',
    'lewiston',
    'medford',
    'missoula',
    'moses lake',
    'olympic pen',
    'oregon coast',
    'portland',
    'pullman-moscow',
    'redding',
    'roseburg',
    'salem',
    'siskiyou co',
    'skagit',
    'spokane',
    'susanville',
    'tri-cities',
    'wenatchee',
    'yakima'
]

const RightBox = () => {
    return (
        <>
            <div className={styles.rightBar}>
                <h5 className={styles.nearby}>nearby cl</h5>
                {cities.map((value, index) => <Link key={index} href="/">{value}</Link>)}
            </div>
            <div className={styles.mobileRightBar}>
                <MobileDropDown listHeading="nearby cl" list={cities} />
            </div>
        </>
    )
}

export default RightBox;