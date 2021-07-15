import styles from './Table.module.css';
import Link from 'next/link';

const getRow = (col, row, list) => {
    for (let i = 0; i < col; i++) {
        const start = row * i;
        const limit = start + row;
        const rowList = list.splice(start, start + limit)
        console.log(rowList, start, limit)
        return (
            <div>
                {rowList.map((value, index) => <Link key={index} href="/">{value}</Link>)}
            </div>
        )
    }
}

const Table = ({ heading, cols, rows, list}) => {
    return (
        <div className={styles.table}>
            <div className={styles.tableHeading}><Link href="/" >{heading}</Link></div>
            <div className={ heading !== 'housing' ? styles.tableContent : styles.tableContentFlex}>
                {[...Array(cols)].map((e, i) => {
                    let start = rows * i;
                    let limit = start + rows;
                    let rowList = list.slice(start, limit)
                    return (
                        <div key={i} className={ heading !== 'discussion forums' ? styles.tableCol : styles.smaller}>
                            {rowList.map((value, index) => <Link key={index} href="/">{value}</Link>)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Table;