import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.cityHeader}>
            <div className={styles.cityName} >seattle</div>
        </div>
    )
}

export default Header;