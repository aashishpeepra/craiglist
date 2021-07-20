import styles from './SearchBox.module.css';

const SearchBox = () => {
    return (
        <div className={styles.querybox}>
            <input className={styles.searchBox} type="text" placeholder="search" defaultValue="" autoCorrect="off" autoCapitalize="off" autoComplete="off" />
            <div className={styles.searchIcon}>
                <img src="https://img.icons8.com/material-two-tone/24/000000/search.png" />
            </div>
        </div>
    )
}

export default SearchBox;