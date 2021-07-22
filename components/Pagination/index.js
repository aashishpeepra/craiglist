import styles from './Pagination.module.css'
import React, { useState } from 'react'

const goToTop = () => {
    return (
        window.scrollTo(0, 0)
    )
}

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <div className={styles.first} >&lt;&lt;</div>
            <div className={styles.prev} >&lt; prev</div>
            <div className={styles.count} >{`1-120/2000`}</div>
            <div className={styles.next} >next &gt;</div>
        </div>
    )
}

export default Pagination;