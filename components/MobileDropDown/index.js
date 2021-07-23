import React from 'react'
import styles from './MobileDropDown.module.css'
import Link from 'next/link';

const MobileDropDown = ({ listHeading, list }) => {

    const [open, setOpen] = React.useState(false)

    return (
        <div className={styles.Bar}>
            <h5 className={styles.head} onClick={() => setOpen(!open)}>{listHeading}</h5>
            {
                open &&
                <div className={styles.listBox}>
                    {list.map((value, index) => {
                        let myLink = value.replace(/[ &+\/\\]/g, '-');
                        return (
                            <Link key={index} href={`/sections/${listHeading.replace(/[ ]/g, '-')}/${myLink}`}>{value}</Link>
                        );
                    })
                    }
                </div>
            }
        </div>
    )
}

export default MobileDropDown;