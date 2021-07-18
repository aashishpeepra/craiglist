import React from 'react';
import styles from './DropDown.module.css';
import Link from 'next/link'

const DropDown = ({ heading, list, hasHeading, link, myLinkHeading }) => {

    const [open, setOpen] = React.useState(false)

    return (
        <div className={styles.DropDown}>
            {hasHeading &&
                <div className={styles.heading} onClick={() => setOpen(!open)}>
                    {open ? <span className="minus">&#9662;</span> : <span className="plus">&#9656;</span>}
                    <div className={styles.linkHeading} >{heading}</div>
                </div>
            }
            <div className={open || !hasHeading ? styles.showMenu : styles.hideMenu}>
                {list.map((value, index) => {
                    let myLink = value.replace(/[ &+\/\\]/g, '-');
                    return (
                        <div key={index} className={styles.valueSize}>
                            <input
                                type="checkbox"
                                defaultChecked={link ? 'checked' : ''}
                                name={value}
                                value={value}
                                onChange={(event) => console.log(event.target.value, event.target.checked)}
                            />
                            {link ? <Link key={index} href={`/sections/${myLinkHeading}/${myLink}`}>{value}</Link> : value}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default DropDown;