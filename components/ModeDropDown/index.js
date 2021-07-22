import styles from './ModeDropDown.module.css';
import React, { useState } from 'react';

const ModeDropDown = () => {

    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState(0)

    const options = ['list', 'thumb', 'gallery', 'map']

    return (
        <div className={styles.displayMode}>
            <div className={styles.dropdownSingle}>
                <div className={styles.dropdown} key={mode} onClick={() => setOpen(!open)}>
                    <img src={`/assets/${options[mode]}.png`} />{options[mode]}
                </div>
                <span>&#x25BC;</span>
            </div>
            {open &&
                <div className={styles.dropdownMenu}>
                    {options.map((value, index) =>
                        <div className={styles.dropdown} key={index} onClick={() => { setMode(index), setOpen(false) }}>
                            <img src={`/assets/${value}.png`} />{value}
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default ModeDropDown;