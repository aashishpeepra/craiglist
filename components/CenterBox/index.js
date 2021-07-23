import styles from './CenterBox.module.css';
import Table from '../Table';
import {community,discussion,housing,jobs,sale,services,gigs,resumes} from "../../constants/constants";



const CenterBox = () => {
    return (
        <div className={styles.mainCenter}>
            <div className={styles.col1}>
                <Table heading='community' cols={2} rows={9} list={community} />
                <Table heading='services' cols={2} rows={11} list={services} />
                <Table heading='discussion forums' cols={3} rows={17} list={discussion} />
            </div>
            <div className={styles.col2}>
                <Table heading='housing' cols={1} rows={10} list={housing} />
                <Table heading='for sale' cols={2} rows={23} list={sale} />
            </div>
            <div className={styles.col3}>
                <Table heading='jobs' cols={1} rows={31} list={jobs} />
                <Table heading='gigs' cols={2} rows={4} list={gigs} />
                <Table heading='resumes' cols={0} rows={0} list={resumes} />
            </div>
        </div>
    )
}

export default CenterBox;