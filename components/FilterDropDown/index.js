import styles from './FilterDropDown.module.css';
import React, { useState } from 'react';

const FilterDropDown =  () => {

    const [openFilter, setOpenFilter] = useState(false)
    const [modeFilter, setModeFilter] = useState(0)

    const optionsFilter = ['newest', 'price ↑', 'price ↓']

    return (
        <div className={styles.displayMode}>
            <div className={styles.dropdownSingle}>
                <div className={styles.dropdown} key={modeFilter} onClick={() => setOpenFilter(!openFilter)}>
                    {optionsFilter[modeFilter]}
                </div>
                <span>&#x25BC;</span>
            </div>
            {openFilter &&
                <div className={styles.dropdownMenu}>
                    {optionsFilter.map((value, index) =>
                        <div className={styles.dropdown} key={index} onClick={() => { setModeFilter(index), setOpenFilter(false) }}>
                            {value}
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default FilterDropDown;