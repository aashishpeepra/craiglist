import styles from './CenterBox.module.css';
import Table from '../Table';
import MobileDropDown from '../MobileDropDown';

const community = [
    'activities',
    'artists',
    'childcare',
    'classes',
    'events',
    'general',
    'groups',
    'local news',
    'lost+found',
    'missed connections',
    'musicians',
    'pets',
    'politics',
    'rants&raves',
    'rideshare',
    'volunteers'
]
const services = [
    'automotive',
    'beauty',
    'cell/mobile',
    'computer',
    'creative',
    'cycle',
    'event',
    'farm+garden',
    'financial',
    'health/well',
    'household',
    'labor/move',
    'legal',
    'lessons',
    'marine',
    'pet',
    'real estate',
    'skilled trade',
    'sm biz ads',
    'travel/vac',
    'write/ed/tran',
]
const discussion = [
    'apple',
    'arts',
    'atheist',
    'autos',
    'beauty',
    'bikes',
    'celebs',
    'comp',
    'cosmos',
    'diet',
    'divorce',
    'dying',
    'eco',
    'feedbk',
    'film',
    'fixit',
    'food',
    'frugal',
    'gaming',
    'garden',
    'haiku',
    'help',
    'history',
    'housing',
    'jobs',
    'jokes',
    'legal',
    'manners',
    'marriage',
    'money',
    'music',
    'open',
    'parent',
    'pets',
    'philos',
    'photo',
    'politics',
    'psych',
    'recover',
    'religion',
    'rofo',
    'science',
    'spirit',
    'sports',
    'super',
    'tax',
    'travel',
    'tv',
    'vegan',
    'words',
    'writing',
]
const housing = [
    'apts/housing',
    'housing swap',
    'housing wanted',
    'office/commercial',
    'parking/storage',
    'real estate for sale',
    'rooms/shared',
    'rooms wanted',
    'sublets/temporary',
    'vacation rentals'
]
const sale = [
    'antiques',
    'appliances',
    'arts+crafts',
    'atv/utv/sno',
    'auto parts',
    'aviation',
    'baby+kid',
    'barter',
    'beauty+hlth',
    'bike parts',
    'bikes',
    'boat parts',
    'boats',
    'books',
    'business',
    'cars+trucks',
    'cds/dvd/vhs',
    'cell phones',
    'clothes+acc',
    'collectibles',
    'computer parts',
    'computers',
    'electronics',
    'farm+garden',
    'free',
    'furniture',
    'garage sale',
    'general',
    'heavy equip',
    'household',
    'jewelry',
    'materials',
    'motorcycle parts',
    'motorcycles',
    'music instr',
    'photo+video',
    'rvs+camp',
    'sporting',
    'tickets',
    'tools',
    'toys+games',
    'trailers',
    'video gaming',
    'wanted',
    'wheels+tires'
]
const jobs = [
    'accounting+finance',
    'admin/office',
    'arch/engineering',
    'art/media/design',
    'biotech/science',
    'business/mgmt',
    'customer service',
    'education',
    'etc/misc',
    'food/bev/hosp',
    'general labor',
    'government',
    'human resources',
    'legal/paralegal',
    'manufacturing',
    'marketing/pr/ad',
    'medical/health',
    'nonprofit sector',
    'real estate',
    'retail/wholesale',
    'sales/biz dev',
    'salon/spa/fitness',
    'security',
    'skilled trade/craft',
    'software/qa/dba',
    'systems/network',
    'technical support',
    'transport',
    'tv/film/video',
    'web/info design',
    'writing/editing',
]
const gigs = ['computer', 'creative', 'crew', 'domestic', 'event', 'labour', 'lanet', 'hgfd']
const resumes = []

const CenterBox = () => {
    return (
        <div className={styles.CenterBox}>
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
            <div className={styles.mobileCenter}>
                <MobileDropDown list={community} listHeading="community" />
                <MobileDropDown listHeading='services' list={services} />
                <MobileDropDown listHeading='discussion forums' list={discussion} />
                <MobileDropDown listHeading='housing' list={housing} />
                <MobileDropDown listHeading='for sale' list={sale} />
                <MobileDropDown listHeading='jobs' list={jobs} />
                <MobileDropDown listHeading='gigs' list={gigs} />
                <MobileDropDown listHeading='resumes' list={resumes} />
            </div>
        </div >
    )
}

export default CenterBox;