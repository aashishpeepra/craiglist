import styles from './Pagination.module.css'
import React, { useState } from 'react'

const goToTop = () => {
    return (
        window.scrollTo(0, 0)
    )
}

const Pagination = () => {

    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState(0)

    const options = ['list', 'thumb', 'gallery', 'map']

    const [openFilter, setOpenFilter] = useState(false)
    const [modeFilter, setModeFilter] = useState(0)

    const optionsFilter = ['newest', 'price ↑', 'price ↓']

    return (
        <div className={styles.paginationBox}>
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
            <div>
                <div className={styles.pagination}>
                    <div className={styles.first} >&lt;&lt;</div>
                    <div className={styles.prev} >&lt; prev</div>
                    <div className={styles.count} >{`1-120/2000`}</div>
                    <div className={styles.next} >next &gt;</div>
                </div>
            </div>
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
        </div>
    )
}

export default Pagination;