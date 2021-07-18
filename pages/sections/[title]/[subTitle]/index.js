import { useRouter } from 'next/router'
import styles from '../Title.module.css'
import Housing from '../../../../components/SideMenus/Housing'
import Community from '../../../../components/SideMenus/Community'
import Services from '../../../../components/SideMenus/Services'
import Resumes from '../../../../components/SideMenus/Resumes'
import Sale from '../../../../components/SideMenus/Sale'
import Jobs from '../../../../components/SideMenus/Jobs'
import Gigs from '../../../../components/SideMenus/Gigs'

const getSideBar = (value, subValue) => {
  if (value === 'community') return <Community subTitle={subValue} />
  if (value === 'services') return <Services subTitle={subValue} />
  if (value === 'discussion-forums') return 'Comming soon'
  if (value === 'housing') return <Housing subTitle={subValue} />
  if (value === 'for-sale') return <Sale subTitle={subValue} />
  if (value === 'jobs') return <Jobs subTitle={subValue} />
  if (value === 'gigs') return <Gigs subTitle={subValue} />
  if (value === 'resumes') return <Resumes />
}

const Comment = () => {
  const router = useRouter()
  const { title, subTitle } = router.query

  return (
    <div className={styles.titleContainer}>
      <div className={styles.sidebar}>{getSideBar(title, subTitle)}</div>
      <div className={styles.titleMain}></div>
    </div>
  )
}

export default Comment